import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Display from "./../Display";

import Show from "./../Show";

test("renders without error", () => {
  render(<Display />);
});

const testShow = {
  //add in approprate test data structure here.
  show: {
    name: "",
    summary: "",
    seasons: [
      {
        id: 1,
        name: "",
        episodes: [],
      },
      {
        id: 2,
        name: "",
        episodes: [],
      },
      {
        id: 3,
        name: "",
        episodes: [],
      },
      {
        id: 4,
        name: "",
        episodes: [],
      },
    ],
  },
};

test("when the fetch button is pressed, the show component will display.", () => {
  render(<Display />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  render(<Show />);
});

test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", () => {
  const { rerender } = render(<Display selectedSeason={"none"} />);
  const button = screen.getByRole("button");
  userEvent.click(button);

  rerender(<Display selectedOptions={4} />);
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
