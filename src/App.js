import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              
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
