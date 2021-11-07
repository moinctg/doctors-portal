import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
    </div>
  );
}

export default App;
