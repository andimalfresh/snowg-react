import React from "react"
// import { Link } from "react-router-dom"

const Custom  = props => {
return (
        <div className="componentContainer">
            CUSTOM SCREEN PRINTING INFORMATION AND PAGE ! 
            <div className="formDiv">
                <form className="contactForm" method="POST" action="https://formspree.io/wandrewpedersen@gmail.com">
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="number" placeholder="Phone Number" />
                    <input type="email" name="email" placeholder="Your email" />
                    <select>
                        <option className="dropDown" defaultValue disabled selected>Select A Product.</option>
                        <option>Shirt</option>
                        <option>Hat</option>
                        <option>Sweatshirt</option>
                        <option>Hoodie</option>
                        <option>Fannypack</option>
                        <option>Handbag</option>
                    </select>
                    <textarea name="message" placeholder="Product details/questions" />
                    <button type="submit">Send Test</button>
                </form>
            </div>
        </div>
    )


}

export default Custom 