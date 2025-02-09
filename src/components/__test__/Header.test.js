import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../../store/appStore";

it("Should render header component with login button", () => {
  render(
    <Router>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </Router>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});
