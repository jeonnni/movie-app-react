import Button from "./Button";
import title from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={title.title}>Welcome back!</h1>
      <Button text={"Continue"}></Button>
    </div>
  );
}

export default App;
