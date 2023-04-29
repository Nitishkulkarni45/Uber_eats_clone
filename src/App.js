import Navbar from './components/Navbar';
import './App.css';
import Pagelayout from './components/Pagelayout';
import Cards from './components/Cards';
import Maps from './components/Maps';
import Lists from './components/Lists';
import Foothead from './components/Foothead';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className='maan' style={{minHeight:'100vh'}}>
      <Navbar />
      <Pagelayout />
      </div>
      <Cards />
      <Maps />
      <Lists />
      <Foothead />
      <Footer />
    </div>
  );
}
export default App;
