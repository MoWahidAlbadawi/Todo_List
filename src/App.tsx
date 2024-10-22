import { useContext } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { myContext } from "./store/myContext";
function App() {

  const ctx = useContext(myContext);

  return (
    <div className="container">
      <NewTodo onAddTodo = {ctx.addTodo}/>
        <Todos items={ctx.items} onRemoveTodo={ctx.removeTodo}/>
    </div>
  )
}

export default App;