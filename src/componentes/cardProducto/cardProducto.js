import { NavLink } from 'react-router-dom';
import'./cardProducto.css';

const CardProducto = ({id,name, imag, price}) => {
    return ( 
        <div className="card">
            <img src={imag} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
            </div>
            <NavLink to={`/detail/${id}`}>ver detalle</NavLink>
      </div>
        
    )
}

export default CardProducto