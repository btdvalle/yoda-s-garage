import React from "react";
import Starship from "./Starship";

const renderStartshipList = starships => {
  return starships.map(starship => (
    <li key={starship.id}>
      <Starship starship={starship} />
    </li>
  ));
};

const StarshipList = props => {
  return <ul className="starshiplist">{renderStartshipList(props.starships)}</ul>;
};

export default StarshipList;
