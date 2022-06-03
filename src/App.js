import './App.css';
import { Restaurant } from './components/Restaurant';
import res from './data/res.json'
function App() {
  return (
    <div className="App">
      <Restaurant res={res}/>
    </div>
  );
}

export default App;
