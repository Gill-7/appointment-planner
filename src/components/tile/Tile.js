import React from "react";

export const Tile = ({ item }) => {
  const array = Object.values(item);
  return (
    <div className="tile-container">
      {array.map((data, index) => {
        if (index === 0) {
          return (
            <p key={index} className="tile-title">
              {data}
            </p>
          );
        }
        return (
          <p key={index} className="tile">
            {data}
          </p>
        );
      })}
    </div>
  );
};
