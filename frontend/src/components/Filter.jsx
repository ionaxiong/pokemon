import React, { useEffect, useState } from "react";
import { TextField, Stack } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { fetchPokemons, fetchHeaders } from "../services/api";
import Table from "./Table";

const Filter = () => {
  const [pokemons, setPokemons] = useState([]);
  const [headers, setHeaders] = useState([]);
  console.log(typeof headers);
  console.log("print filter pokemons: ", pokemons);
  console.log("print filter headers: ", headers);

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (headers) => headers,
  });

  useEffect(() => {
    (async () => {
      const fetchedPokemons = await fetchPokemons();
      const fetchedHeaders = await fetchHeaders();
      setPokemons(fetchedPokemons);
      setHeaders(fetchedHeaders);
    })();
  }, []);

  return (
    <div>
      <Stack direction="row" justifyContent={"center"}>
        <Autocomplete
          style={{ margin: "15px 0" }}
          id="headers"
          options={headers}
          getOptionLabel={(header) => header}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(header) => (
            <TextField {...header} label="Header filter" />
          )}
        />
        <Autocomplete
          style={{ margin: "15px 0", marginLeft: "15px" }}
          id="headers"
          options={headers}
          getOptionLabel={(header) => header}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(header) => (
            <TextField {...header} label="Header filter" />
          )}
        />
        <Autocomplete
          style={{ margin: "15px 0", marginLeft: "15px" }}
          id="headers"
          options={headers}
          getOptionLabel={(header) => header}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(header) => (
            <TextField {...header} label="Header filter" />
          )}
        />
      </Stack>
      <Table pokemons={pokemons} />
    </div>
  );
};

export default Filter;
