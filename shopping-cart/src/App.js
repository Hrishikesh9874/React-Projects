import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Header from './Components/Header/index';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;
