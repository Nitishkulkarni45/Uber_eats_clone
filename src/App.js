import Navbar from './components/Navbar';
import './App.css';
import Pagelayout from './components/Pagelayout';
function App() {
  return (
    <div className="App">
      <div className='maan' style={{minHeight:'100vh'}}>
      <Navbar />
      <Pagelayout />
      </div>
    </div>
  );
}
export default App;
