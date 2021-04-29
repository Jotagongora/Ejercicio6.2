import '../App.css';
import {Card} from '../Components/CardComponent';

function Page1() {
  return (
    <div className="App">
      <Card urlImg="https://s3.amazonaws.com/ntbrand-wp/playtiment/wp-content/uploads/2018/07/19142633/Fao9BFC-world-of-warcraft-backgrounds-e1532024801127.jpg"
      title="World of Warcraft Guide"
      parrag="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      bLink="https://www.guiaswow.com/"
      linkText="Go to the guide"/>
    </div>
  );
}

export default Page1;