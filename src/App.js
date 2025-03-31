import './App.css';
import logoFeliRodri from './images/logoFeliRodri.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplication-tareas">
      <div className='felirodri-logo-contenedor'>
        <img alt=""
           src={logoFeliRodri}
           className='felirodri-logo' />
      </div>
      <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
