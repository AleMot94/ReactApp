

const DetalleProducto = ({id, name, price, imag}) => {
    return (
        <div className="card">
            <img src={imag} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
            </div>
            
      </div>
    )
}

export default DetalleProducto