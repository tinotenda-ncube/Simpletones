import React, { useState } from 'react';
import {AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase'
import './header.css';

const Header = () => {
    const [{basket,user}, dispatch]=useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    const [openNav, setopenNav] = useState(false)
    return (
        <div className='nav-wrapper'>
            <nav>

                <div className="logo-container">
                    <Link to ='/'>
                        <h1 className="logo">
                            SIMPLETONES&trade;
                        </h1>
                    </Link>
                </div>

                <div className="children">

                        <div className="navigation" id={openNav?'hidden':''} >
                            <Link to ='/'>
                                <li className="nav-list" onClick={()=>setopenNav(!openNav)}><a>HOME</a></li>
                            </Link>
                            <Link to = '/mens'>
                                <li className="nav-list"onClick={()=>setopenNav(!openNav)}><a >MENS</a></li>
                            </Link>
                            <Link to = '/womens'>
                                <li className="nav-list"onClick={()=>setopenNav(!openNav)}><a>WOMEN</a></li>
                            </Link>
                            <Link to ='/checkout'>
                                    <li className="nav-list nav-checkout"onClick={()=>setopenNav(!openNav)}><a href="#">CHECKOUT<span className="nav-count">0</span></a></li>
                            </Link> 
                                <li className="nav-list"onClick={()=>setopenNav(!openNav)}><a href="#">ABOUT</a></li>
                            <Link to= {!user && "/login"}>            
                                <div onClick={handleAuthentication} className="header_option sign-in">
                                     <p className="optionline2">{user?"SIGN OUT": 'SIGN IN'}</p>
                                </div>
                            </Link>
                        </div>
            
                        <Link className='checkout-link-a' to='/checkout'>
                            <div className="header_optionBasket">                    
                            <AiOutlineShopping/>
                                <span className="optionline2 basket-count">{basket?.length}</span>                    
                            </div>
                        </Link>
                    


                    <div className="burger" id={openNav?'x-out':''} onClick={()=>setopenNav(!openNav)} >
                        <div className="line ln1"></div>
                        <div className="line ln2"></div>
                        
                    </div>
                   
                </div>
            </nav>
        </div>
    )
}

export default Header
