import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const addTodo = () => {
    settodos([...todos, {todo,isCompleted:false}])
    settodo("")
    console.log(todo);
  }

  const editTodo = () => {

  }

  const delTodo = () => {

  }

  const changeTodo = (e) => {
    settodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto m-5 rounded-xl p-5 bg-violet-100">
        <div className="addTodo my-5">
          <h1 className="text-2xl font-bold">Add a Todo</h1>
          <input type="text" className="w-1/2" onChange={changeTodo} value={todo} />
          <button className="bg-violet-800 hover:bg-violet-900 active:bg-violet-700 transition-all p-3 py-1 mx-4 font-semibold text-white rounded-md" onClick={addTodo}>Add</button>
        </div>
          <h1 className="text-2xl font-bold">Todos</h1>
        <div className="todos">
          {todos.map(item =>{          
          return <div className="todo flex">
            <div className="todotext">
              {item.todo}
            </div>
            <div className="button">
              <button className="bg-violet-800 hover:bg-violet-900 active:bg-violet-700 transition-all p-3 py-1 mx-4 font-semibold text-white rounded-md" onClick={editTodo}>Edit</button>
              <button className="bg-violet-800 hover:bg-violet-900 active:bg-violet-700 transition-all p-3 py-1 font-semibold text-white rounded-md" onClick={delTodo}>Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
