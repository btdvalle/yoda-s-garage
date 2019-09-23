import React from "react";

const Starship = props => {
  const { name, model, manufacturer, image } = props.starship;
  return (
    <div className="starship">
      <h2 className="starship_h2">{name}</h2>
      <img className="starship_img" src={image} alt={name} />
      <h3>{model}</h3>
      <h3>{manufacturer}</h3>
    </div>
  );
};

export default Starship;
