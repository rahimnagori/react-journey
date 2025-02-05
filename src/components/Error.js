import { useRouteError } from "react-router";
const Error = () => {
  // useRouteError gives more information related to path error.
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>404 Not found!</h1>
      <p>There is some error in your path.</p>
    </div>
  );
};

export default Error;
