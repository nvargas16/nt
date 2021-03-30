import React from 'react';
import './Nav.css'


function Nav(props){
    return(
        <div>
            <button className= "nav">{props.navname}</button>
        </div>
    )


}
export default Nav;