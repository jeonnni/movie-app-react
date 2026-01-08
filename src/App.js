// import Button from "./Button";
// import title from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (todo === "") {
      return;
    }

    setTodos((perv) => [todo, ...perv]);
    setTodo("");
  }
  console.log(todos);
  console.log(todos.map((item,index) => (<li key={index}>{item}</li>))
  );
  
  

  return (
    <div>
      <h1>My To Dos {todos.length}</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do.."
          onChange={onChange}
          value={todo}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;