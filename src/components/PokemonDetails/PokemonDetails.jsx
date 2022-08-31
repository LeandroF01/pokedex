import {
  BarChartOutlined,
  DoubleLeftOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Example } from "./Example";
import { ProgresStats } from "./ProgresStats";
import "./styleDetails.css";
import animation from "../Home/image/animation.webp";

export const PokemonDetails = () => {
  const { name } = useParams();

  const [detatails, setDetails] = useState();
  const [statsGrapic, setStatsGrapic] = useState(!false);

  const getType = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getType();
  }, []);

  const handleStats = () => {
    setStatsGrapic(false);
  };
  console.log(detatails);

  const { TabPane } = Tabs;
  const onChange = (key) => {
    console.log(key);
  };

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
            alt=""
          />
          <img className="details__animtion" src={animation} alt="" />
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

          <Tabs defaultActiveKey="1" onChange={onChange} centered>
            <TabPane tab="About" key="1">
              <section>
                <div className="container__hw">
                  <ul className="details__hw">
                    <li className="hw__info">
                      <h6 className="hw__title height">Height</h6>
                      {detatails?.height}
                    </li>
                    <li className="hw__info">
                      <h6 className="hw__title width">Weight</h6>
                      {detatails?.weight}
                    </li>
                  </ul>
                </div>

                <div className="details__abilities">
                  <h4 className="abilities__title">Abilities</h4>
                  <ul>
                    {detatails?.abilities.map((abil) => (
                      <li className="abilities__ability" key={abil.ability.url}>
                        {abil.ability.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </TabPane>
            <TabPane tab="Stats" key="2">
              <section className="details__detatails">
                <button onClick={handleStats} className="btn__details">
                  {statsGrapic ? <RadarChartOutlined /> : <BarChartOutlined />}
                </button>
                <div className="container__detatails">
                  {statsGrapic ? (
                    <ProgresStats detatails={detatails} />
                  ) : (
                    <Example detatails={detatails} />
                  )}
                </div>
              </section>
            </TabPane>
            <TabPane tab="Moves" key="3">
              <section className="details__moves-container">
                <ul className="details__move">
                  {detatails?.moves.map((mov) => (
                    <li className="details__move-text">{mov.move.name}</li>
                  ))}
                </ul>
              </section>
            </TabPane>
          </Tabs>
        </section>
      </article>
    </section>
  );
};
