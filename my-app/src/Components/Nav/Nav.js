import React from 'react';
import './Nav.css';
import Logo from '../Logo/Logo';


function Nav(){
    return(
        <div>
            <ul >
                <li className= "list-nav">
                    <Logo/>
                </li>
                <div className= "navbar">
                
                    <li className= "list-nav">
                        <div className= "button">Home</div>
                    </li>
                    <li className= "list-nav"> 
                        <div className= "button">About</div>
                    </li>
                    <li className= "list-nav">
                        <div className= "button">Projects</div>
                    </li>
                    <li className= "list-nav">
                        <div className= "button">Contact</div>
                    </li>   

                </div>
    
            </ul>
            
        </div>
    )


}
export default Nav;