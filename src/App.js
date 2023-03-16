import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Page from './components/Page/Page';
import Dashboard from './components/Dashboard/Dashboard';
import Router from './components/router/Rout';
import Rout from './components/router/Rout';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      {/* <Signup/> */}
      {/* <Signin/> */}
      {/* <Page/> */}
      {/* <Dashboard/> */}
      <Rout/>
    </div>
  );
}

export default App;
