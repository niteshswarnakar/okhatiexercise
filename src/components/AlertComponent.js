import React from "react";
import Alert from "@material-ui/lab/Alert";
const AlertComponent = (props) => {
  return (
    <div>
      {props.alert && (
        <Alert severity={props.alert.type}>{props.alert.message}</Alert>
      )}
    </div>
  );
};

export default AlertComponent;
