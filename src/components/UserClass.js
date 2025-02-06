import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // componentType: "Class",
      userDetails: null,
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child componentDidMount");
    try {
      const data = await fetch("https://api.github.com/users/rahimnagori");
      const json = await data.json();
      this.setState({ userDetails: json });
    } catch (e) {
      console.log("error to fetch", e);
    }
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  render() {
    console.log("child render");
    const { defaultName, defaultLocation } = this.props;
    const handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    };

    if (this.state.userDetails === null) {
      return (
        <div>
          <h2>User Information - {this.state.componentType}</h2>
          <h3>Name: {defaultName}</h3>
          <h3>Location: {defaultLocation}</h3>
          <h3>Counter: {this.state.count}</h3>
          <button type="button" onClick={handleClick}>
            ++
          </button>
        </div>
      );
    }

    const { name, location, avatar_url } = this.state.userDetails;
    return (
      <div>
        <h2>Developer Information</h2>
        <img src={avatar_url} />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default UserClass;
