import React from "react";

const FilterBar = (props) => {
  return (
    <>
      <h1>FilterBar</h1>
      {props.tags &&
        props.tags.map((item, index) => {
          return <div key={index}> {item}</div>;
        })}
    </>
  );
};

export default FilterBar;
