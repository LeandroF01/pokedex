import React, { useCallback, useEffect, useState } from "react";
import { MemoizedPokemonCard } from "./PokemonCard/PokemonCard";
import pokedex from "./PokemonCard/image/pokedex.png";
import header from "./PokemonCard/image/headerf.png";
import trainer from "./PokemonCard/image/trainer.png";
import { SelectCant } from "./Form/SelectCant";
import "./stylePokedex.css";
import "../Pokedex/Form/styleForm.css";
import { Search } from "./Form/Search";
import { SearchType } from "./Form/SearchType";
import { Pagination } from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { usePagination } from "../hooks/usePagination";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [search, setSearch] = useState();
  const [type, setType] = useState("All");

  const nameTrainer = useSelector((state) => state.nameTrainer);

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

  const {
    currentPosts,
    setpostsPag,
    handdlePrev,
    handdleNext,
    handdlePage,
    maxPage,
    minPage,
    numberLimit,
    pageNumebrs,
    currentPag,
  } = usePagination(pokemons);

  return (
    <article>
      <section>
        <div className="container__pokedex-image">
          <img className="pokedex-header" src={header} alt="" />
          <div className="welcome__header">
            <img className="pokedex-trainer" src={trainer} alt="" />
            <img className="pokedex-image" src={pokedex} alt="" />
            <h2 className="welcome_title">{`Welcome ${nameTrainer}, here you can find your favorite pokemon`}</h2>
          </div>
        </div>
      </section>
      <section className="search-limit">
        <Search setSearch={setSearch} setType={setType} />
        <div className="search__filter">
          <SearchType setType={setType} />
          <SelectCant setLimit={setpostsPag} />
        </div>
      </section>
      <section className="container__pokemon">
        {currentPosts?.map(({ url }) => (
          <MemoizedPokemonCard key={url} url={url} />
        ))}
      </section>
      <Pagination
        currentPosts={currentPosts}
        setpostsPag={setpostsPag}
        handdlePrev={handdlePrev}
        handdleNext={handdleNext}
        handdlePage={handdlePage}
        maxPage={maxPage}
        minPage={minPage}
        numberLimit={numberLimit}
        pageNumebrs={pageNumebrs}
        currentPag={currentPag}
      />
    </article>
  );
};
