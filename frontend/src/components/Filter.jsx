import React, { useState } from "react";
import { TextField, Stack } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import DeleteButton from "./DeleteButton";

const Filter = ({ tableHeaders, removeFilter, handleRemoveFilter }) => {
  const [tableHeaderOption, setTableHeaderOption] = useState();

  const conditionsForStrings = ["=", "≠"];
  const conditionsForNumbers = ["=", "≠", ">", ">=", "<", "<="];
  const noOptionsText = ["Choose a header to continue filtering"];

  const filterField = () => {
    return (
      <Stack direction="row" justifyContent={"center"}>
        <Autocomplete
          style={{ margin: "1vh 0" }}
          id="header"
          options={tableHeaders}
          sx={{ width: 300 }}
          renderInput={(header) => (
            <TextField {...header} label="Header filter" variant="outlined" />
          )}
          onChange={(event, value) => setTableHeaderOption(value)}
        />
        {conditionFilterOptions()}

        <Autocomplete
          style={{ margin: "1vh 0", marginLeft: "1vh" }}
          id="value"
          options={tableHeaders}
          sx={{ width: 300 }}
          renderInput={(header) => (
            <TextField {...header} label="Value" variant="outlined" />
          )}
        />
        <DeleteButton handleRemoveFilter={handleRemoveFilter} />
      </Stack>
    );
  };

  const conditionFilterOptions = () => {
    if (!tableHeaderOption) {
      return (
        <div>
          {
            <Autocomplete
              style={{ margin: "1vh 0", marginLeft: "1vh" }}
              id="condition"
              getOptionDisabled={() => true}
              options={noOptionsText}
              sx={{ width: 300 }}
              renderInput={(condition) => (
                <TextField
                  {...condition}
                  label="Condition"
                  variant="outlined"
                />
              )}
            ></Autocomplete>
          }
        </div>
      );
    } else if (
      (tableHeaderOption === "Name") |
      (tableHeaderOption === "Type1") |
      (tableHeaderOption === "Type2") |
      (tableHeaderOption === "Legendary")
    ) {
      return (
        <div>
          <Autocomplete
            style={{ margin: "1vh 0", marginLeft: "1vh" }}
            id="condition"
            options={conditionsForStrings}
            sx={{ width: 300 }}
            renderInput={(condition) => (
              <TextField {...condition} label="Condition" variant="outlined" />
            )}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Autocomplete
            style={{ margin: "1vh 0", marginLeft: "1vh" }}
            id="condition"
            options={conditionsForNumbers}
            sx={{ width: 300 }}
            renderInput={(condition) => (
              <TextField {...condition} label="Condition" variant="outlined" />
            )}
          />
        </div>
      );
    }
  };

  return <div>{!removeFilter ? filterField() : null}</div>;
};

export default Filter;
