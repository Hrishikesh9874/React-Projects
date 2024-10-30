import './App.css';
import TreeView from './TreeView.js';
import menus from './data.js';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
