import React from "react";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/' exact component={Content}/>
          <Route path='/profile' exact component={Profile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
