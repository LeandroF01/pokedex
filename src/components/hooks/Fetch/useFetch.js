import { useState, useEffect } from "react";

export const useFetch = (type, search) => {
  const [pokemons, setPokemons] = useState();

  const getPage = () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((err) => console.log(err));
  };

  const getType = () => {
    const URL = `https://pokeapi.co/api/v2/type/${type}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const arr = data.pokemon.map((e) => e.pokemon);
        const obj = { results: arr };
        setPokemons(obj.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (type !== "All") {
      getType();
    } else if (search) {
      const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
      const obj = {
        results: [{ url }],
      };
      setPokemons(obj.results);
    } else {
      getPage();
    }
  }, [search, type]);

  return pokemons;
};
