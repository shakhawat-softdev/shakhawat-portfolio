import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
   return (
      <footer className="footer footer-center p-10 bg-cyan-950 text-base-content ">
         <div className="grid grid-flow-col gap-4 text-white">
            <a href='#about' className="link link-hover">Abou me</a>
            <a href='#resume' className="link link-hover">Resume</a>
            <a href='#projects' className="link link-hover">Projects</a>


            <a className="link link-hover">Press kit</a>
         </div>
         <div>
            <div className="grid grid-flow-col text-white gap-4 text-lg">
               <Link to={"https://www.linkedin.com/in/sm-shakhawat-hosen-851b46241/"}><FaLinkedin /></Link>
               <Link to={'https://github.com/syedarafatcse'}><FaGithub /></Link>
               <Link to={'https://www.facebook.com/'}><FaFacebook /></Link>
            </div>
         </div>
         <div>
            <p className='text-white'>Copyright © 2023 - All right reserved by SM Shakhawat Hosen</p>
         </div>
      </footer>
   );
};

export default Footer;