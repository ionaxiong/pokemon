import React, { useState } from "react";
import Filter from "./Filter";
import { Stack } from "@mui/material";
import AddButton from "./AddButton";

const GroupFilters = ({ tableHeaders }) => {
  const [removeFilter, setRemoveFilter] = useState(true);
  // const [filterExists, setFilterExists] = useState(false);

  const handleRemoveFilter = () => {
    setRemoveFilter(true);
    // setFilterExists(false);
  };

  const handleAddFilter = () => {
    setRemoveFilter(false);
    // setFilterExists(true);
  };

  // const handleAddFirstAndAdditionalFilter = () => {
  //   !filterExists ? handleAddFirstFilter() : handleAddAdditionalFilter();
  // };

  // const handleAddAdditionalFilter = () => {

  // };

  // const handleAddFirstFilter = () => {
  //   handleAddFilter();
  // };

  return (
    <div>
      <Filter
        tableHeaders={tableHeaders}
        handleRemoveFilter={handleRemoveFilter}
        removeFilter={removeFilter}
      />
      <Stack justifyContent={"center"}>
        <AddButton
          handleAddFilter={handleAddFilter}
        />
      </Stack>
    </div>
  );
};

export default GroupFilters;
