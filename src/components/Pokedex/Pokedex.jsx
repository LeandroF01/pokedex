import React, { lazy, Suspense, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import { useFetch } from "../hooks/Fetch/useFetch";
import "./stylePokedex.css";
import "../Pokedex/Form/styleForm.css";

export const Pokedex = () => {
  const [search, setSearch] = useState();
  const [type, setType] = useState("All");

  const pokemons = useFetch(type, search);

  const {
    currentPosts,
    setpostsPag,
    postsPag,
    handdlePrev,
    handdleNext,
    handdlePage,
    maxPage,
    minPage,
    numberLimit,
    pageNumebrs,
    currentPag,
  } = usePagination(pokemons);

  const MemoizedPokemonCard = lazy(() => import("./PokemonCard/PokemonCard"));
  const Search = lazy(() => import("./Form/Search"));
  const SearchType = lazy(() => import("./Form/SearchType"));
  const Pagination = lazy(() => import("../Pagination/Pagination"));
  const SelectCant = lazy(() => import("./Form/SelectCant"));
  const Header = lazy(() => import("./Header/Header"));

  return (
    <Suspense fallback={null}>
      <article>
        <Header />
        <section className="search-limit">
          <Search setSearch={setSearch} setType={setType} />
          <div className="search__filter">
            <SearchType setType={setType} setSearch={setSearch} type={type} />
            <SelectCant setLimit={setpostsPag} limit={postsPag} />
          </div>
        </section>

        <section className="container__pokemon">
          {currentPosts &&
            currentPosts.map(({ url }) => (
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
    </Suspense>
  );
};

export const MemoizedPokedex = React.memo(Pokedex);
