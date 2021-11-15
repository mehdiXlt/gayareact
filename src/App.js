import './App.css';
import Home from './components/home/home';
import Nav from './components/navbar.js/nav';
import Portfolio from './components/portfolio/portfolio';
import Project from './components/project/project';
import Test from './components/test section/test';

function App() {
  return (
    <div className="App">

      <Nav/>
      <Home />
      <Test />
      <Portfolio />
      <Project />
        
    </div>
  );
}

export default App;
