import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from './components/CartContextProvider';

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
                        <Route exact path="/:categoryName/:categoryId" element={<ItemListContainer />} />
                        <Route exact path="/:categoryName/:categoryId/:productName/:productId" element={<ItemDetailContainer />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
  );
}

export default App;
