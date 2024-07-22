import logo from './logo.svg';
import './App.css';
import Globe from './components/Globe';
import MainPage from './components/MainPage';
import Transition from './components/Transition';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Globe />
      <Transition />
    </div>
  );
}

export default App;
