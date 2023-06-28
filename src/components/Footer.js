import React from 'react';
import "./assets/Footer.css";



function Footer() {
  return (
    <div className='footer'>
      <h2>Questions? Call 001-128-458-963</h2>
      <div className='row1'>
        <div className='col'>
            <a href='#'>FAQ</a>
            <a href='#'>Media Centre</a>
            <a href='#'>Ways to Watch</a>
            <a href='#'>Cookie Preferences</a>
            <a href='#'>Speed Test</a>
        </div>        
        <div className='col'>
            <a href='#'>Help Centre</a>
            <a href='#'>Investor Relations</a>
            <a href='#'>Terms of Use</a>
            <a href='#'>Corporate Information</a>
            <a href='#'>Legal Notices</a>
        </div>  
        <div className='col'>
            <a href='#'>Account</a>
            <a href='#'>Jobs</a>
            <a href='#'>Privacy</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Only on Netflix</a>
        </div> 
      </div>
      <button className="btn">English <img src="./images/down-icon.png"/></button>
      <p className='copyights-txt'>Netflix India</p>
    </div>
  );
};

export default Footer;
