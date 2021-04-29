import {createContext, useState, useEffect} from 'react';
import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import './Components/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

export const GlobalContext = createContext();

export default function Router() {

    const API_Todos = "https://jsonplaceholder.typicode.com/todos";

    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      fetch(API_Todos)
      .then(response => response.json())
      .then(data => setTodos(data.slice(0, 20)))
    }, []);

    const initialContactsState = [
        {Name: "Freddy", Surname: "Kruger", Adress: "Elm Street", City: "Springwood", PostCode: 28015, PhoneNumber: 652345689},
        {Name:"Naruto", Surname:"Uzumaki", Adress:"Way of the ninja", City:"Konoha", PostCode:26520, PhoneNumber:623541474},
        {Name:"Captain", Surname:"Hook", Adress:"Never Land", City:"Never", PostCode:29452, PhoneNumber:623549636}
      ];
    
      const [contacts, setContacts] = useState(initialContactsState);

    return (
        <div>
            <BrowserRouter>
                <nav className="navbar px-5 py-3 bg-dark navbar-dark">
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" exact to="/Ejercicio6.2/">Ejercicio 1</NavLink>
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" to="/Page2">Ejercicio 2</NavLink>
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" to="/Page3">Ejercicio 3</NavLink>
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" to="/Page4">Ejercicio 4</NavLink>
                </nav>
                <GlobalContext.Provider value={{contacts, setContacts, setTodos, todos}}>
                <Switch>
                    <Route exact path="/Ejercicio6.2/" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Page3" component={Page3} />
                    <Route path="/Page4" component={Page4} />
                </Switch>
                </GlobalContext.Provider>
            </BrowserRouter>
        </div>
    )
}
