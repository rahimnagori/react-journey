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

### useState()

- It is used to maintain the local state of the component.
- State can not be and shouldn't be directly updated.
- Whenever a state variable updates / changes React re-render the component.

### useEffect()

- A normal JS function with some specific use.
- It consist of a callback function and a dependency array.
- It is idea for initial API call to load the data.
- Code inside useEffect is executed after the component renders.

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
