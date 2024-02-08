import './App.css';
import "./styles/ColorPalette.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';
import InfoPage from './pages/infopage/InfoPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="info" element={<InfoPage />}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
