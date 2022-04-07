import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import {useState} from "react";

function App() {

    let [stockCarro, setStockCarro] = useState(0);

    function onAdd(cant){
        setStockCarro(cant);
    }

    return (
    <div className="App">
        <NavBar stockCarro={stockCarro}/>
        <div>
            {/* <ItemListContainer tienda={"Winkels"} onAdd={onAdd}/> */}
            <ItemDetailContainer tienda={"Winkels"} onAdd={onAdd}/>
        </div>
    </div>
  );
}

export default App;
