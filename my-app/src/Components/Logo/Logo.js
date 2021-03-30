import React from 'react';
import badbunny from '../../pics/badbunny.jpg';
import './Logo.css';

function Logo(){
    return(
        <div>
            <img src= {badbunny} className= "logo" alt= "logo"/>
        </div>
    )
}

export default Logo;