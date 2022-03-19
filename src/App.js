import './App.css';
import coderLogo from './assets/images/coderhouse.jpg';


function App() {
  return (
    <div className="App">
        <div className="Navbar">
            <img className="imgCoder" src={coderLogo} alt="Coder House React"/>
        </div>
        <div>
            <h2 className="Title">• Bienvenido •</h2>
            <hr></hr>
            <h4>React JS</h4>
        </div>
        <div className="Footer">
        </div>
    </div>
  );
}

export default App;
