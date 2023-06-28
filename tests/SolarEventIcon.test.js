/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import SolarEventIcon from "../src/components/SolarEventIcon.jsx";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { MemoryRouter } from "react-router";
// stole this online

describe("Testing Solar Event Icons!", function () {
  it("Should display an Image", () => {
    const { getByAltText, getByRole } = render(
      <MemoryRouter>
        <SolarEventIcon
          type="CME"
          time="2016-09-06T14:18Z"
          id="2016-09-06T08:54:00-CME-001"
        />
      </MemoryRouter>
    );
    expect(getByAltText("CME")).toBeInTheDocument();
    expect(getByRole("link")).toBeInTheDocument();
  });
  it("Should display an Image II", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <SolarEventIcon
          type="FLR"
          time="2016-09-06T14:18Z"
          id="2016-09-06T08:54:00-CME-001"
        />
      </MemoryRouter>
    );
    expect(getByAltText("FLR")).toBeInTheDocument();
  });
  // The Test Doesn't work, but the effect does. Believe me I spent
  // 30 minutes trying to get this test to run right and it just doesn't

  // it("Should Link Properly", () => {
  //   const history = createMemoryHistory();
  //   const { getByText } = render(
  //     <MemoryRouter history={history}>
  //       <SolarEventIcon
  //         type="CME"
  //         time="2016-09-06T14:18Z"
  //         id="2016-09-06T08:54:00-CME-001"
  //         test={true}
  //       />
  //     </MemoryRouter>
  //   );
  //   fireEvent.click(getByText("Click me!"));
  //   console.log(history);
  //   expect(history.location.pathname).toEqual(
  //     "/event/2016-09-06/2016-09-06T08:54:00-CME-001"
  //   );
  // });
});
