import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Pagelayout from './components/Pagelayout';
import Cards from './components/Cards';
import Maps from './components/Maps';
import Lists from './components/Lists';
import Foothead from './components/Foothead';
import Footer from './components/Footer';
import Login from './Routes/Login';
import Home from './Routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
