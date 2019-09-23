import React from "react";

const Checkbox = props => {
  const handleCheckboxFilter = ev => {
    const inputValue = ev.currentTarget.value;
    props.filterByMovie(inputValue);
  };

  return (
    <label>
      <input onChange={handleCheckboxFilter} type="checkbox" value={props.value} />
      {props.label}
    </label>
  );
};

export default Checkbox;
