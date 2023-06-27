/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { DateHeader } from "../src/App";
import "@testing-library/jest-dom";

it("should display the date right", function () {
  const date = new Date("1995-12-17T03:24:00");
  const { queryByTestId } = render(<DateHeader time={date} />);
  expect(queryByTestId("dateHead")).toHaveTextContent("17 Dec 1995");
});

it("should display the date right 2", function () {
  const date = new Date("Tue, 27 Jun 2023 06:03:19 GMT");
  const { queryByTestId } = render(<DateHeader time={date} />);
  expect(queryByTestId("dateHead")).toHaveTextContent("27 Jun 2023");
});
