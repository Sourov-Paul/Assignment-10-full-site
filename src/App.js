import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import About from './components/pages/Contact/About/About';
import Contact from './components/pages/Contact/Contact';
function App() {
  return (
    <Router>
       <Header></Header>
      <Switch>
       
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/services">
          <Services>
          </Services>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
