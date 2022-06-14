import { useState, useEffect} from 'react'
import { getProductById } from '../../Productos'
import { useParams } from 'react-router-dom'
import DetalleProducto from '../detalleProducto/detalleProducto'

const DetalleProductoContainer = () => {
    const [product, setProduct] = useState()
    const { idproducto } = useParams()

    useEffect(() =>{
                        getProductById(idproducto).then(resp => {
                            setProduct(resp)
                        },[] )
                    }
                )
    return (
        <>
            <h4>Descripcion Producto</h4>
            <DetalleProducto {...product}/>
        </>
    )
}

export default DetalleProductoContainer