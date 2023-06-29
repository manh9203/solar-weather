/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from "@testing-library/react";
import SetDate from "../src/components/SetDate";
import "@testing-library/jest-dom";
import "@testing-library/user-event";

describe("setDate functionality", () => {
  it("should show 2 things, one for startDate and one for endDate", () => {
    const { getByLabelText } = render(<SetDate />);
    expect(getByLabelText("Start Date:")).toBeInTheDocument();
    expect(getByLabelText("End Date:")).toBeInTheDocument();
  });
  // Use of 3rd Party Thing really inhibits testing... I don't know how to
  // like access the insides of this thing
  it("should display the dates properly", () => {
    const { getByDisplayValue } = render(
      <SetDate
        startDate={new Date(1993, 6, 28)}
        endDate={new Date(1993, 6, 29)}
      />
    );
    expect(getByDisplayValue("07/28/1993")).toBeInTheDocument();
    expect(getByDisplayValue("07/29/1993")).toBeInTheDocument();
  });
  it("Updateable?", async () => {
    let sD = new Date(2023, 5, 14);
    let eD = new Date(2023, 5, 21);
    const setSD = (x) => (sD = x);
    const setED = (x) => (eD = x);
    const { getByDisplayValue, getByLabelText } = render(
      <SetDate
        startDate={sD}
        endDate={eD}
        setStartDate={setSD}
        setEndDate={setED}
      />
    );
    expect(getByDisplayValue("06/14/2023")).toBeInTheDocument();
    expect(getByDisplayValue("06/21/2023")).toBeInTheDocument();

    const datePicker = getByLabelText("Start Date:");
    fireEvent.change(datePicker, { target: { value: "10/29/2020" } });
    expect(datePicker.value).toBe("10/29/2020");
  });

  // I really have no idea how to check the 1-week rule. Don't know how to
  // interface with the 3rd party thing.
});
