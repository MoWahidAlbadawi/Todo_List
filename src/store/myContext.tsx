import {createContext} from 'react';
import { useState , useEffect } from 'react';
import Todo from "../components/Types/Todo";
interface contextType {
    items : Todo[],
    addTodo : (text : string) => void,
    removeTodo : (id : string) => void,
}
export const myContext = createContext<contextType>({
    items : [],
    addTodo : (text : string) => {},
    removeTodo : (id : string) => {},
});
const ContextProvider = (props) => {
    
    const initialTodos:Todo[] = JSON.parse(localStorage.getItem('todos'));
    const [todos , setTodos] = useState<Todo[]>(initialTodos);
    function addTodoHandler (text : string) {
      const newTodo = new Todo(text);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
    });
    }  
    function removeTodoHandler (todoId : string) {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !==todoId);
      })
    }
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      localStorage.setItem('todos',JSON.stringify(todos));
    } , [todos]);

    const contextValues : contextType = {
        items : todos,
        addTodo : addTodoHandler,
        removeTodo : removeTodoHandler,
    }

    return <myContext.Provider value={contextValues}>{props.children}</myContext.Provider>
};
export default ContextProvider;