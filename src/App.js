import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom"
// import { Link } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import Team from "./components/team"

class App extends Component {
  render() {
    return (
      <div className="App">
            <Navbar />
          <div className="wrapperContainer">
            <Route path ="/" exact component={Home} />
            <Route path ="/about" render={() => (<About  />)} />
            <Route path ="/contact" render={() => (<Contact />)}/>
            <Route path ="/team" render={() => (<Team />)}/> 
        </div>
        <div className="footerContainer">  Hello SnowG 2.0 </div>
      </div>
    );
  }
}

export default App;
