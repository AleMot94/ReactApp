import CardProducto from "../cardProducto/cardProducto"
const DetalleProducto = ({products}) => {
    return (
        <CardProducto {...products}/>
    )
}

export default DetalleProducto