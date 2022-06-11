import Button from "../button/button";
import CardWidget from "../cardWidget/cardWidget";
import { Link, NavLink } from "react-router-dom";
import './navBar.css';

const Navbar = () => {

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Link to='/'>
                <h1>Store Technology</h1>
                </Link>
                <CardWidget/>
            </div>
            
            <ul className="d-flex justify-content-evenly mt-4">
             <NavLink to='/category/celular'>celulares</NavLink>
             <NavLink to='/category/notebooks'>notebooks</NavLink>
             <NavLink to='/category/monitores'>monitores</NavLink>
             <NavLink to='/category/audio'>audio</NavLink>
            </ul>
            
        </div>
    );
}

export default Navbar