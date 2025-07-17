# Timestamps

## EP-01 - Inception

- Length of the course 43 hours 23 mins.
- Create a basic HTML.
- Use JavaScript to render Hello World!.
- Add React using CDN.
- 00:31 - Hello world! program using React CDN.
- 00:41 - App.js to write React code.
- React element is a JavaScript object.
- 01:02 - react.createElement() can have array of children to create sibling elements.
- Introduction to JSX - Because of this messy createElement() structure, JSX got introduced.

## EP-02 - Igniting our app

- 00:15 - Introduction to npm.
- 00:08 - npm, package.json, bundler.
- 01:05 - Igniting the app.

## EP-03 - Laying the foundation

- 00:11 - React element.

## EP-04 - Talk is Cheap, show me the code

- 00:03 - App overview
- 00:05 - App planning

## EP-05 - Let's get hooked

- 00:05 - Restructure files and cleanup.
- 00:50 - Filtering the data.
- 01:15 - Hooks
- 01:45 - Reconciliation & React Fiber

## EP-06 - Exploring the World

- 00:00 - Monolith & Microservice Architecture.
- 00:21 - useEffect() Hook
- 00:35 - CORS error
- 00:52 - Shimmer UI
- 01:09 - Header changes
- 01:33 - Search functionality

## EP-07 - Finding the path

- 00:02 - useEffect() & useState() dive deep.
- 00:16 - Creating routes and using library react-router.
- 00:43 - Children routes.
- 00:50 - Outlet to render children.
- 00:55 - Links - Change route w/o reload.
- 01:05 - Types of routing - Client side routing and server side routing.
- 01:10 - Dynamic Routing - Restaurant details page.
- 01:40 - GraphQL overview.

## EP-08 - Let's get classy

- 00:49 - Component lifecycle
- 01:09 - Calling an API

## EP-09 - Optimizing our App

- 00:00 - Single responsibility principle.
- 00:08 - Custom hooks.
- 00:33 - Custom hook to check user's online / offline status.
- 01:05 - Breaking the application into smaller chunks.

## EP-10 - Jo dikhta hai wo bikta hai

- 00:00 - Start using CSS

## EP-11 - Data is the new oil

- 00:00 - Higher order component.
- 01:45 - Controlled and uncontrolled application.
- 02:00 - Lifting the props up or passing to parent
- 02:08 - Props drilling
- 02:14 - React context

## EP-12 - Let's build our store

- 00:00 - Redux is not mandatory.
- 00:17 - RTK architecture.
- 00:30 - Redux flow.
- 00:40 - RTK Setup.
- 01:37 - Create Cart.
- 01:50 - Interview tips.
- 02:35 - RTK Queries

## EP-13 - Time for test

- 00:02 - Everything about testing.
- 00:17 - Setup testing.
- 00:52 - Write first test.
- 01:55 - Grouping test cases.
- 02:04 - Dive deep into advanced unit testing.
- 02:42 - Integration testing.
- 03:05 - Important tests

# Questions

- What is CDN?
- Why to use CDN?
- Pros and Cons of using CDN?
- Why two files: React, ReactDOM?
  Since React doesn't only work on browser, ReactDOM is specifically for browsers hence they have two files. React is the core React and ReactDOM is browser operations.
- Does sequence of the included script files (cdns - react, reactDOM, app.js) matters?
- What is crossorigin on cdn files?
- What is the difference between development and production files?
- Git Vs GitHub Vs BitBucket?
- npx vs npm
- named export vs default export
- Why we write super(props) in class based component?
- SASS vs SCSS.
- Can we wrap a component with two different providers?
- RTK Queries.
- Basic questions
  - Why do we use Doctype in HTML?
  - use of <head> tag?
  - use of defer & async in script tag.

# Notes

