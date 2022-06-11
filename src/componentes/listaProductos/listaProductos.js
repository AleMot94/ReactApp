import CardProducto from "../cardProducto/cardProducto"

const ListaProductos = ({products}) => {
    return (
        <div>
            {
                products.map(prod => <CardProducto {...prod}/>)
            }
        </div>
    )
}

export default ListaProductos