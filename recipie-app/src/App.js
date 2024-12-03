import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/index.js';
import Home from './Pages/Home/index.js';
import Favourites from './Pages/Favourites/index.js';
import Details from './Pages/Details/index.js';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>

        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/favourites' element={<Favourites/>}></Route>
          <Route path='/recipe-item/:id' element={<Details/>}></Route>
        </Routes>

      </div>      
    </div>
  );
}

export default App;
