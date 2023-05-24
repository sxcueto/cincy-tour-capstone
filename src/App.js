import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArtsMusic from './components/ArtsMusic';
import FamilyFun from './components/FamilyFun';
import FoodDrink from './components/FoodDrink';

class App extends Component {
  render(){

  
  return (
    <Router>
      <div>
      <Navbar />
      
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/familyfun" component={FamilyFun} />
      <Route  path="/artsmusic" component={ArtsMusic} />
      <Route  path="/fooddrink" component={FoodDrink} />
      </Switch>

      <Footer />
      </div>
    </Router>
  );
  }
}

export default App;
