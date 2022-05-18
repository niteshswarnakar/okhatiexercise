import { Button, TextField } from "@material-ui/core";
import React, { useRef } from "react";
import { Stack, Alert } from "@material-ui/core";
import "./button.css";
function MyButton() {
  let myref = useRef();

  return (
    <Stack spacing={2}>
      <Alert severity="error">This is error</Alert>
    </Stack>
  );
}

export default MyButton;
