import React, { useEffect, useState } from "react";
import { StatsPokemon } from "./StatsPokemon";
import "./styleCard.css";
import pokeball from "../../Home/image/animation.webp";
import Atropos from "atropos/react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState([]);
  const [colors, setcolors] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data), setcolors(data.types[0].type.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handdleClick = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  return (
    <div onClick={handdleClick}>
      <Atropos className="mi-atropos " rotate="true">
        {
          <article className={`card__pokemon ${colors}background`}>
            <div>
              <img
                data-atropos-offset="5"
                className="pokemon__image"
                src={pokemon?.sprites?.other["home"]["front_default"]}
                alt={pokemon.name}
              />
              <img
                data-atropos-offset="-5"
                className="image_pokeball"
                src={pokeball}
                alt=""
              />
            </div>
            <section className="card__info">
              <h3 data-atropos-offset="4" className="card__title">
                {pokemon?.name}
              </h3>
              <ul className="card__type" data-atropos-offset="3">
                {pokemon?.types?.map((type) => (
                  <li key={type.type.url} className={type.type.name}></li>
                ))}
              </ul>
              <ul data-atropos-offset="2" className="card__stats">
                {pokemon?.stats?.map((stat) => (
                  <StatsPokemon key={stat.stat.url} infoStat={stat} />
                ))}
              </ul>
            </section>
          </article>
        }
      </Atropos>
    </div>
  );
};

export default React.memo(PokemonCard);
