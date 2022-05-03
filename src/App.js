import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from './components/CartContextProvider';
import FinalizarCompra from "./components/FinalizarCompra";
import MostrarDatosCompra from "./components/MostrarDatosCompra";
import Footer from "./components/Footer";

function App() {

    return (

        <CartContextProvider>
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route exact path="/home" element={<ItemListContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/finalizar-compra" element={<FinalizarCompra />} />
                        <Route exact path="/informacion-compra" element={<MostrarDatosCompra />} />
                        <Route exact path="/:categoryName/:categoryId" element={<ItemListContainer />} />
                        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>

        </CartContextProvider>
  );
}

export default App;
