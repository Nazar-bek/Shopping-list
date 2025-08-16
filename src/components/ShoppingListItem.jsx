import React from "react";

const ShoppingListItem = (props) => {
  const { item, onDeleteItem, onActive } = props;
  return (
    <div className={`list-item ${item.active && "active"}`}>
      <div className="item-info">
        <span>{item.number}</span>
        <p>{item.title}</p>
      </div>
      <div className="item-actions">
        <span className="check" onClick={onActive}>
          &#10003;
        </span>
        <span className="times" onClick={onDeleteItem}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default ShoppingListItem;
