import {useContext} from 'react';
import {GlobalContext} from '../Router';
export default function Schedule() {

    const {contacts, setContacts} = useContext(GlobalContext);
    
    const removeContact = PhoneNumber => {
        return e => {
            setContacts(contacts.filter(contact => contact.PhoneNumber !== PhoneNumber));
        }
    }
    
    
    
    return (
        <div className="row">
               {contacts.map((contact, index) => {
                   return (
                       <ul className="list-group mb-3 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3" key={contact.PhoneNumber}>
                           <li className="list-group-item active">Contacto {index + 1}</li>
                           <li className="list-group-item">{contact.Name}</li>
                           <li className="list-group-item">{contact.Surname}</li>
                           <li className="list-group-item">{contact.PhoneNumber}</li>
                           <li className="list-group-item">{contact.Adress}, {contact.PostCode}, {contact.City}</li>
                           <li className="list-group-item"><button className="btn btn-warning" onClick={removeContact(contact.PhoneNumber)}>Remove</button></li>
                       </ul>
                   )
               })}
        </div>
    )
}
