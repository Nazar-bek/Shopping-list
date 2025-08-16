import React from "react";
import ShoppingListItem from "./ShoppingListItem";

const ShoppinfList = ({ data, onDelete, onToggleActive }) => {
  return (
    <div className="shopping-list">
      {data.length ?data.map((item) => (
        <ShoppingListItem onActive={() => onToggleActive(item.id)} onDeleteItem={() => onDelete(item.id)}  item={item} key={item.id}/>
      )) : (
        <div className="not-found">
          <img width={300} src="https://avatars.mds.yandex.net/i?id=ab1d68757de452baa28391e8f17f7894_l-5859439-images-thumbs&n=13" alt="" />
        </div>
      )} 
    </div>
  );
};

export default ShoppinfList;
