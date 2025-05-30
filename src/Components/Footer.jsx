import React from 'react'
import { FaChevronRight, FaXTwitter } from "react-icons/fa6";
import '../Styles/Footer.css'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaArrowUp } from "react-icons/fa"; // FontAwesome

function Footer() {
  return (
    <div className='Footer-container'>
 <div className='foooter-Links'>
    <h4>Family of singers</h4>
    <ul>
        <li> <FaChevronRight className='icon'/>HOME</li>
        <li><FaChevronRight  className='icon'/>ABOUT US</li>
        <li><FaChevronRight  className='icon'/>EVENTS</li>
        <li><FaChevronRight  className='icon'/>COMISSION</li>
        <li><FaChevronRight  className='icon'/>SUPPORT US</li>
        <li><FaChevronRight  className='icon'/>OUR SCHEDULE</li>
    </ul>
 </div>
  <div className='footer-contact'>
    <h4>Contact</h4>
    <ul>
        <li><FaLocationDot className='icon-contact'/>123 Street,Kigali,Rwanda</li>
        <li><FaPhone className='icon-contact'/>+250 788 587 194(pres)</li>
        <li><FaPhone className='icon-contact'/>+250 788461410(V.pres)</li>
        <li><span className='icon-contact'> <FaEnvelope/></span>info@fos.rw</li>
    </ul>
  </div>

  <div className='footer-socials'>

   <div className='socials'><FaFacebookF/></div>
   <div className='socials'><FaYoutube/></div>
   <div className='socials'><FaInstagram/></div>
   <div className='socials'><FaXTwitter/></div>
  </div>
        
<div className='copyright'> <p>© <span className='underline'>Family of Singers</span>, All Rights Reserved</p>



</div>

    </div>
  )
}

export default Footer