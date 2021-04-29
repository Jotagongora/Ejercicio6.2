import {useState} from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../Router';
export default function Input() {

    const {setTodos} = useContext(GlobalContext);

    const [currentInput, setCurrentInput] = useState("");

    function handleTitle(e) {
        setCurrentInput(e.target.value);
        };

    const [ID, setID] = useState(21);

    

    function addTodo(e) {
        e.preventDefault();
        setID(ID + 1);
        const newTodo = {id: ID, title: currentInput, completed: false};
        setTodos(currentTodos => [newTodo,...currentTodos]);
        setCurrentInput("");
    }

    

    return (
        <div className="container">
            <form onSubmit={addTodo}>
            <input onChange={handleTitle} type="text" value={currentInput} className="w-100 my-3" placeholder="Introduce un nuevo To-Do"/>
            </form>
        </div>
    )

};