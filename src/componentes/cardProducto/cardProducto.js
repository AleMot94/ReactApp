import { Link } from 'react-router-dom';
import'./cardProducto.css';

const CardProducto = ({id,name, imag, price}) => {
    return ( 
        <div className="card">
            <img src={imag} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <Link to={`/detail/${id}`}>ver detalle</Link>
            </div>
            
      </div>
        
    )
}

export default CardProducto