import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";

function App() {

    let [stockCarro, setStockCarro] = useState(0);

    function onAdd(cant){
        setStockCarro(cant);
    }

    return (

        <BrowserRouter>
            <div className="App">
                <NavBar stockCarro={stockCarro}/>
                <Routes>
                    <Route exact path="/" element={<ItemListContainer tienda={"Winkels"} onAdd={onAdd} />} />
                    <Route exact path="/home" element={<ItemListContainer tienda={"Winkels"} onAdd={onAdd} />} />
                    <Route exact path="/:categoryName/:categoryId" element={<ItemListContainer tienda={"Winkels"} onAdd={onAdd}/>} />
                    <Route exact path="/:categoryName/:categoryId/:productName/:productId" element={<ItemDetailContainer tienda={"Winkels"} onAdd={onAdd}/>} />
                </Routes>
            </div>
        </BrowserRouter>

  );
}

export default App;
