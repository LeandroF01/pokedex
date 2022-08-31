import React, { useState } from "react";
import bug from "./image/bug.png";
import dark from "./image/dark.png";
import dragon from "./image/dragon.png";
import electric from "./image/electric.png";
import fairy from "./image/fairy.png";
import fighting from "./image/fighting.png";
import fire from "./image/fire.png";
import flying from "./image/flying.png";
import ghost from "./image/ghost.png";
import grass from "./image/grass.png";
import ground from "./image/ground.png";
import ice from "./image/ice.png";
import normal from "./image/normal.png";
import poison from "./image/poison.png";
import psychic from "./image/psychic.png";
import rock from "./image/rock.png";
import steel from "./image/steel.png";
import water from "./image/water.png";

export const TypePokemon = ({ type }) => {
  // const [image, setImage] = useState();
  // console.log(type);

  // if (type !== null) {
  //   if (type.includes("grass poison")) {
  //     setImage(grass);
  //   }
  //   if (type.includes("poison")) {
  //     setImage(poison);
  //   }
  //   if (type.includes("bug")) {
  //     setImage(bug);
  //   }
  //   if (type.includes("dark")) {
  //     setImage(dark);
  //   }
  //   if (type.includes("dragon")) {
  //     setImage(dragon);
  //   }
  //   if (type.includes("electric")) {
  //     setImage(electric);
  //   }
  //   if (type.includes("fairy")) {
  //     setImage(fairy);
  //   }
  //   if (type.includes("fighting")) {
  //     setImage(fighting);
  //   }
  //   if (type.includes("fire")) {
  //     setImage(fire);
  //   }
  //   if (type.includes("flying")) {
  //     setImage(flying);
  //   }
  //   if (type.includes("ground")) {
  //     setImage(ground);
  //   }
  //   if (type.includes("ice")) {
  //     setImage(ice);
  //   }
  //   if (type.includes("normal")) {
  //     setImage(normal);
  //   }
  //   if (type.includes("ghost")) {
  //     setImage(ghost);
  //   }
  //   if (type.includes("psychic")) {
  //     setImage(psychic);
  //   }
  //   if (type.includes("rock")) {
  //     setImage(rock);
  //   }
  //   if (type.includes("steel")) {
  //     setImage(steel);
  //   }
  //   if (type.includes("water")) {
  //     setImage(water);
  //   }
  // }

  return (
    <div>
      <span className={type}></span>
    </div>
  );
};
