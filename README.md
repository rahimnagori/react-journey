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

- Hooks
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
- 00:22 - Controlled and uncontrolled application.

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

### Google Chrome Extensions

- JSON Viewer
- Allow CORS: Access-Control-Allow-Origin

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
