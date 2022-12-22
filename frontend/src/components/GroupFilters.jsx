import React, { useState } from "react";
import Filter from "./Filter";
import { Stack } from "@mui/material";
import AddButton from "./AddButton";

const GroupFilters = ({ tableHeaders }) => {
  const [removeFilter, setRemoveFilter] = useState(true);
  // const [removeFilter, setRemoveFilter] = useState(true);
  // const [addFilter, setAddFilter] = useState(false);
  // const [isFilterExisted, setIsFilterExisted] = useState(false)
  const [isFilterExisted, setIsFilterExisted] = useState(false);

  const handleRemoveFilter = () => {
    setRemoveFilter(true);
    setIsFilterExisted(false);
  };

  const handleAddFilter = () => {
    setRemoveFilter(false);
    setIsFilterExisted(true);
  };

  const handleAddFirstAndAdditionalFilter = () => {
    !isFilterExisted ? handleAddFilter() : handleAddAdditionalFilter();
  };
  const handleAddAdditionalFilter = () => {
    
  };

  return (
    <div>
      <Filter
        tableHeaders={tableHeaders}
        handleRemoveFilter={handleRemoveFilter}
        removeFilter={removeFilter}
      />
      <Stack justifyContent={"center"}>
        <AddButton
          handleAddFirstAndAdditionalFilter={handleAddFirstAndAdditionalFilter}
        />
      </Stack>
    </div>
  );
};

export default GroupFilters;
