import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

// Containers
import Home from './containers/Home';

// Components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">

            </Route>
            <Route path="/projects">

            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
