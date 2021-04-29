import {useContext} from 'react';
import {GlobalContext} from '../Router';
import './ToDoList.css';
export default function ToDoList() {

    const {todos, setTodos} = useContext(GlobalContext);

    function crossOut(index) {
        return (e) => {
            if (e.target.tagName !== "BUTTON") {
            const newTodos = [...todos];
            newTodos[index].completed = !newTodos[index].completed;
            setTodos(newTodos);
            }
        }
    }

    let addClass = "";

    function remove(ID) {
        return () => {
            setTodos(todos.filter(todo => todo.id !== ID))
        }
    }

    return(
        <div className=""><ul className="list-group">
            {todos.map((todo, index)=> {
                if (todo.completed === true) {
                    addClass = "crossOut list-group-item  d-flex justify-content-between";
                } else {
                    addClass = "list-group-item  d-flex justify-content-between";
                }
                return (
                        <li onClick={crossOut(index)} key={todo.id} className={addClass}><span>{index}: {todo.title}</span><button onClick={remove(todo.id)} className="btn btn-danger">x</button></li>
                )
            })}
            </ul>
        </div>
    )
    

};