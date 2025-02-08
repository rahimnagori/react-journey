import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "None",
});

export default UserContext;
