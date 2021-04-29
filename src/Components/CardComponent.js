function Card(props) {
    return (
      <div className="card w-50 m-auto">
        <img src={props.urlImg} className="card-img-top" alt="Esto es una imagen" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.parrag}</p>
            <a href={props.bLink} className="btn btn-primary" target="blank">{props.linkText}</a>
          </div>
      </div>
    )
  }
  
  export {Card};