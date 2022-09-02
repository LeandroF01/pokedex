import { DoubleLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import animation from "../Home/image/animation.webp";
import { useFetchPokemon } from "../hooks/Fetch/useFetchPokemon";
import { Details } from "./Details";
import "./styleDetails.css";

export const PokemonDetails = () => {
  const detatails = useFetchPokemon();

  return (
    <section
      className={`gener__background ${detatails?.types[0].type.name}background`}>
      <div>
        <Link to={"/pokedex"} className="link__goback">
          <DoubleLeftOutlined />
        </Link>
      </div>

      <article>
        <section className="details__title">
          <h2 className="title__id">#{detatails?.id}</h2>
          <h2 className="title__name">{detatails?.name}</h2>
        </section>

        <div className="details__font">
          <img
            className="details__image"
            src={detatails?.sprites.other["home"]["front_default"]}
            alt={detatails?.name}
          />
          <img className="details__animtion" src={animation} alt="animation" />
        </div>

        <section className="pokemon__details">
          <div className="details__info"></div>
          <ul className="details__type">
            {detatails?.types.map((type) => (
              <li
                key={type.type.url}
                className={`list__type ${type.type.name} ${type.type.name}background`}>
                <span className="text-type">{type.type.name}</span>
              </li>
            ))}
          </ul>
          <Details detatails={detatails} />
        </section>
      </article>
    </section>
  );
};
