import React, { useCallback } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../../store/Slices/nameTrainer.Slices";

import imageTrainer from "./image/pokemon-trainer.png";
import animation from "./image/animation.webp";
import "./styleHome.css";

export const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handdleSubmit = useCallback((e) => {
    e.preventDefault();
    const event = e.target.name.value.trim();
    if (event !== 0) {
      dispatch(setNameTrainer(event));

      navigate("/pokedex");
    }
  });

  return (
    <section className="container__home">
      <div className="tooltip">
        <p className="tooltip__text">Ready to become a pokemon trainer?</p>
      </div>
      <img src={animation} className="home__animation" alt="animation" />

      <img src={imageTrainer} className="home__bienvenida" alt="trainer" />
      <div>
        <form className="home__form" onSubmit={handdleSubmit}>
          <input
            className="home__input"
            id="name"
            type="text"
            placeholder="Name"
          />
          <button className="home__button home__button-animated"></button>
        </form>
      </div>
    </section>
  );
};
