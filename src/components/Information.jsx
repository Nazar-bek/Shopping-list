import React from "react";

const Information = ({length}) => {
  return (
    <div className="information_style">
      <h1>Shoping List</h1>
      <span>{length}</span>
    </div>
  );
};

export default Information;
