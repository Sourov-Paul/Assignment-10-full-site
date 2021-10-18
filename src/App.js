import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Servicedetails from './components/pages/Services/Servicedetails/ServiceDetail';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';
import Contact from './components/pages/Contact/Contact/Contact';
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
        <Route exact path="/serviceDetails/:serviceId">
        <Servicedetails></Servicedetails>
        </Route>
        
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>

        <Route exact path="/article">
          <Article></Article>
          </Route>
 
      </Switch>
      
  <Footer></Footer>
    </Router>
  );
}

export default App;
