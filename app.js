const rootElement = document.getElementById("root");

const reactElement = React.createElement("h1", {}, "Welcome to react");

const root = ReactDOM.createRoot(rootElement);

root.render(reactElement);
