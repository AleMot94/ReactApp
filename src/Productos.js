const products = [
    {   id: '1', 
        name: 'Samsung Galaxy Z Flip 3', 
        price: 600,
        category: 'celular',
        img:'./imagenes/samsung galaxy z flip 3.jpg',
        stock: 20, 
        description:'Descripcion de samsung galaxy z flip 3'
    },
    {
        id: '2', 
        name: 'Notebook ASUS X515EA 15,6', 
        price: 1100, 
        category: 'notebooks', 
        img:'./imagenes/notebook asus.jpeg',
        stock: 20, 
        description:'FHD Core I7 8GB SSD 512GB Windows 11'
    },
    {
        id: '3', 
        name: 'Monitor Gamer Curvo Asus', 
        price: 300, 
        category: 'monitores', 
        img:'./imagenes/monitor gamer.jpeg',
        stock: 20, 
        description:'TUF Gaming VG24VQ led 23.6 " negro 100V/240V'
    },
    {
        id: '4', 
        name: 'Minicomponente LG Xboom CK57', 
        price: 350, 
        category: 'audio', 
        img:'./imagenes/minicomponente lg.jpg',
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