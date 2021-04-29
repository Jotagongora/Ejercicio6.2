import {Lista} from './Lista';

function Tienda() {
    const tienda = {
        electronica: [
            {id: 27, nombre: "Televisor", marca: "LG", modelo: "XP7302", precio: 399},
            {id: 28, nombre: "Equipo Hi-FI", marca: "Samsumg", modelo: "VF235", precio: 179},
            {id: 29, nombre: "Televisor", marca: "Sony", modelo: "Bravia-173", precio: 498},
        ],
        alimentacion: [
            {id: 30, nombre: "Galletas", marca: "Maria", precio: 0.90},
            {id: 31, nombre: "Ensalada", marca: "Imizurra", precio: 1.30},
            {id: 32, nombre: "Patatas", marca: "McKain", precio: 0.90},
            {id: 33, nombre: "Pasta", marca: "Gallo", precio: 0.90},
        ],
        mascotas: [
            {id: 34, nombre: "Corquetas para gato", marca: "Purina", precio: 4.90},
            {id: 35, nombre: "arena de gato", marca: "Limpior", precio: 1.10},
        ]
    }
    return (
        <div className="container">
            <Lista categoria="Electrónica" productos={tienda.electronica}/>
            <Lista categoria="Alimentacion" productos={tienda.alimentacion}/>
            <Lista categoria="Mascotas" productos={tienda.mascotas}/>
        </div>
    )
}

export {Tienda};