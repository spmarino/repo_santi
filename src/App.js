import './App.css';
import NavBar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer"
import MainFoto from "./components/MainFoto"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import CartProvider from './components/CartContext';
import { ToastContainer} from 'react-toastify';




function App() {
  return (
    <div className="App">
      <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <MainFoto/>
                <Routes>
                  <Route path="/"  element={<ItemList/>}/>
                  <Route path="/category/:id"  element={<ItemList/>}/>
                  <Route path="/product/:id"  element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element = {<Cart/>}/>
                </Routes>
                <ToastContainer/>
            </BrowserRouter>
      </CartProvider> 
    </div>
  );
}

export default App; 