- root.render() replaces any content in the root id.
- React is called a library because it can be applied or work on a portion of an app or HTML.
- React doesn't make our application fast. There are many other libraries and packages which makes our app fast.
- npm doesn't have a full form. npm manage the JS packages. It doesn't have a full form. Node package manager is not a full form of it but it does manage JS packages.
- package.json store the information of the packages installed in the application along with their version. ex: "dependency": "1.2.3".
- package-lock.json keeps the record of the pacakges, their dependent packages and exact version of everything.
- node_modules is the folder where all the installed dependencies are stored. When we install any dependency using npm, actual code of the dependency reside inside node_modules folder.
- fetching React or any other dependency from cdn is a costly work. It needs a network call to fetch that dependency.
- We should avoid using cdn and install it as a dependency.
- Loading images is a costly work.
- To make the application older browser compatible, use browserslist package. Refer: https://browserslist.dev/
- npx command is used to exectute a package.
- React element is an object created using React.createElement(). When this element is rendered on DOM then it become HTML.
- UI that changes based on data from API those UI is called 'Config Driven UI'.
- React is very good and efficient in DOM manipulation hence makes the apps faster.
- Rendering element based on condition is called conditional rendering.
- In single page application, page doesn't change, it's a same page but components keeps changing based on the route using a component called <Link>.
- Hence Single Page Application are faster.
- Following techniques are used to do performance improvements:
  - Lazy loading or chunking.
  - While using Redux, subscribe to the most needed store / slice.
- Options to add style in the project:
  - index.css file.
  - SASS and SCSS.
  - Styled components.
  - Using libraries or CSS frameworks: Material UI, Tailwind CSS, Chakra UI, Bootstrap, Ant Design etc.

## npm init

- npm init
- This will generate a package.json file.
- package.json is a configuration for npm. It consist of list of packages / dependencies which are installed along with their version information on the project.
- A dependency / package can have it's dependent package as well and those depenedencies can have their own dependencies.
- Every dependency has their own package.json and package-lock.json that manages it's dependencies.
- The most important package in a project is a bundler.

## bundler

- A bundler helps minimize the code by chunking or bundling the code before pushing the code to production.
- Some of the popular bundlers are: webpack, parcel, vite etc.
- node_modules are exempted from code bundling.

### Parcel

- Parcel is a bundler and getting popular day by day.
- To install it to the application execute: npm i -D parcel.
- Bundler needs to be installed as a devDependency in the project, that means, it is only needed for the development work.
- Parcel does the following:
- Dev build
- Local server
- HMR - Hot module replacement
- File watching algorithm - written in c++
- Faster build using caching.
- Does image optimization.
- Does bundling, splittling and compresses the file.
- It does consistent hasing.
- Differential bundling - Supports the application for different old and new browsers.
- Has support of https hence ssl testing can be done.
- Tree shaking algorithm - Remove unused code in bundling.
- It uses babel behind the scene to transpile the code.

## .gitignore

- gitignore file maintains a list of files & folders which we shouldn't push on GitHub.
- We shouldn't push node_modules into the GitHub so we could add it in the .gitignore file.
- package.json and package-lock.json shouldn't be .gitignore.

## package.json

- Configuration file for npm.
- Contains the list of installed dependencies and devDependencies.
- Dev dependencies are excluded from bundler.
- Contains version details of the packages in this format "major-version"."minor-version"."patch-version".

## JSX

- React is different and JSX is different.
- React can work without JSX as well.
- JSX helps writing react code.
- React element is an object and JSX is a syntax. JSX looks like html but it is not html.
- JSX is converted into react element or an object.
- It is not a proper JavaScript, JS engine doesn't able to understand this. This is a job of bundler / parcel to make it understand to browser.
- This code is transpiled before it reaches to browser.
- Attributes are added in camel case in JSX.
- Multi line JSX needed to be wrapped in round brackets ();
- JSX sanitizes the data hence precenting the Cross Site Scripting attacks.
- HTML, CSS and JavaScript can be written using JSX.

### VS Code Extensions

- Prettier
- Bracket Pair Colorization.
- Better Comments
- vscode-icons

### Google Chrome Extensions

- JSON Viewer
- Allow CORS: Access-Control-Allow-Origin
- React Dev Tools

