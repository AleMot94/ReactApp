import DetalleProducto from "../detalleProducto/detalleProducto"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../Productos"

const DetalleProductoConteiner = () => {
    const [product, setProduct] = useState()
    const {idproducto} = useParams()

    useEffect( () => {
        getProductById(idproducto)
        .then(resp => setProduct(resp))
    }, [])


    return(
        <>
            <h3>Detalle</h3>
            <DetalleProducto {...product}/>
        </>
    )
}

export default DetalleProductoConteiner