import CardProducto from "../cardProducto/cardProducto"

const ListaProductos = ({products}) => {
    return (
        <div>
            {
                products.map(prod => <CardProducto key={prod.id} {...prod}/>)
            }
        </div>
    )
}

export default ListaProductos