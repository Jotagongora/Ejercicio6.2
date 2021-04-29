import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Schedule from '../Components/Schedule'
import Form from '../Components/Form';

function Page3() {
  return (
    <div className="container">
      <h2 className="my-3">Contact List</h2>
      <Schedule/>
      <h2 className="mb-3">New Contact</h2>
      <Form/>
    </div>
  );
}

export default Page3;