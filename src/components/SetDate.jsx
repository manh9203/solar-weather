import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SetDate = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function handleStartDateChange(date) {
    setStartDate(date);
    setEndDate(new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000)); // Set end date as 6 days after start date
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Call the DONKI API with start and end dates here

    // Pass the selected dates back to the parent component
    props.onDateChange(startDate, endDate);

    // For testing
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);

    // Reset
    setStartDate(null);
    setEndDate(null);
  }

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
        onChange={(date) => setEndDate(date)}
        dateFormat="MM/dd/yyyy"
        required
        disabled={!startDate} // Disable end date until a start date is selected
        minDate={startDate} // Restrict selection to be after or equal to the start date
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SetDate;
