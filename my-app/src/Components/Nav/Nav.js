import React from 'react';
import './Nav.css'


function Nav(props){
    return(
        <div>
            <button style={{display : 'inline-block'}} id= "hi" className= "nav">{props.navname}</button>
        </div>
    )


}
export default Nav;