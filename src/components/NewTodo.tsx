import { useRef } from "react";

const NewTodo:React.FC = (props : {onAddTodo : (text : string) => void}) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    function submitTodoHandler (event : React.FormEvent) {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0) 
            return;
        props.onAddTodo(enteredText);
        todoTextInputRef.current!.value='';
    }
    return <form className="form-todo" onSubmit={submitTodoHandler}>
        <label htmlFor="text" className="label-form">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} className="input-form"/>
        <button className="button-form">Add Todo</button>
    </form>
}
export default NewTodo;