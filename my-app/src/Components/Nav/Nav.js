import React from 'react';
import './Nav.css';
import Logo from '../Logo/Logo';
import {
    Link
  } from "react-router-dom";


function Nav(){
    return(
        <div>
            <ul >
                <li className= "list-nav">
                    <Link to= "/"><Logo/></Link>
                </li>
                <div className= "navbar">

                
                    
                    <li className= "list-nav">
                        <Link to= "/" className= "hello"><div className= "button">Home</div></Link>
                        
                    </li>
                    <li className= "list-nav">
                        <Link to= "/About" className= "hello"><div className= "button">About</div></Link>
                    </li>
                    <li className= "list-nav">
                        <Link to= "/Projects" className= "hello"><div className= "button">Projects</div></Link>
                    </li>
                    <li className= "list-nav">
                        <Link to= "/Contact" className= "hello"><div className= "button">Contact</div></Link>
                    </li>   

                </div>
    
            </ul>
            
        </div>
    )


}
export default Nav;