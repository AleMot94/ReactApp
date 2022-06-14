import './App.css'
import Navbar from './componentes/navBar/navBar';
import GaleriaConteiner from './componentes/galeriaConteiner/galeriaConteiner';
import DetalleProductoContainer from './componentes/detalleProducto/detalleProducto';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
 <div className="App">
        {/*<header>
            <Navbar/>
          </header>
          <main>
            <GaleriaConteiner titulo="Productos"/>
         </main>
        */}
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<GaleriaConteiner titulo="Productos"/>}></Route>
            <Route path='/category/:idcategoria' element={<GaleriaConteiner titulo="Productos"/>}></Route>
            <Route path='/detail/:idproducto' element={<DetalleProductoContainer />}></Route>
        </Routes>
    </BrowserRouter>    
  </div>
  );
}

export default App;
