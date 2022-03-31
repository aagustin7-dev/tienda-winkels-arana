import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
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
            <ItemListContainer autor={"Agustin Arana"} curso={"React JS"} onAdd={onAdd}/>
        </div>
        <div className="Footer">
        </div>
    </div>
  );
}

export default App;
