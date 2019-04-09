import React from "react"
import Brandlogo from "./brandlogo.jpeg"
// import { Link } from "react-router-dom"

const Navbar  = props => {
return (
        <div className="navbarContainer">
            <nav class="navbar">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="about.html">About</a>
                        <a class="dropdown-item" href="custom.html">Custom Screenprinting</a>
                        <a class="dropdown-item" href="https://snowg.bigcartel.com/" target="_blank" rel="noopener noreferrer">Catalog</a>
                        <a class="dropdown-item" href="contact.html">Contact</a>
                    </div>
                </div>
                    
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/originalsnowg/"><i class="fab fa-instagram"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/originalsnowg/"><i class="fab fa-facebook"></i></a>
                <a class="navbar-brand" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/originalsnowg/">
                    <img src={Brandlogo} width="150" height="85" alt="SnowG Logo" />
                </a>
            </nav>
        </div>
    )


}

export default Navbar