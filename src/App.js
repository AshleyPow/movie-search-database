import './App.css';
import Home from './pages/Home/home';
import NavBar from './components/NavBar/navBar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
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
