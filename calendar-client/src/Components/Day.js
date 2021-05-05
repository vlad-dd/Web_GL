import React from "react";
import Event from "./Event";

const Day = props => {
  return (
    <div className="day">
      <h4>{props.day}</h4>

      <div className="event_container">
        {props.events.map((event, index) => (
          event.day === props.day &&
          <Event 
            key= {event._id}
            event={event.event}
            onEdit={event.onEdit}
            id={event._id}
            color={event.bkgColor}
            dayIndex={props.dayIndex}
            deleteEvent={props.deleteEvent}
            editEvent={props.editEvent}
            updateEvent={props.updateEvent}
            input={props.input}
            updateInput={props.updateInput}
            saveEventChanges={props.saveEventChanges}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;
