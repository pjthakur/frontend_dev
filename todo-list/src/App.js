
import { useState } from 'react';
import './App.css';
import {FaTimesCircle } from "react-icons/fa";

function App() {
  const [itemList, setItemList]= useState("");
  const [items, setItems] = useState([]);

  const itemEvent =(event)=>{
    setItemList(event.target.value);
  }
  
  const enterKey = (event)=>{
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.");
      listOfItems();
      // callMyFunction();
    }
  }

  const listOfItems = () =>{
    setItems((output)=>{
      return [...output,itemList];
    }
  )}

  const deleteItems=(index)=>{
    console.log("deleted");

    setItems((output)=>{
      return output.filter((arrEll,inde)=>{
      return index !==inde;
      })
    })
  }

  return (
    <div className="app">
      <div className='card'>
        <h1>ToDo List</h1>
        <div className='field'>
        <input type='text' placeholder='List your Task' onChange={itemEvent} onKeyPress={enterKey} value={itemList}></input>
        <button type='submit' onClick={listOfItems} >+</button>
        </div>
        <ol>
          {/* <li>{itemList}</li> */}
          {items.map((itemVal, index)=>
          <div className='sub-list'>
          <FaTimesCircle className='icon' onClick={()=>{deleteItems(index)}}/>
          <li>{itemVal}</li>
          </div>
          )}
        </ol>
      </div>
    </div>
  );
}

export default App;
