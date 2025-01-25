import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1>This is an element!</h1>;
root.render(jsxHeading);

function HeadingComponent() {
  return <h1>This is a component!</h1>;
}
// const HeadingComponent = () => <h1>This is a component!</h1>
root.render(<HeadingComponent />);
