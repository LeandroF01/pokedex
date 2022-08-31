import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export const Example = ({ detatails }) => {
  const hp = detatails?.stats[0].base_stat;
  const at = detatails?.stats[1].base_stat;
  const df = detatails?.stats[2].base_stat;
  const sa = detatails?.stats[3].base_stat;
  const sd = detatails?.stats[4].base_stat;
  const sp = detatails?.stats[5].base_stat;

  const data = [
    { subject: "S-Defense", A: sd },
    {
      subject: "Speed",
      A: sp,
    },
    {
      subject: "Attack",
      A: at,
    },
    {
      subject: "S-Attack",
      A: sa,
    },
    {
      subject: "HP",
      A: hp,
    },
    {
      subject: "Defense",
      A: df,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
        fill="#ffffff">
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
