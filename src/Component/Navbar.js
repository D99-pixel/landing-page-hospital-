import React from 'react'
import logo from "../Assets/logo.svg";
import ServiceBoxes from './ServiceBoxes';
import logodocm from '../Assets/doc-women.png';
import logodocm1 from '../Assets/doc-men.png';
import logodocm2 from '../Assets/ambu.png';
import l1 from '../Assets/Facebook.png';
import l2 from '../Assets/Google.png';
import l3 from '../Assets/Twitter.png';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
const Navbar = () => {
  return (
    
      <div className='navbox'>
        <div className='home-links'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">News</a>
       <button className='navbutton'>Contact</button>
       <div className="nav-logo">
       <img src={logo} alt="" /></div>
       </div>
       <div className='texts'>
          <p className='text'>
            <h5>Welcome to MediCare+ Clinic</h5>
          </p>
          <p className='text1'>
         <h1> Best Specialists</h1>
          </p>
          <p className='text2'>We are on the leading edge of cancer care. Providing the full <br /> <br />continuum of cancer treatments and supportive care services in a <br /><br />single convenient location.</p>
          <div>     
      <button className='button1'>Make an Appointment</button>
      <button className='button2'> Departments</button>
      </div>
       </div >
         <div className='box1'>
         
          </div> 
          <div className='texth'>
Our Services
</div> 
     <div className='text4'>
     We provide the most full medical services, so every person could <br />heave the oppurtunity to receive qualitative medical help.
      </div>
      <div className='service'>
<ServiceBoxes logo = "logo1" description = "Dental Care"/>
<ServiceBoxes logo = "logo2" description = "Pulmonary"  />
<ServiceBoxes logo = "logo3" description = "Neurological"/>
<ServiceBoxes logo = "logo4" description = "Prediatrics"/>
</div>
<div className='text11'>
Clinic With Innovative
</div>
<div className='text12'>
We provide the most full medical services, so every person could <br /> heave the oppurtunity to receive qualitative medical help.
</div>
<button className='learnbutton'>LearnMore</button>
<div className='drwmen'>
  <img src={logodocm} style={{background:"rgba(255, 255, 255, 1)"}} alt='' />
</div>
<div className='docwbox'> Qualified Doctors</div>
<div className='drmen'>
  <img src={logodocm1} style={{background:"rgba(255, 255, 255, 1)"}} alt='' />
</div>
<div className='docmbox'> Emergency Care</div>

<div className='drmen1'>
  <img src={logodocm2} style={{background:"rgba(255, 255, 255, 1)"}} alt='' />
</div>
<div className='docmbox1'> 24 Hours Service</div>
<div className='text10'>We Have The Best Specialist</div>
<div className='text20'>We have a wide experience in experience design and strategy, <br /> with locally-rooted knowledge.</div>
<div className='row1'>
<div class="row">
  <div class="column1">
   
  </div>
  <div class="column2">
    <h2 ><br/>Dr. Awaatif Al</h2><br/><br/><br/> <br/><text className='t2'>Dental Care</text>
    
    </div>
  </div>

  <div class="row">
  <div class="column1">
   
  </div>
  <div class="column2">
    <h2 ><br/>Dr. Filipa Gaspar</h2><br/><br/><br/> <br/><text className='t2'>Cardiology</text>
    </div>
 
    </div>
    <div class="row">
  <div class="column1">
   
  </div>
  <div class="column2">
    <h2 ><br/>Dr. Sukhmeet Gorae</h2><br/><br/><br/> <br/><text className='t2'>Neurological</text>
    </div>
 
    </div>
    <div class="row">
  <div class="column1">
   
  </div>
  <div class="column2">
    <h2 ><br/>Dr. Siri Jakobsson</h2><br/><br/><br/> <br/><text className='t2'>Prediatrics</text>
    </div>
 
    </div>
</div>
<div className='text101'>
What Our Customers Say
</div>
<div className='note'>
  <div className='nt1'>
    
  I wanted to thanks everyone at this facility for the<br/> quality of care and compassion they showed during <br/>my stay.<br/><br/><br/><h3>Jacqueline Asong</h3><br/>Patient

     </div>
     <div className='nt1'>
    
  I wanted to thanks everyone at this facility for the<br/> quality of care and compassion they showed during <br/>my stay.<br/><br/><br/><h3>Patrícia Ribeiro</h3><br/>Patient

     </div>
</div>
<div className='st'>
<h2 className='h2h'> Subscribe to Newsletter</h2>
<h6 className='h6h'>We have a wide experience in experience design and strategy,</h6>
<form className='form'>
<input className='email' type="email" placeholder="Enter your email address" />
<button  className="butt" type="submit">Send Now</button>
</form>
    </div>
    <div className='footer'>
      <img src={l1}  alt="" />
      <img src={l2}  alt="" />
      <img src={l3}  alt="" />
    </div>
    <div className='ft'>
    ©2023 - 011BQ 
    </div>
      </div>
     
    
  )
}

export default Navbar
