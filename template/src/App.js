import './App.css';
import "./styles/ColorPalette.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
