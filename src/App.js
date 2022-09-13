
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          
          <NavBar />
          <div className="App-body">
          <Routes>
            
              <Route path='/' element={<ItemListContainer greeting="Bienvenido a Tu Amigo Fiel" />}/>
              <Route path='/productos' element={<ItemListContainer greeting="Bienvenido a Tu Amigo Fiel" />}/>
              <Route path='/productos/:segmentoId' element={<ItemListContainer greeting="Bienvenido a Tu Amigo Fiel" />}/>
              <Route path="/detalle/:productId" element={<ItemDetailContainer/>}/> 
            
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
