import React, { useEffect, useState } from "react";
// import Stack from '@mui/material/Stack';
// import { DataGrid } from '@mui/x-data-grid';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
import { fetchPokemons } from "../services/api";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const Table = () => {
  const [pokemons, setPokemons] = useState([]);
  
  
  useEffect(() => {
    (async () => {
      const fetchedPokemons = await fetchPokemons();
      setPokemons(fetchedPokemons)
    })()
  }, []);
  
  console.log("in the table ", pokemons)
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "type 1", headerName: "Type 1", width: 130 },
    { field: "type 2", headerName: "Type 2", width: 130 },
    {
      field: "total",
      headerName: "Total",
      // type: "number",
      width: 90,
    },
    {
      field: "hp",
      headerName: "HP",
      // type: "number",
      width: 90,
    },
    {
      field: "attack",
      headerName: "Attack",
      // type: "number",
      width: 130,
    },
    {
      field: "defense",
      headerName: "Defense",
      // type: "number",
      width: 130,
    },
    {
      field: "sp. atk",
      headerName: "Sp. Atk",
      // type: "number",
      width: 130,
    },
    {
      field: "sp. def",
      headerName: "Sp. Def",
      // type: "number",
      width: 130,
    },
    {
      field: "speed",
      headerName: "Speed",
      // type: "number",
      width: 130,
    },
    {
      field: "generation",
      headerName: "Generation",
      // type: "number",
      width: 130,
    },
    {
      field: "legendary",
      headerName: "Legendary",
      width: 130,
    },
  ];
  
  const rows = [
    // { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    // { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    // { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  
    return (
      <div style={{ height: 400, width: "100%", }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    );

}

export default Table;


