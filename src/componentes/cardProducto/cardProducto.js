import'./cardProducto.css';

const CardProducto = ({name, imag, price}) => {
    return ( 
        <div className="card">
            <img src={imag} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">detalle</a>
            </div>
      </div>
        
    )
}

export default CardProducto