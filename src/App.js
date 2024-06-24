import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Common/Footer/footer';
import Header from './components/Common/Header';
import MainComponent from "./components/LandingPage/MainComponent"
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Coin from './pages/Coin';
import Watchlist from './pages/Watchlist';
import Compare from './pages/Compare';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
