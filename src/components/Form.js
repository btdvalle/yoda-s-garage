import React from "react";
import Checkbox from "./Checkbox";

const Form = props => {
  const handleCheckboxFilter = ev => {
    const inputValue = ev.currentTarget.value;
    const filtered = props.starships.filter(starship => starship.films.includes(inputValue));
    props.action(filtered);
  };
  const handleTextFilter = ev => {
    props.filterByText(ev.currentTarget.value);
  };

  return (
    <form>
      <div>
        <label>
          Buscar por nombre:
          <input type="text" onChange={handleTextFilter} />
        </label>
      </div>
      <div>
        <span>Selecciona por película: </span>
        <Checkbox filterByMovie={props.filterByMovie} label="1" value="https://swapi.co/api/films/1/" />
        <Checkbox filterByMovie={props.filterByMovie} label="2" value="https://swapi.co/api/films/2/" />
        <Checkbox filterByMovie={props.filterByMovie} label="3" value="https://swapi.co/api/films/3/" />
        <Checkbox filterByMovie={props.filterByMovie} label="4" value="https://swapi.co/api/films/4/" />
        <Checkbox filterByMovie={props.filterByMovie} label="5" value="https://swapi.co/api/films/5/" />
        <Checkbox filterByMovie={props.filterByMovie} label="6" value="https://swapi.co/api/films/6/" />
        <Checkbox filterByMovie={props.filterByMovie} label="7" value="https://swapi.co/api/films/7/" />
      </div>
    </form>
  );
};
export default Form;
