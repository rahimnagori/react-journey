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
-

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
