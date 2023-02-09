
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div className="App-Navbar">
            <NavBar />
          </div>
          <div className="App-body">
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenido a Tu Amigo Fiel" />} />
              <Route path='/productos' element={<ItemListContainer greeting="Bienvenido a Tu Amigo Fiel" />} />
              <Route path='/productos/:segmentoId' element={<ItemListContainer greeting="Bienvenido a Tu Amigo Fiel" />} />
              <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<CartContainer/>} />
            </Routes>
          </div>
          <div className="App-Footer">
              <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
