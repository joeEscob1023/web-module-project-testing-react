import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Show from "./../Show";
import Episode from "../Episode";

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

test("renders testShow and no selected Season without errors", () => {
  render(<Show />);
});

test("renders Loading component when prop show is null", () => {
  render(<Show show={null} />);
  const fetchData = screen.queryAllByTestId("loading-container");
  expect(fetchData).toBeTruthy();
});

test("renders same number of options seasons are passed in", () => {
  render(<Show show={testShow} />);
  const seasonOptions = screen.queryAllByTestId("season-option");
  expect(seasonOptions).toHaveLength(4);
});

test("handleSelect is called when an season is selected", () => {
  //I feel like I'm really close to figuring this out but I couldn't figure out how to connect to the handleSelect
  //   render(<Show />);
  //   const button = screen.getByLabelText("Select A Season", {
  //     selector: "input",
  //   });
  //   userEvent.click(button);
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
  const { rerender } = render(<Show selectedSeason={"none"} />);
  let selectSeasons = screen.queryAllByTestId("season-option");
  //expect(selectSeasons).toHaveLength(1);
  rerender(<Episode episode={1} />);
  //   selectSeasons = screen.queryAllByTestId("season-option");
  //   expect(selectSeasons).toHaveLength(1);
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
