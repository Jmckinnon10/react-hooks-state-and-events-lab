import React from "react";
import { useState } from "react"
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [toggleMode, setToggleMode] = useState(false)
  
  function createToggle() {
    setToggleMode(!toggleMode)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = toggleMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={createToggle} className={appClass}> {toggleMode ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
