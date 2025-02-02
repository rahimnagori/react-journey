import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "I'm heading");
const childElement = React.createElement("div", { id: "child" }, [
  heading,
  heading,
  heading,
]);
const parentElement = React.createElement(
  "div",
  { id: "parent" },
  childElement
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentElement);
