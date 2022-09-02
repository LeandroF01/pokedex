import React from "react";
import pokedex from "../PokemonCard/image/pokedex.png";
import header from "../PokemonCard/image/headerf.png";
import trainer from "../PokemonCard/image/trainer.png";
import { useSelector } from "react-redux";

const Header = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);

  return (
    <section>
      <div className="container__pokedex-image">
        <img className="pokedex-header" src={header} alt="header" />
        <div className="welcome__header">
          <img className="pokedex-trainer" src={trainer} alt="trainer" />
          <img className="pokedex-image" src={pokedex} alt="pokedex" />
          <h2 className="welcome_title">{`Welcome ${nameTrainer}, here you can find your favorite pokemon`}</h2>
        </div>
      </div>
    </section>
  );
};
export default Header;
