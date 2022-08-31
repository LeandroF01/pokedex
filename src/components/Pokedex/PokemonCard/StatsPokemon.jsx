import React from "react";
import { Progress } from "antd";

export const StatsPokemon = ({ infoStat }) => {
  return (
    <ul>
      <li>
        <span>{infoStat.stat.name}</span>
      </li>

      <li className="container__progress">
        <Progress
          strokeColor={{ "0%": "#95dfc4", "100%": "#bcf1df" }}
          percent={infoStat.base_stat}
          trailColor={"#3c4341"}
          strokeWidth={7}
          gapDegree={75}
          showInfo={false}
          status="active"
        />
      </li>
    </ul>
  );
};
