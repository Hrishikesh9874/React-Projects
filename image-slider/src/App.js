import './App.css';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
      <Slider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}></Slider>
    </div>
  );
}

export default App;