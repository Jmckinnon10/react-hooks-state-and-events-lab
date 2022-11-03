import React from "react";
import { useState } from 'react'
function Item({ name, category }) {
  console.log()

  const [addItem, setAddItem] = useState(false)

  function addToCart() {
    setAddItem(!addItem)
  }

  const newClass = addItem ? 'Remove From Cart' : 'Add To Cart'

  const liClass = addItem ? 'in-cart' : ''

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{newClass}</button>
    </li>
  );
}

export default Item;
