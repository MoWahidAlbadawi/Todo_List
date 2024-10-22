import { useContext } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { myContext } from "./store/myContext";
function App() {

  const ctx = useContext(myContext);

  return (
    <div className="container">
    <p>Hello</p>
    </div>
  )
}

export default App;