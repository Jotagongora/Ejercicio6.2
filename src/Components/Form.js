import {useContext} from 'react';
import {GlobalContext} from '../Router';
import {useState} from 'react';

export default function Form() {

    const {setContacts} = useContext(GlobalContext);

    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Adress, setAdress] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [PostCode, setPostCode] = useState("");
    const [City, setCity] = useState("");

    function handleName(e) {
        setName(e.target.value);
    };

    function handleSurname(e) {
        setSurname(e.target.value);
    };

    function handleAdress(e) {
        setAdress(e.target.value);
    };

    function handlePostCode(e) {
        setPostCode(e.target.value);
    };

    function handleCity(e) {
        setCity(e.target.value);
    };

    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    };



    function submit(e) {
        e.preventDefault();
        const newContact = {Name, Surname, Adress, PostCode, City, PhoneNumber};

        setContacts(currentContacts => {
            return [...currentContacts, newContact]
        });

        setName("");
        setSurname("");
        setPostCode("");
        setCity("");
        setAdress("");
        setPhoneNumber("");

    // const newContact = {
    //     Name: Name,
    //     Surname: Surname,
    //     Adress: Adress,
    //     PostCode: PostCode,
    //     City: City,
    //     PhoneNumber: PhoneNumber
    // };

    };

    

    return (
        <form className="form-group" onSubmit={submit}>
            <input className="form-control mb-3" type="text" value={Name} onChange={handleName} placeholder="Introduce tu nombre"/>
            <input className="form-control mb-3" type="text" value={Surname} onChange={handleSurname} placeholder="Introduce los apellidos"/>
            <input className="form-control mb-3" type="text" value={Adress} onChange={handleAdress} placeholder="Introduce la dirección"/>
            <input className="form-control mb-3" type="text" value={City} onChange={handleCity} placeholder="Introduce la provincia"/>
            <input className="form-control mb-3" type="text" value={PostCode} onChange={handlePostCode} placeholder="Introduce el código postal"/>
            <input className="form-control mb-3" type="text" value={PhoneNumber} onChange={handlePhoneNumber} placeholder="Introduce el número de teléfono"/>
            <input type="submit" className="btn btn-success" value="Register"/>
        </form>
    )
}
