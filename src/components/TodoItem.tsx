
const TodoItem =(props : {text : string , onRemove : () => void}) => {
    return <li className="todo" onClick={props.onRemove}>{props.text}</li>
}
export default TodoItem;