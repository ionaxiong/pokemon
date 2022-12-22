import React from "react";
import { TextField, Stack } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Filter from "./Filter";

const AdditionalFilter = () => {
  const andOrConditions = ["and", "or"];
  return (
    <div>
      <Autocomplete
        style={{ margin: "1vh 0", marginLeft: "1vh" }}
        id="andOrCondition"
        options={andOrConditions}
        sx={{ width: 300 }}
        renderInput={(condition) => (
          <TextField {...condition} label="And/Or" variant="outlined" />
        )}
      />
      <Filter />
    </div>
  );
};

export default AdditionalFilter;
