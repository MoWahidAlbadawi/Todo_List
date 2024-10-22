import Todo from "./Types/Todo";
import TodoItem from "./TodoItem";

const Todos = (props : {items : Todo[] , onRemoveTodo : (todoId : string) => void}) => {
    return <ul className="todos">
        {props.items.map((item) => 
        <TodoItem key={item.id} text={item.text} onRemove={props.onRemoveTodo.bind(null, item.id)}/>
        )}
    </ul>
};
export default Todos;