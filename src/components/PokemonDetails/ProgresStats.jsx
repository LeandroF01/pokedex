import { Progress } from "antd";
import React from "react";

export const ProgresStats = ({ detatails }) => {
  return (
    <article>
      <ul>
        <li>
          <span>{detatails?.stats[0].stat.name}</span>
        </li>
        <li>
          <Progress
            strokeColor={{ "0%": "#4fa732", "100%": "#6be343" }}
            percent={detatails?.stats[0].base_stat}
            trailColor={"#3c4341"}
            strokeWidth={15}
            gapDegree={75}
            showInfo={false}
            status="active"
          />
        </li>
      </ul>
      <ul>
        <li>
          <span>{detatails?.stats[1].stat.name}</span>
        </li>
        <li>
          <Progress
            strokeColor={{ "0%": "#cd2a32", "100%": "#ff4e32" }}
            percent={detatails?.stats[1].base_stat}
            trailColor={"#3c4341"}
            strokeWidth={15}
            gapDegree={75}
            showInfo={false}
            status="active"
          />
        </li>
      </ul>
      <ul>
        <li>
          <span>{detatails?.stats[2].stat.name}</span>
        </li>
        <li>
          <Progress
            strokeColor={{ "0%": "#2800ff", "100%": "#4900ff" }}
            percent={detatails?.stats[2].base_stat}
            trailColor={"#3c4341"}
            strokeWidth={15}
            gapDegree={75}
            showInfo={false}
            status="active"
          />
        </li>
      </ul>
      <ul>
        <li>
          <span>{detatails?.stats[3].stat.name}</span>
        </li>
        <li>
          <Progress
            strokeColor={{ "0%": "#ed8122", "100%": "#ff9e49" }}
            percent={detatails?.stats[3].base_stat}
            trailColor={"#3c4341"}
            strokeWidth={15}
            gapDegree={75}
            showInfo={false}
            status="active"
          />
        </li>
      </ul>
      <ul>
        <li>
          <span>{detatails?.stats[4].stat.name}</span>
        </li>
        <li>
          <Progress
            strokeColor={{ "0%": "#2cc8b1", "100%": "#84e6d1" }}
            percent={detatails?.stats[4].base_stat}
            trailColor={"#3c4341"}
            strokeWidth={15}
            gapDegree={75}
            showInfo={false}
            status="active"
          />
        </li>
      </ul>
      <ul>
        <li>
          <span>{detatails?.stats[5].stat.name}</span>
        </li>
        <li>
          <Progress
            strokeColor={{ "0%": "#ffd101", "100%": "#fcff50" }}
            percent={detatails?.stats[5].base_stat}
            trailColor={"#3c4341"}
            strokeWidth={15}
            gapDegree={75}
            showInfo={false}
            status="active"
          />
        </li>
      </ul>
    </article>
  );
};
