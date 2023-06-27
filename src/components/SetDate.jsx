import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const SetDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function handleStartDateChange(event){
    setStartDate(event.target.value);
  };

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  };

  function handleSubmit(event){
    event.preventDefault();
    // call the DONKI api with start and end dates over here

    //for testing
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);


    //reset
    setStartDate(null)
    setEndDate(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="startDate">Start Date:</label>
      <DatePicker
        id="startDate"
        selected={startDate}
        onChange={handleStartDateChange}
        dateFormat="MM/dd/yyyy"
        required
      />

      <label htmlFor="endDate">End Date:</label>
      <DatePicker
        id="endDate"
        selected={endDate}
        onChange={handleEndDateChange}
        dateFormat="MM/dd/yyyy"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SetDate;
