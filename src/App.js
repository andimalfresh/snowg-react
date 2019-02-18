import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom"
// import { Link } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Route path ="/" exact component={Home} />
          <Route path ="/about" render={() => (<About  />)} />
          <Route path ="/contact" render={() => (<Contact />)}/>
        Hello SnowG 2.0
      </div>
    );
  }
}

export default App;
