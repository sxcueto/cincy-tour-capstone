import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import ArtsMusic from './components/ArtsMusic';

class App extends Component {
  render(){

  
  return (
    <Router>
      <div>
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/artsmusic" component={ArtsMusic} />
      </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
