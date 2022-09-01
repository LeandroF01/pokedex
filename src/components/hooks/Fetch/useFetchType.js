import { useState, useEffect } from "react";

export const useFetchType = () => {
  const [listTypes, setListTypes] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setListTypes(data.results))
      .catch((err) => console.log(err));
  }, []);
  return listTypes;
};
