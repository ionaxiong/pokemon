import React, { useEffect, useState } from "react";
import { fetchPokemons } from "../services/api";
import Table from "./Table";

const Filter = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedPokemons = await fetchPokemons();
      setPokemons(fetchedPokemons);
    })();
  }, []);

  return (
    <div>
      <Table pokemons={pokemons} />
    </div>
  );
};

export default Filter;
