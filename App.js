/*
<div id="parent">
    <div id="child">
            <h1>I'm heading</h1>
            <h1>I'm heading</h1>
            <h1>I'm heading</h1>
    </div>
</div>
*/

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
