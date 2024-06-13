import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import NavBar from './components/NavBar/navBar';
import Footer from './components/Footer/footer';

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

      <div className="app-wrapper">
        <NavBar />
        <Home/>
        <div className="fixed inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
