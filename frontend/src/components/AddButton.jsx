import React from "react";
import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const AddButton = ({handleAddFilter}) => {
  return (
    <Button style={{ margin: "0 0 0 2vh " }} onClick={handleAddFilter} >
      <ControlPointIcon
        color="primary"
        sx={{ fontSize: 40, marginRight: "1vh" }}
      />
      Add filter
    </Button>
  );
};

export default AddButton;
