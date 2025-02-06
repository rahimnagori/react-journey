import { Component } from "react";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>Hello from About class</h1>
        <UserClass defaultName="John" defaultLocation="Beach" />
      </div>
    );
  }
}
export default About;
