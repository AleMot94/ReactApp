import Button from "../button/button";
import {useState} from 'react';

const Contador = (props) => {
    const {count, setContador} = useState(props.contador)

   

    return(
        <div className="d-flex justify-content-center">
            <Button title="+"/>
            <h1>{count}</h1>
            <Button title="-"/>
        </div>
    )
}

export default Contador