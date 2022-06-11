import Navbar from './componentes/navBar/navBar';
import './App.css';
import GaleriaConteiner from './componentes/galeriaConteiner/galeriaConteiner';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <GaleriaConteiner titulo="Productos"/>
      </main>
    </div>
  );
}

export default App;
