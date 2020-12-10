import React from "react";
import "./App.css";
function List(props) {
  const deleteitemfromlist = (key) => {
    const newlist = props.itemlist.filter((itemobj) => {
      return itemobj.key !== key;
    });
    props.updateItemlist(newlist);
  };
  return (
    <div>
      {props.itemlist.map((itemobj) => {
        return (
          <div className="item">
            <p>{itemobj.item}</p>
            <button onClick={() => deleteitemfromlist(itemobj.key)}>X</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
