import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import uuid from "uuid";
import Register from './Components/Register';
import Login from "./Components/Login";
import Day from "./Components/Day";
import Form from "./Components/Form";
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      events: [],
      selectedDay: 0,
      newEvent: "",
      updateEvent:"",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      rPassword: "",
      isAuth: false
    };
  }

  componentDidMount() {
    var token = localStorage.getItem('token')

    axios.post('http://localhost:4000/user/login_with_token', {}, {headers: {token: token}})
    .then(response => {
      if(response.status === 200) {
        this.setState({
          isAuth: true,
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        })
      }
    })
    .catch(err => {
      console.log(err)
    })

    this.getUserEvents();

  }
  
  
  // REQ to BACKEND 
  getUserEvents = () => {
    var token = localStorage.getItem('token');
      axios.get('http://localhost:4000/user/get_user_events', {headers: {token: token}})
       .then(response => {
         // console.log(response + "bla" + response.data + "events uploaded")
         var events = response.data.map(data => {
          //  console.log(data)
           return data;
         })
         this.setState({
           events: [...events]
         })
       })
       .catch(err => {
         console.log('Eroare: ' + err)
       })
    } 

  tryLogin = (e) => {
    e.preventDefault()

    if(this.state.email && this.state.password) {
      axios.post('http://localhost:4000/login', {email: this.state.email, password: this.state.password})
      .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log(res, res.data.token)
        this.setState({
          isAuth: true
        })
      })
      .catch(err => {
        if(err) {
          console.log(err)
        }
      })
    }
  }

  uploadEvent = (e) => {
    e.preventDefault()
    
    if (this.state.newEvent === "") {
      alert("Please fill in field");
    } else {
      var token = localStorage.getItem('token')
      axios.post('http://localhost:4000/user/post_event',
      {
        event: this.state.newEvent,
        day: this.state.days[this.state.selectedDay],
        bkgColor: this.randomizeColor(),
      },
      {headers: {token: token}}
      )
      .then(response => {
        this.getUserEvents();
        this.setState({
          newEvent: ""
        })
      })
      .catch(err => {
        console.log(err + ' eroare')
      })
    
    }
  }

  deleteEvent = (e, eventId, dayIndex) => {
    var token = localStorage.getItem('token');
    axios.post("http://localhost:4000/user/delete_event",
    {
      _id: eventId
    },
    {
      headers: {token: token}
    })
    .then(response => {
      console.log(response)
      this.getUserEvents();
    })
    .catch(err => {
      if(err) {
        console.log(err)
      }
    })
  };

// FRONTEND
  selectDay = e => {
    var dayIndex = e.target.selectedIndex;

    this.setState({
      selectedDay: dayIndex
    });
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  randomizeColor = index => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
  };


  editEvent = (e, eventId) => {
    var events = [...this.state.events];
    var editedEventIndex = events.findIndex(event => event._id === eventId);
    // console.log(editedEventIndex, eventId)
    !events[editedEventIndex].onEdit
      ? (events[editedEventIndex].onEdit = true)
      : (events[editedEventIndex].onEdit = false);
  
    this.setState({
      events,
      updateEvent: events[editedEventIndex].event
    });
  };

  saveEventChanges = (eventId) => {
    var token = localStorage.getItem("token");
    var editedEventIndex = this.state.events.findIndex(event => event._id === eventId);
    var event = this.state.events[editedEventIndex]
    event.onEdit = false;
    console.log(eventId);

    axios.post("http://localhost:4000/user/update_event",
    {
      _id: eventId,
      updated_event: this.state.updateEvent
    },
    {
      headers: {token: token}
    })
    .then(response => {
      // console.log("aici " + JSON.parse(response.data))
      this.getUserEvents();
      this.setState({
        updateEvent:"",
        events: this.state.events
      })
    })
    .catch(err => {
      if(err) {
        console.log("ERROR: " + err)
      }
    })
  };

  render() {
    return (
      <Router>
        {this.state.isAuth && <Redirect to='/calendar'></Redirect>}
        <Switch>
          <Route path='/login' render={() => 
            <Login tryLogin={this.tryLogin}
            updateInput={this.updateInput} />}>  
          </Route>
          <Route path='/register' render={() =>
            <Register updateInput={this.updateInput}/>}></Route>
         {this.state.isAuth && <Route path='/calendar'>
            <div className="App">
              <h4>Calendar</h4>

              <div className="week">
                {this.state.days.map((day, index) => (
                  <Day
                  key={day}
                  day={day}
                  dayIndex={index}
                  events={this.state.events}
                  colorIndex={this.state.currentColorIndex}
                  color={this.state.randomColors}
                  deleteEvent={this.deleteEvent}
                  editEvent={this.editEvent}
                  updateEvent={this.state.updateEvent}
                  saveEventChanges={this.saveEventChanges}
                  input={this.state.input}
                  updateInput={this.updateInput}
                  />
                  ))}
              </div>

              <Form
                days={this.state.days}
                selectDay={e => this.selectDay(e)}
                uploadEvent={this.uploadEvent}
                updateInput={this.updateInput}
                newEvent={this.state.newEvent}
                />
            </div>
          </Route>
        }
          <Route path='/' render={() => this.state.isAuth ? <Redirect to='/calendar'/> : <Redirect to='/login' />}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
