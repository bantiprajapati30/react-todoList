import React, { useState } from 'react';
import './App.css';
import './components/css/style.css';
import ToDoList from './components/ToDoList'
function App() {
   const [input, setInput]= useState("");
   const [item, setItem] = useState([]);

  const addItem=(event)=> {
   setInput(event.target.value)
  }

  const listItem=()=> {
   setItem((oldItem)=> {
    return  [...oldItem, input];
    }) 
    setInput('');
  }

  const deleteItem=(id)=> {
    setItem((oldItem)=> {
      return oldItem.filter((arrEl, index)=> {
          return index !== id;
      });
      }) 
}

  return (
    <>
    <div className ="main_div">
      <div className="center_div">
        <br />
        <h1> TO Do List</h1>
        <br/>
        <input type="serach" 
        placeholder="Add new Item" 
        value={input} 
        onChange={addItem}
         />
        <button onClick={listItem}>+</button> 
        <ol>
          {item.map((itemVal, index)=> {
          return <ToDoList 
          key={index}
          id={index}
          text={itemVal}
          onSelect={deleteItem}
          />
          })}  
        </ol>
      </div>
         
    </div>
    </>
  );
}

export default App;
