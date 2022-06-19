import {useEffect, useState} from 'react'
import { getProducts, getProductsByCategory } from '../../Productos'
import { useParams } from 'react-router-dom'
import ListaProductos from '../listaProductos/listaProductos'

const GaleriaConteiner = (props) => {
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)
    const {idcategoria} = useParams()

    useEffect(() => {

        setCargando(true)
        if (!idcategoria) {
            getProducts().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setCargando(false)
            })
        }else {
            getProductsByCategory(idcategoria).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setCargando(false)
            })
        }
    }, [idcategoria])

    if(cargando) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <h3>{props.titulo}</h3>
            <ListaProductos products={products}/>
        </div>
    )
}

export default GaleriaConteiner