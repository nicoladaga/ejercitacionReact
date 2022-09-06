
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <ItemListContainer greeting="Bienvenido a Tu Amigo Fiel"/>
      <h2>acá va el ejercicio de ItemDetailContainer</h2>
      <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
