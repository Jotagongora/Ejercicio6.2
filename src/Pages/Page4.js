import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoList from '../Components/ToDoList';
import Input from '../Components/Input';

function Page4() {

  return (
    <div className="container">
      <h3 className="text-center">To Do List</h3>
      <Input />
      <ToDoList />
    </div>
  );
}

export default Page4;
