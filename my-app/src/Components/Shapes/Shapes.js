import React, { Component } from 'react';
import './Shapes.css';
import badbunny from '../../pics/badbunny.jpg';

export default function Shapes(){
    return(
        <div>
 
          

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 680" className= "abstract"> 
          <defs>
            <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                <image href= {badbunny} height= "1" width= "1" preserveAspectRatio="xMidYMid slice"   />
            </pattern>
        </defs>
  
        <path fill="url(#pattern1)" fillOpacity="1" 
        d="M
        0,0
        L950,0
        L850,100
        L950,290
        L800,450
        L950,550
        L850,750
        L0,950
        Z">

        </path>  
        </svg>










        
          
     
        </div>
    )
}