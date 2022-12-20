import React, { useEffect, useState } from "react";
import { DataGrid, GridFilterModel } from "@mui/x-data-grid";

const Table = ({ pokemons }) => {
 
  console.log("pokemons data type?")
  
  const columns = [
    { field: "Id", headerName: "ID", width: 70 },
    { field: "Number", headerName: "Number", width: 100 },
    { field: "Name", headerName: "Name", width: 250 },
    { field: "Type1", headerName: "Type 1", width: 130 },
    { field: "Type2", headerName: "Type 2", width: 130 },
    {
      field: "Total",
      headerName: "Total",
      width: 90,
    },
    {
      field: "HP",
      headerName: "HP",
      width: 90,
    },
    {
      field: "Attack",
      headerName: "Attack",
      width: 130,
    },
    {
      field: "Defense",
      headerName: "Defense",
      width: 130,
    },
    {
      field: "Sp.Atk",
      headerName: "Sp.Atk",
      width: 130,
    },
    {
      field: "Sp.Def",
      headerName: "Sp.Def",
      width: 130,
    },
    {
      field: "Speed",
      headerName: "Speed",
      width: 130,
    },
    {
      field: "Generation",
      headerName: "Generation",
      width: 130,
    },
    {
      field: "Legendary",
      headerName: "Legendary",
      width: 130,
    },
  ];

  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.Id}
        filterMode="server"
        disableColumnFilter={true}
        disableColumnSelector={true}
        // onFilterModelChange={onFilterChange}
        // loading={isLoading}
        rows={pokemons}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Table;
