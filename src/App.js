// import Navbar from './components/Navbar';
// import Pagelayout from './components/Pagelayout';
// import Cards from './components/Cards';
// import Maps from './components/Maps';
// import Lists from './components/Lists';
// import Foothead from './components/Foothead';
// import Footer from './components/Footer';
import './App.css';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
      </ Routes>
      {/* <div className='maan' style={{minHeight:'100vh'}}>
      <Navbar />
      <Pagelayout />
      </div>
      <Cards />
      <Maps />
      <Lists />
      <Foothead />
      <Footer /> */}
    </div>
  );
}
export default App;
