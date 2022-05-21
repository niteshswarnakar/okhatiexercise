import React, { useContext } from "react";

import UserContext from "../context/context";

const PrivateRoute = ({ children }) => {
  let [isLoggedIn, refreshLogin, savedEmail] = useContext(UserContext);

  return (
    <div>
      {isLoggedIn && <div>{children}</div>}
      {!isLoggedIn && <h2>You are not Authenticated</h2>}
    </div>
  );
};

export default PrivateRoute;
