import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

function SetDate({ startDate, setStartDate, endDate, setEndDate, callAPI }) {
  function handleStartDateChange(date) {
    const actual = new Date(date);
    actual.setDate(actual.getDate() + 7);
    setEndDate(actual);
    setStartDate(date);
  }

  function handleEndDateChange(date) {
    const actual = new Date(date);
    actual.setDate(actual.getDate() - 7);
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
    <form onSubmit={handleSubmit}>
      <legend>Display any 7 days of Space Weather Information!</legend>
      <label htmlFor="startDate">Start Date:</label>
      <DatePicker
        data-testid="start-date-picker"
        id="startDate"
        selected={startDate}
        onChange={(date) => handleStartDateChange(date)}
        dateFormat="MM/dd/yyyy"
        required
      />

      <label htmlFor="endDate">End Date:</label>
      <DatePicker
      data-testid="end-date-picker"
        id="endDate"
        selected={endDate}
        onChange={(date) => handleEndDateChange(date)}
        dateFormat="MM/dd/yyyy"
        data-test
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
SetDate.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
};

export default SetDate;
