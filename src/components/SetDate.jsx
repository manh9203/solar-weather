import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

function SetDate({ startDate, setStartDate, endDate, setEndDate, callAPI }) {
  function handleStartDateChange(date) {
    const actual = new Date(date);
    actual.setDate(actual.getDate() + 6);
    setEndDate(actual);
    setStartDate(date);
  }

  function handleEndDateChange(date) {
    const actual = new Date(date);
    actual.setDate(actual.getDate() - 6);
    setStartDate(actual);
    setEndDate(date);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // call the DONKI api with start and end dates over here
    //for testing
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    callAPI();
  }

  return (
    <form onSubmit={handleSubmit} className="dateForm">
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <DatePicker
          data-testid="start-date-picker"
          id="startDate"
          selected={startDate}
          onChange={(date) => handleStartDateChange(date)}
          dateFormat="MM/dd/yyyy"
          required
        />
      </div>
      <div>
        
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
      
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
SetDate.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  callAPI: PropTypes.func,
};

export default SetDate;
