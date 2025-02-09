import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/restaurantCardMock.json";

it("Should render the RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Pizza Hut");
  expect(restaurantName).toBeInTheDocument();
});

it("Should render the RestaurantCard component with promoted label", () => {
  //    Test it
});
