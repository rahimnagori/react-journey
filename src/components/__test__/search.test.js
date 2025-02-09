import { render } from "@testing-library/react";
import { Router } from "react-router";
import Body from "../Body";
import MOCK_DATA from "./mocks/restaurantListMock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with Search", async () => {
  // await act(async () =>
  //   render(
  //     <Router>
  //       <Body />
  //     </Router>
  //   )
  // );
});
