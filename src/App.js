
import './App.css';
import picOne from './shopping.jpg';
import picTwo from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="head">
      <img src={picOne} alt='grocery'  width={200}/>
      <h1>GROCERY LIST</h1>
      <GroceryList />
      <img src={picTwo} alt='shopMan'  width={200}/>
    
    </div>
  );
}

export default App;
