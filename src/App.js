// import Button from "./Button";
// import title from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev)=>prev+1);
  const onChange = (e) => setKeyword(e.target.value)

  useEffect(()=>{
    console.log("나는 한번만 실행돼요.");
  },[])
  useEffect(() => {
    console.log(`나는 ${keyword} 가 변화할 때 실행돼요.`);
  }, [keyword]);
  useEffect(() => {
    console.log(`나는 ${counter} 가 변화할 때 실행돼요.`);
  }, [counter]);
  useEffect(() => {
    console.log(`나는 ${counter}, ${keyword} 둘 다 변화할 때 실행돼요.`);
  }, [counter, keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      ></input>
      <p>{keyword}</p>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;