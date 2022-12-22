import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GroupFilters from "./components/GroupFilters";
import Table from "./components/Table";
import {
  fetchPokemons,
  fetchHeaders as fetchTableHeaders,
} from "./services/api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedPokemons = await fetchPokemons();
      const fetchedTableHeaders = await fetchTableHeaders();
      setPokemons(fetchedPokemons);
      setTableHeaders(fetchedTableHeaders);
    })();
  }, []);

  return (
    <div>
      <Header />
      <GroupFilters tableHeaders={tableHeaders} />
      <Table pokemons={pokemons} />
    </div>
  );
}

export default App;
