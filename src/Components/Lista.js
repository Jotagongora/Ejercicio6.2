
 function Lista(props) {
    const {categoria, productos} = props;
    return (
        <div>
            <h3>{categoria}</h3>
            <ul className="list-group">{productos.map(({id, nombre, marca, modelo, precio}) => {
                return (<li key={id} className="list-group-item">
                            {nombre} {marca} {modelo}. Precio : {precio}
                        </li>)
                })}
            </ul>
        </div>      
    )
}

export {Lista};