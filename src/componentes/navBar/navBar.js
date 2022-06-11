import Button from "../button/button";
import CardWidget from "../cardWidget/cardWidget";
import './navBar.css';

const Navbar = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Store Technology</h1>
                <CardWidget/>
            </div>
            
            <ul className="d-flex justify-content-evenly mt-4">
             <Button title="celulares"/>
             <Button title="notebooks"/>
             <Button title="monitores"/>
             <Button title="audio"/>
            </ul>
            
        </div>
    );
}

export default Navbar