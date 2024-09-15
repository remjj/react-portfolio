import './App.css';
import NavBar from './design/NavBar';
import Hero from './design/Hero';
import About from './design/About';
import Portfolio from './design/Portfolio';
import Contact from './design/Contact';
import Footer from './design/Footer';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Hero></Hero>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;
