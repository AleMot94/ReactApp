import {useEffect, useState} from 'react'
import { getProducts, getProductsByCategory } from '../../Productos'
import { useParams } from 'react-router-dom'
import ListaProductos from '../listaProductos/listaProductos'

const GaleriaConteiner = (props) => {
    const [products, setProducts] = useState([])
    const {idcategoria} = useParams()

    useEffect(() => {
        if (!idcategoria) {
            getProducts().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            })
        }else {
            getProductsByCategory(idcategoria).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [idcategoria])

    return (
        <div>
            <h3>{props.titulo}</h3>
            <ListaProductos products={products}/>
        </div>
    )
}

export default GaleriaConteiner