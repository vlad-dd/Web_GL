import React from 'react';
import { Link } from 'react-router-dom';



const Register = (props) => {
    return (
        <div>
             <img class="image" src="http://www.cfdesigner.com/codepen/rocket-page-logo.png" alt="rocket-image" />
            <form className="register_form d-table mx-auto bg-light">
                <h2>Register</h2>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={props.updateInput} type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="register_firstname">First name</label>
                    <input onChange={props.updateInput} className="form-control" name="firstname" id="register_firstname" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                    <label for="register_lastname">Last name</label>
                    <input onChange={props.updateInput} className="form-control" name="lastname" id="register_lastname" placeholder="Enter last name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={props.updateInput} type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword2">Retype password</label>
                    <input onChange={props.updateInput} type="password" className="form-control" name="rPassword" id="exampleInputPassword2" placeholder="Retype password" />
                </div>

                <Link to='/login' className="d-block">Already registered?</Link>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>)
}

export default Register;