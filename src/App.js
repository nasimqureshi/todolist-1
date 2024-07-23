
import { useState } from 'react';
import './App.css';

function App() {
 let [todolist, setTodolist] = useState([]);

 let saveTodoList=(event) => {

  let toname = event.target.toname.value;
  
  if(!todolist.includes(toname)){
    let finalDolist = [...todolist, toname]
    setTodolist(finalDolist);
  }
  else{
    alert("This name is already exist");
  }
  event.preventDefault();
 }
 let List = todolist.map((value, index) => {

  return (
    <ToDoListItems value={value} key={index} indexNumber={index} 
    todolist={todolist} 
    setTodolist={setTodolist}
    />
  )
 })

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name='toname' /> <button>Save</button>
      </form>

       <div className='outerDiv'>
        <ul>
          {List}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({value, indexNumber,todolist,setTodolist}){
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
   let finalData = todolist.filter((v,i) => i!==indexNumber)
   setTodolist(finalData);
  }
  let checkstatus = () => {
    setStatus(!status);
  }
  return(
    <li className={(status) ? 'completetodo': ''} onClick={checkstatus}>{indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
