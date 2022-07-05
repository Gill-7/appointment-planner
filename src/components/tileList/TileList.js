import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    <div>
      {items.map((item, id) => (
        <Tile item={item} key={id} />
      ))}
    </div>
  );
};
