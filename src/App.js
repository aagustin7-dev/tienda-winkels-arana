import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div className="App">
        <NavBar />
        <div>
            <ItemListContainer autor={"Agustin Arana"} curso={"React JS"}/>
        </div>
        <div className="Footer">
        </div>
    </div>
  );
}

export default App;
