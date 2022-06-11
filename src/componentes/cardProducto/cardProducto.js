const CardProducto = ({name, img}) => {
    return (
        <>
            <img src={img} alt={name}/>
            {name}
            
        </>
    )
}

export default CardProducto