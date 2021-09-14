import './App.css';
import Todo from './Component/Todo';
import React, { useEffect } from 'react';
import Gameofcharacter from './Component/Gameofcharacter';
import Home from "./Component/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >


      <Router>
        <div>    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Using API Game  of Throne</a>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link" >Character</Link>
              </li>
              <li className="nav-item">
                <Link to="/character" className="nav-link" ></Link>
              </li>
            
            </ul>
          </div>
        </nav>


          <Switch>
            <Route path="/user/:id" component={Gameofcharacter} />
            <Route path="/list">
              <Todo />
            </Route>
            <Route path="/character">
              <Gameofcharacter />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>







    </div>
  );
}

export default App;
