import React from 'react'
import Box from '@mui/material/Box';
import logo3 from "../Assets/human-brain.png";
import logo4 from "../Assets/medical-file.png";
import logo2 from "../Assets/lungs.png";
import logo1 from "../Assets/tooth.png";

const ServiceBoxes = ({logo , description }) => 
   <div> 
<div className = 'boxes'> 
{logo == 'logo1' ? <img src={logo1} alt={logo + "img"}/> : logo == 'logo2' ? <div style={{background : "blue" , width : '260px', height : '370px', display:'flex' , justifyContent : 'center', alignItems:'center' , borderRadius : "15px" }}><img src={logo2} style={{background : "blue" }} alt={logo + "img"}/></div> : logo == 'logo3' ? <img src={logo3} alt={logo + "img"}/> : <img src={logo4} alt={logo + "img"}/>}
{logo == 'logo2' ? <h2 style={{position : 'absolute' , background : 'blue' , color : 'white' , bottom : '30px'}} >{description}</h2> : <h2 >{description}</h2>}


</div>

<logo/>
</div> 

export default ServiceBoxes;