## App Planning

- Header
  - Logo
  - Navigation Items
- Body
  - Search Bar
  - Card Container
    - Restaurant Cards
- Footer

## Styling a component

- Inline CSS
- Styled Component
- Separate CSS file
- Using a library like: TailWind, BootStrap

## Components

### Class Based Components

- Old way of writing code.
- A class based component is a class which has a render method that returns a JSX.

```bash
class Component extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>Hello from Class Component!</div>
    )
  }
}
```

- There is no different in importing / exporting a functional and class component.
- Passing the props in both type of component is similar.
- We receive the props in the constructor and we have to do super(props) in the constructor.

```bash
  constructor(props){
    super(props);
  }
```

- props can be accessed using this.props and state can be used using this.state.
- To initialize this.props, super(props) is called in the constructor.
- Constructor is best place to receive props and create state variables.
- In class based component, state object can contain all the state variables.
- When the component is mounted successfully, componentDidMount will be called.
- In functional component, we make an API call in useEffect(). useEffect() is called after the component renders similarly in class based component componentDidMount is used to make API call because is it called when component is rendered.
- Lifecycle of a class based component:
  - Parent Constructor -> Parent Render
  - Child Contructor -> Child Render -> Child componentDidMount
  - Parent componentDidMount
- Lifecycle of a class based component having parent and two child components.

```bash
<Parent>
  <Child 1 />
  <Child 2 />
</Parent>
```

- Lifecycle will be like this:
  - Parent Constructor -> Parent Render
  - Child 1 Constructor -> Child 1 Render.
  - Child 2 Constructor -> Child 2 Render.
  - Child 1 Component Did Mount.
  - Child 2 Component Did Mount.
  - Parent ComponentDidMount
- Refer the lifecycle diagram here: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- React has two phases: render & commit phase.
- So first the constructor is called then render is called then the react updates the DOM.
- ComponentWillUnmount: It is called just before the component is ready to disappear from UI.
  - When we change the page, there are lots of things that we need to clear.
  - Try adding a setInterval() inside componentDidMount and if we change the page / state / component this setInterval() keeps on leading.
  - It'll be a huge loss of performance hence componentWillUnmount() comes into picture. Here this setInterval needs to be cleaned on page leave otherwise huge loss of performance.
- In class components cleanup happens in componentWillUnmount() and in functional components this happens in the return method of useEffect().
- useEffect and lifecycle methods are different but we can mimic lifecycle methods in useEffect.
  - componentDidMount: Called only once when the component renders.

```bash
useEffect( () => {
  console.log('Only called once after the component renders');
}, []);
```

- componentDidUpdate: Called everytime component re-renders.

```bash
useEffect( () => {
  console.log("Called everytime xyz changes");
}, [xyz])
```

- componentWillUnmount: Called when the component is about to disappear from view.

```bash
useEffect( () => {
  return () => {
    console.log("Called whenever component is removed from the view.");
  }
})
```

### Functional Components

- New way of writing code.
- It's just a JavaScript function which returns JSX.
- Rendering a component inside a component is called component composition.
- It is not mandatory to create a functional component by Arrow function, we can use normal function as well.
- Function component can be called / rendered like these ways: <Component />, <Component></Component>, {Component()}
- Passing props to a component is similar to passing arguments to a function.

## React Hooks

- Hooks are normal JavaScript functions that gives special power to our React application.
- Some most important and common hooks are useState() and useEffect().
- Hook should start with use keyword, it is not mandatory but expected.
- It is good to call hooks on top of the component.

### useState()

- It is used to maintain the local state of the component.
- State can not be and shouldn't be directly updated.
- Whenever a state variable updates / changes React re-render the component.
- Always use inside the component.
- Create state variables on top of the component.
- Don't create state variables inside some scopes like (loop, if condition etc.);

### useEffect()

- A normal JS function with some specific use.
- It consist of a callback function and a dependency array.
- It is idea for initial API call to load the data.
- Code inside useEffect is executed everytime after the component renders.
- If there is no dependency array, useEffect() will be called on every time component renders.
  useEffect(() => {
  console.log('Called everytime component renders');
  });
