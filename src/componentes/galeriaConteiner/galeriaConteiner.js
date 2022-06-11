import {useEffect, useState} from 'react'
import { getProducts } from '../../Productos'
import ListaProductos from '../listaProductos/listaProductos'

const GaleriaConteiner = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div>
            <h3>{props.titulo}</h3>
            <ListaProductos products={products}/>
        </div>
    )
}

export default GaleriaConteiner