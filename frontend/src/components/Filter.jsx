import React, { useEffect, useState } from "react";
import { TextField, Stack, Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchPokemons, fetchHeaders } from "../services/api";
import Table from "./Table";

const Filter = () => {
  const [pokemons, setPokemons] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [headerOption, setHeaderOption] = useState();

  const conditionsForStrings = ["=", "≠"];
  const conditionsForNumbers = ["=", "≠", ">", ">=", "<", "<="];
  const noOptionsText = ["Choose a header to continue filtering"];

  console.log("header option now is : ", headerOption);
  console.log(typeof headerOption, "typf of header option");
  //   console.log("print filter pokemons: ", pokemons);
  //   console.log("print filter headers: ", headers);

  useEffect(() => {
    (async () => {
      const fetchedPokemons = await fetchPokemons();
      const fetchedHeaders = await fetchHeaders();
      setPokemons(fetchedPokemons);
      setHeaders(fetchedHeaders);
    })();
  }, []);

  const conditionFilterOptions = () => {
    if (!headerOption) {
      return (
        <div>
          {
            <Autocomplete
              style={{ margin: "15px 0", marginLeft: "15px" }}
              id="conditions"
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
      (headerOption === "Name") |
      (headerOption === "Type1") |
      (headerOption === "Type2") |
      (headerOption === "Legendary")
    ) {
      return (
        <div>
          <Autocomplete
            style={{ margin: "15px 0", marginLeft: "15px" }}
            id="conditions"
            options={conditionsForStrings}
            sx={{ width: 300 }}
            renderInput={(condition) => (
              <TextField {...condition} label="Condition" variant="outlined" />
            )}
          />
          ;
        </div>
      );
    } else {
      return (
        <div>
          <Autocomplete
            style={{ margin: "15px 0", marginLeft: "15px" }}
            id="conditions"
            options={conditionsForNumbers}
            sx={{ width: 300 }}
            renderInput={(condition) => (
              <TextField {...condition} label="Condition" variant="outlined" />
            )}
          />
          ;
        </div>
      );
    }
  };

  return (
    <div>
      <Stack direction="row" justifyContent={"center"}>
        <Autocomplete
          style={{ margin: "15px 0" }}
          id="headers"
          options={headers}
          sx={{ width: 300 }}
          renderInput={(header) => (
            <TextField {...header} label="Header filter" variant="outlined" />
          )}
          onChange={(event, value) => setHeaderOption(value)}
        />
        {conditionFilterOptions()}
        {/* {(headerOption === "Name") |
        (headerOption === "Type1") |
        (headerOption === "Type2") |
        (headerOption === "Legendary") ? (
          <Autocomplete
            style={{ margin: "15px 0", marginLeft: "15px" }}
            id="conditions"
            options={conditionsForStrings}
            sx={{ width: 300 }}
            renderInput={(condition) => (
              <TextField {...condition} label="Condition" variant="outlined" />
            )}
          />
        ) : (
          <Autocomplete
            style={{ margin: "15px 0", marginLeft: "15px" }}
            id="conditions"
            options={conditionsForNumbers}
            sx={{ width: 300 }}
            renderInput={(condition) => (
              <TextField {...condition} label="Condition" variant="outlined" />
            )}
          />
        )} */}
        <Autocomplete
          style={{ margin: "15px 0", marginLeft: "15px" }}
          id="headers"
          options={headers}
          sx={{ width: 300 }}
          renderInput={(header) => (
            <TextField {...header} label="Value" variant="outlined" />
          )}
        />
        <Button style={{ margin: "0 0 0 20px " }}>
          <ControlPointIcon color="primary" sx={{ fontSize: 40 }} />
        </Button>
      </Stack>
      <Table pokemons={pokemons} />
    </div>
  );
};

export default Filter;
