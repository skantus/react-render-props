import React from "react";

const ListItems = ({ list }) =>
  list.map(item => <li key={item.id}>{item.title}</li>);

export default ListItems;
