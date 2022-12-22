import React from "react";
import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const DeleteButton = ({handleRemoveFilter}) => {

  return (
    <Button style={{ margin: "0 0 0 2vh " }} onClick={handleRemoveFilter} >
      <ClearIcon color="warning" sx={{ fontSize: 40 }} />
    </Button>
  );
};

export default DeleteButton;
