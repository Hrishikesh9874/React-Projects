import './App.css';
import FeatureFlagGlobalState from './context';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <Main></Main>
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
