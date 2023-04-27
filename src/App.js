import Navbar from './components/Navbar';
import './App.css';
import Pagelayout from './components/Pagelayout';
import Cards from './components/Cards';
import Maps from './components/Maps';
function App() {
  return (
    <div className="App">
      <div className='maan' style={{minHeight:'100vh'}}>
      <Navbar />
      <Pagelayout />
      </div>
      <Cards />
      <Maps />
    </div>
  );
}
export default App;
