import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../../store/appStore";

it("Should render header component with login button", () => {
  render(
    <Router history={history}>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </Router>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with 0 cart items", () => {
  render(
    <Router>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </Router>
  );

  // const cartItems = screen.getByText("Cart (0 items)");
  const cartItems = screen.getByText(/Cart/); // Add regex to check whether cart is there or not?
  expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <Router>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </Router>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  // const logoutButton = screen.getByRole("button", { name: "Logout" });
  // expect(logoutButton).toBeInTheDocument();
});
