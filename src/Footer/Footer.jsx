import React from 'react'
import "./footer.css"

import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>

            <div className="logo-fx-email">
            <h1 className="logo">
                SIMPLETONES&trade;
            </h1> 

            <p className="email-greet">{/*user?.email*/}</p>
            </div>
            

            
                
            <div className="phone">
                <p className="contact-us">Contact Us</p>
                <div className="numbers">
                    <a href="tel:+263 77 123 1234">+263 77 123 1234</a>
                    <a href="tel:+263 77 123 1234">+263 77 123 1234</a> 
                </div>
               
            </div>
            <div className="soc-email">
                <FaInstagram className='soc-icons inst'/>
                <FaFacebookF className='soc-icons facebook' />
              
                <FaTwitter className='soc-icons twitter'/>
            </div>
                    
                <h1 className='copy'>COPYWRITE <Link to='/nicolesdash'>&copy;</Link>  2021 SIMPLETONES&trade; </h1>
                
           
        </div>
    )
}

export default Footer
