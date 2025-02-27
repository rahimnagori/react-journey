import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
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
        <div>
          Logged in user:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h3 className="text-lg">{loggedInUser}</h3>}
          </UserContext.Consumer>
        </div>
        <UserClass defaultName="John" defaultLocation="Beach" />
      </div>
    );
  }
}
export default About;
