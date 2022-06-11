import Navbar from './componentes/navBar/navBar';
import './App.css';
import GaleriaConteiner from './componentes/galeriaConteiner/galeriaConteiner';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <GaleriaConteiner titulo="Productos"/>
      </header>
    </div>
  );
}

export default App;
