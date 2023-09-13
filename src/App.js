import logo from './logo.svg';
import './App.css';
import MyButtonExternalFile from './components/MyButtonExternalFile';
import ObjUseState from './components/ObjUseState';
import { useState } from 'react';
import ProteinCalculator from './components/ProteinCalculator';

function MyButton() {
  const [ count, setMyCountWhateverName ] = useState(73);
  return (
    <button className="my-button">Im a button {count}</button>
  )
}

function App() {
  const [ count, setMyCountWhateverName ] = useState(37);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {count}
        </a>
        <MyButton />
        <MyButtonExternalFile />
        <ObjUseState />
        <ProteinCalculator />
      </header>
    </div>
  );
}

export default App;