- If there is an empty dependency array, useEffect() will be called only first time the component renders.
  useEffect(() => {
  console.log('Called only first time the component renders');
  }, []);
- If there are some dependency in the dependency array, useEffect() will be called whenever the value of the dependency changes.
  useEffect(() => {
  console.log('Called first time and whenever xyz changes');
  }, [xyz]);

## Virtual DOM

- JavaScript representation of actual DOM is virtual DOM.
- React creates a virtual DOM, a copy or representation of the actual DOM.
- Virtual DOM comprises of React Elements / objects which is created using React.createElement().

## Reconciliation Algorithm | React Fiber

- On every user action or change in any state variable, React tries to find out the difference between old virtual DOM and new virtual DOM and if there is a change, actual DOM is updated.
- This algorithm is known as React Fiber.

## Monolith Architecture

- A single project consist of: API, UI, Auth, DB etc.
- A single change in the project require a complete build and deployment of the whole project.

## Microservices Architecture

- Different service for different job like: BackEnd, UI, Auth, DB etc. forms a microservices architecture.
- Consist of different service for different operation / task.
- This is called separation of concerns and it follows single responsibility principle.
- With Microservices architecture, teams can work independently.
- All these services talk to each other.
- Every microservice can have their own programming language.
- All the service can run on different port.

## Two ways to make an API call.

- Page loading -> API call (take some time 500ms) -> API Response -> Render the page.
- Page loading -> Render the Page -> API call -> API response -> Re-render the page.
- Second approach is a better approach and gives a better UX.
- In first approach, page seems frozen for some time.

## Routing

- Routing is of two types: Client side routing and Server side routing.

### CSR

- All the files and routes are loaded on initial load.
- Application has all the components and we just changing them.

## SSR

- Every route does a network call and loads a page from server.

## Installing react-router

- Install the package.

```bash
npm i react-router
```

- Create a browser route.

