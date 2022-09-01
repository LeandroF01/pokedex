import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useFetchPokemon = () => {
  const { name } = useParams();

  const [detatails, setDetails] = useState();

  const getType = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getType();
  }, []);

  return detatails;
};
