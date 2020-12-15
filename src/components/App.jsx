import React, { useState } from "react";

function App() {
  const [currentItems, setCurrentItems] = useState(" ");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newItem = e.target.value;
    setCurrentItems(newItem);
  }

  function handleClick(e) {
    setItems((prevItems) => {
      return [...prevItems, currentItems];
    });
    setCurrentItems("");
  }
  


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={currentItems} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
   
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
