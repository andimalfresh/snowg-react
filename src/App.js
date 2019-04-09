import React, { Component } from 'react'
import './App.css';
import {Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import Custom from "./components/custom"
import Team from "./components/team"
import Desktopfeature from "./components/desktopfeature"

class App extends Component {
  render() {
    return (
      <div className="App">
            <Navbar />
            <Desktopfeature />
          <div className="wrapperContainer">
            <Route path ="/" exact component={Home} />
            <Route path ="/about" render={() => (<About  />)} />
            <Route path ="/contact" render={() => (<Contact />)}/>
            <Route path ="/team" render={() => (<Team />)}/> 
            <Route path ="/custom" render={() => (<Custom />)}/>
        </div>
        <div className="footerContainer">  Hello SnowG 2.0 </div>
      </div>
    );
  }
}

export default App;
