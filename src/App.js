import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Jokes from './components/Jokes/Jokes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Jokes></Jokes>
      <Countries></Countries>
    </div>
  );
}

export default App;