```bash
import { createBrowserRouter } from "react-router";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

- useRouterError can be used to extract more information related to the path error.
- <Outlet /> is used to render children in a component.
- <Outlet /> component is replaced with the children element based on route.

## Link Component

- Website will not reload hence improving the performance.

```bash
import { Link } from "react-router";
<Link to="/">Home</Link>
```

## GraphQL

- It deals with under fetching and over fetching of the data.
- Load data only which you need.

## Single responsibility principle

- Every function / component should have a single responsibility.
- Break down your code into small pieces / modules. This makes the code testable and maintainable.
- Code becomes resuable, testable and maintainable.

## Custom hooks

- Hooks are like utility functions.
- Hook should always start with 'use' keyword. This is recommended.

## Lazy loading - Chunking - Code splitting - Dynamic Bundling

- Lazy loading or also called on demand loading.
- When the bundle size is increased it is also called bloating.
- We can create different bundle for different part of the application to improve performance of the application.
- When we go to a page / component that is lazy loaded, React tries to load it real quick but that time, the component was not available so React suspends the render process and we see an error on UI.
  - To fix this error, we have to use a component called `Suspense` provided by React.
  - This <Suspence> component has s fallback prop, so until the component is not available React will render whatever in it fallback. fallback can have a component or JSX.

```bash
import React, { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>Loading.....</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

## TailWind CSS

- Tailwind provides already created CSS to style our application similar to bootstrap.
- To configure Tailwind, install it, configure it and you are ready to go.

```bash
npm install tailwindcss @tailwindcss/postcss
```

- Configure PostCSS. Create a .postcssrc file in your project root, and enable the @tailwindcss/postcss plugin.

```bash
  {
    "plugins": {
      "@tailwindcss/postcss": {}
  }
```

- Import Tailwind CSS. Create a ./src/index.css file and add an @import for Tailwind CSS.

```bash
@import "tailwindcss";
```

- Tailwind is very light weight.
- When parcel bundles it, only the classes which are used in the application, are imported and added in the bundle. Makes the application faster.

## Higher order component

- Takes a component, enhances the component and returns a component.

## Controlled and uncontrolled component

- A component tha is controlled by another component (maybe it's parent), is called a controlled component.
- A self managing component is called uncontrolled component.

### Props drilling

- In React data flows from parent to children.
- Consider the below component structure:
  - A
  - B -> has some data
    - x
    - y
      - p
      - q -> need that data.
      - r
    - z
  - C
- So consider if B component has some data and q component needs that data, so we can't directly pass that data from B to q. The data has to flow from parent to child like: B -> y -> q. y component doesn't need this data but it has to be passed via y. This concept is known as props drilling.

## React context

- Suppose a deep nested level structure of component, where passing the data using props drilling will be a nightmare.
- To avoid props drilling in such structure, react context is helpful.
- Data can be used anywhere using react context.
- Using react context, data can be stored centrally to a location and can be utilised anywhere.

```bash
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "",
});

export default UserContext;
```

- And to access this data

```bash
import { useContext } from "react";
import UserContext from "../utils/UserContext";

  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
```

- Use smartly when to use props, state, context or a combination of either.
- To use context in class based component. Use it like a component called consumer.

```bash
import UserContext from "../utils/UserContext";

<UserContext.Consumer>
  {({ loggedInUser }) => <h3 className="text-lg">{loggedInUser}</h3>}
</UserContext.Consumer>
```

- To update the value inside the context, we use Provider from "react".
- And then wrap the app with Provider component. <Provider> can be wrapped with a section of <App> like <Header> or just <Body> component.

```bash
import UserContext from "./path-to-user-context";
<UserContext.Provider value={{ loggedInUser: userName }} >
  <App />
</UserContext.Provider>
```

## React Redux & Redux Toolkit (RTK)

- Redux is a state management library.
- It is compatible with many JS libraries but mostly used with React.
  - Redux is not mandatory. It is a third party library, and doesn't come with React.
  - For small and sometimes mid size application, Redux may not needed at all.
  - Use case of Redux is some very big or enterprise level application where there are lot of components.
  - Zustand is also one such library to manage state apart from Redux.
- Redux toolkit is a less complicated version.
- Subscribe to the most desired section of the store / slice for performance improvement.
- If we subscribe to the parent slice, instead of a portion, so whenever anything in parent changes, subscribed component is automatically updated, hence loss of performance.
- In vanilla or older version of Redux mutating the state was prohibited but it is not in this new version.
  - According to new version of Redux we now have to either mutate the state or return the updated state.

```bash
  state.items.length = 0; // either mutate the current state. Return is not required.
  return { items: [] }; // or return the new updated state.
```

- React behind the scene does the all old process anyways.
- immer is a library that takes care of this operation
- It is not possible to console.log in an action of a slice. To see the data:

```bash
    import { current } = from "@reduxjs/toolkit";
    addItem: (state, action) => {
      console.log(current(state));
    }
```

### Architecture of RTK

- It can be assumed as a very big object, kept in a central place.
- Redux store can have multiple slices (part of object).
- We create slices to do the logical separation of data. Like user slice, cart slice etc.
- We can't update a slice directly.
- Redux data update flow:
  - An event (button click, key press) occures.
  - An action is dispatched.
  - This action calls a function. This function is call Reducer function.
  - This function then updates the redux store (slice).
- Redux read data flow:
  - Selector is used to read data from store / slice.
  - React components subscribes to the store / slice using selector so whenever data inside slice changes, data in react component is updated automatically.

### RTK Setup

- Install @reduxjs/toolkit and react-redux.
- Build our store.

```bash
// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer
import userReducer

const appStore = configureStore({
  // add slices like cart and user to main reducer here
  reducer: {
    cart: cartReducer,
    user: userReducer
  }
});
export default appStore;
```

- Connect our store to our app.

```bash
// index.js
import { Provider } from "react-redux";
import appStore from "./appStore";

<Provider store={appStore}>
  <App />
</Provider>
```

- Create a slice.

```bash
// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart", //name of the slice
  initialState: {
    items: []
  },
  reducers: {
    // reducer functions corresponding to different actions to modify the slice of the store.
    addItem: (state, action) => {
      // state is the initial state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: () => {
      state.items.length = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

- Selector
  - Selector is a hook in React.
  - useSelector() from react-redux library.

```bash
// component.js
import { useSelector } from "react-redux";

const cartItems = useSelector( (store) => store.cart.items);

<h1>Cart ( {cartItems.length} items)</h1>

```

- dispatch (action).

```bash
// component.js

import { useDispatch } from "react-redux";
import {addItem} from "./cartSlice";
const dispatch = useDispatch();

const handleClick = () => {
  dispatch(addItem("pizza"));
}
```

## Redux middleware - Thunk & Saga

### Redux Thunk

### Redux Saga

## Testing

- A single line of change can introduce bugs into our application, hence testing is required.
- Manual testing - Manually testing each and every part of code. It is not feasible.
- Types of testing (developer).
  - Unit testing: Testing React component is isolation.
  - Integration testing: Communication of components interacting with each other.
  - End to end (e2e) testing: User lands on webpage and up to leaving the application. A complete e2e flow. Require tools like Cyprus or Selenium.

### Testing Setup

- Install react-testing-library. RTL uses JEST behind the scene and JEST uses babel.
- We don't need to setup the testing on production, hence -D flag.
- Install dependency additional dependencies with babel.

```bash
npm i -D @testing-library/react
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

- Configure babel.

```bash
// babel.config.js
module.exports = {
  [ ["@babel/present-env", { targets: {node: current }}]]
};
```

- Configure parcel to disable babel transpilation.
- Jest configuration.

```bash
npx jest --init
```

- Install jsdom library.

```bash
npm i -D jest-environment-jsdom
```

- To create a test file, possible options are:
  - Create a folder called `__test__` .
  - Create file with extension .spec.js or .test.js
- this double underscore (\_\_) is called dunder.
- To make JSX work inside the test file, we need to install @babel/preset-react library.
- Add the configuration in babel config.
- Install another library @testing-library/jest-dom

```bash
npm i -D @babel/preset-react

//babel.config.js
[("@babel/preset-react", { runtime: "automatic" })]

npm i -D @testing-library/jest-dom
```

### Let's test

- using getByRole, for single element. getAllByRole for multiple element. Possible roles:
  - button
  - heading
  - textbox
- using getByText

```bash
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

Contact;
test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

```

- Test cases can be grouped usin describe().
- Instead of test(), you can use it() as well. There is no difference in either.

```bash
describe("Something to test", () => {
  test("test something", () => {})

  test("another test", () => {})

  it("should do something", () => {})
})
```

### Advanced testing.

- If try to test Header component like this, it fails because header component is using redux and Link component from react-router-dom.

```bash
import { render } from "@testing-library/react";
import Header from "../Header";

it("Should load header component with login button", () => {
  render(<Header />);
});
```

- We have to provide redux and browser router to the test.

```bash
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import Header from "../Header";
import appStore from "../../store/appStore";

it("Should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});

```

### Integration testing

- We'll be testing search functionality of Body component.
- Here, following things can be tested:
  - An API call.
  - Typing something on search bar will update the items.
  - Component interacting with other components.
- Rendering body component will fail, because
  - we are using `fetch` in it.
  - Since fetch is a browser API and we are not actually rendering the component using browser. - We are mimicking the DOM.
  - So we need to mimic the `fetch` as well.
- We create our own fetch function.

```bash
  global.fetch = jest.fn( () => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(data);
      }
    })
  });
```

- Some important methods

```bash
  describe("Some test", () => {
    beforeAll( () => {
      // if you wanted to something before starting any test case.
    })

    beforeEach( () => {
      // this will run before each test case.
    })

    afterAll( () => {
      // run only once, after all the test cases finishes
    });

    afterEach( () => {
      // run after every test case execution.
    })

  })
```
