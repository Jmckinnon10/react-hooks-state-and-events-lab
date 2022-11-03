import React from "react";
import Item from "./Item";
import { useState } from 'react'

function ShoppingList({ items }) {
  console.log(items)

  const [selectedCategory, setSelectedCategory] = useState([])

  function applyFilter() {
    setSelectedCategory(selectedCategory)
    }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={applyFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
