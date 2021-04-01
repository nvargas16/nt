import React from 'react';
import Card from '../../Components/Card/Card';
import Logo from '../../Components/Logo/Logo';
import Nav from '../../Components/Nav/Nav';
import "./Home.css";
import {Grid} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Media from '../../Components/Media/Media';
import NavBar from '../../Components/NavBar/NavBar';


function Home(){


// use of state
    const [pic, setPic]= React.useState(true);
    const changePic = () => {
        setPic(!pic);

    }

    
    return(
        <Grid container spacing={3}> 
     
            <Logo/>

            <NavBar/>
           
         
           
        <Grid item xs={3} > 
            <Card title= "Natalie" date= "April 16th, 2000" image= "https://media.npr.org/assets/img/2018/07/03/1530302676_3c7718f28fa8937cd187d48a1c0041391_sq-d309616601b272792877d0a2db2a9d6b0dfaf366-s800-c85.jpg" 
            text= "nvachcvsz cvasc zcvas cavc qgcv vzc vacghavsx bjhacvacvnsac cvscvascva cavscavhsch asvcasvccq avcbasvcbs c a" />
        </Grid>
        <Grid item xs={3}>
            <Card title= "Henry" date= "April 1st, 1800" image= "https://cdn.dribbble.com/users/2306843/screenshots/6687800/bb2-01_bb-d_4x.png?compress=1&resize=400x300" 
            text= "vvchfqvcqv svachqcgevq   ghfc avdshqvchgvfchqwcvc  d qwdcqhgcdgqc gcqwgdqfgqwdvagxcwg    fdcq" />
        </Grid>
        <Grid item xs={3}>
            <Card title= "Khalil" date= "April 20th, 1900" image= "https://lh3.googleusercontent.com/proxy/22MwYC-dkS0j55P33dLodYv8UjZo0LAIZUT2D4unhCIQLiaFPfJnKxju_odFj8QtLYbH4UWUTnDQJ7JIQqxnLKGl08FRoaLyY1LluhTWqCL9CYFqJ3M5ASLFQpn9BWpgSU_n0SLrGYrf4xHEZGAe8bw" 
            text= "vvchfqvcqv svachqcgevq   ghfc avdshqvchgvfchqwcvc  d qwdcqhgcdgqc gcqwgdqfgqwdvagxcwg    fdcq" />
        </Grid>

        <Grid item xs={3}>
            <Card title= "Brandon" date= "March 2nd, 1700" image= "https://c.saavncdn.com/740/Sentimiento-Prohibido-Spanish-2018-20180630030957-500x500.jpg" 
            text= "vvchfqhgvfchqwcvc  dheloooooooooooooooooooooooooooooooooooooooogcdgqc gcqwgdqfgqwdvagxcwg    fdcq" />
        </Grid>


        <Grid>
            <button className= "buttonOne"  onClick = {() => setPic(!pic) } >  
                Click Me
            </button> 
            </Grid>

        {
            pic &&
            <Media artist= "Bad Bunny" song= "Dakiti" album= "https://media.pitchfork.com/photos/5fc9015ac61c34a7841b1eb3/1:1/w_320/EL%20U%CC%81LTIMO%20TOUR%20DEL%20MUNDO_Bad%20Bunny%20.jpg" />

        }
     
        </Grid>

    )
}

export default Home;


