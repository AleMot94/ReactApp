const products = [
    {   id: '1', 
        name: 'Samsung Galaxy Z Flip 3', 
        price: 600,
        category: 'celular',
        imag:'./imagenes/samsung galaxy z flip 3.jpg',
        stock: 20, 
        description:'Descripcion de samsung galaxy z flip 3'
    },
    {
        id: '2', 
        name: 'Notebook ASUS X515EA 15,6', 
        price: 1100, 
        category: 'notebooks', 
        imag:'./imagenes/notebook asus.jpeg',
        stock: 20, 
        description:'FHD Core I7 8GB SSD 512GB Windows 11'
    },
    {
        id: '3', 
        name: 'Monitor Gamer Curvo Asus', 
        price: 300, 
        category: 'monitores', 
        imag:'./imagenes/monitor gamer.jpeg',
        stock: 20, 
        description:'TUF Gaming VG24VQ led 23.6 " negro 100V/240V'
    },
    {
        id: '4', 
        name: 'Minicomponente LG Xboom CK57', 
        price: 350, 
        category: 'audio', 
        imag:'./imagenes/minicomponente lg.jpg',
        stock: 20, 
        description:'negro con bluetooth 1100W de potencia - 220'
    },
    
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (idcategoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === idcategoria))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}