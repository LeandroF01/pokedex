import React, { useState } from "react";
import { BarChartOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { Example } from "./Example";
import { ProgresStats } from "./ProgresStats";

export const Details = ({ detatails }) => {
  const [statsGrapic, setStatsGrapic] = useState(!false);
  const handleStats = () => {
    setStatsGrapic(false);
  };

  const { TabPane } = Tabs;

  return (
    <Tabs defaultActiveKey="1" centered>
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
              <li className="details__move-text" key={mov.move.name}>
                {mov.move.name}
              </li>
            ))}
          </ul>
        </section>
      </TabPane>
    </Tabs>
  );
};
