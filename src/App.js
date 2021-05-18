import React,{useState} from 'react'
import './App.css';
import ToDoList from './ToDoList';


function App() {
  const [inputList,setinputList] = useState();
  const [items,setItems] = useState([]);


  const itemEvent = (e)=> {
    setinputList(e.target.value)
  };

  const listOfItems = () =>{
    setItems((oldItems)=>{
        return [...oldItems, inputList]
    });
    setinputList("")
  }

  const deleteItem = (id) =>{  
    setItems((oldItems)=>{
      return oldItems.filter((arrElememt,index)=>{
          return index !== id 
      })
    })
    
}

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>Todo List</h1>
          <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} className='text_filed' />
          <button  onClick={listOfItems} className='button'>+</button>
          <ol>
            {
              items.map((itemValue,index) => {
               return <ToDoList key={index}
                id={index} 
                text={itemValue} 
                onSelect={deleteItem}
                />
              })
            }
          </ol>

        </div>

      </div>
    </>
  );
}

export default App;
