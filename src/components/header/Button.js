import React from "react";

import Button from "@material-ui/core/Button";

const ButtonGeneric = props => {
  return (
    <Button variant={props.variant} size={props.size}>
      {props.name}
    </Button>
  );
};

export default ButtonGeneric;
