import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

function SetDate({ startDate, setStartDate, endDate, setEndDate }) {
  return (
    <form className="dateForm">
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <DatePicker
          data-testid="start-date-picker"
          id="startDate"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setEndDate(new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000));}}
          dateFormat="MM/dd/yyyy"
          maxDate={endDate}
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
