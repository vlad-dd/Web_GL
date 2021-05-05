import React from "react";

const Form = props => {
  return (
    <div className="form">
      <select onChange={props.selectDay}>
        {props.days.map((day, index) => (
          <option value={index} key={day + index}>{day}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="What to do"
        name='newEvent'
        value={props.newEvent}
        onChange={props.updateInput}
      />

      <button onClick={props.uploadEvent}>Submit</button>
    </div>
  );
};

export default Form;
