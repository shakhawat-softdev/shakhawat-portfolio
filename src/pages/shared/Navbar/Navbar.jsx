import { Link, useLocation } from 'react-router-dom';
import profilepic from '../../../assets/img/bannereimg/myphoto.jpg';

const Navbar = () => {
   const location = useLocation();
   console.log(location.pathname);





   const navItems = <ul className="menu menu-horizontal px-1 text-lg text-white">


      {(location.pathname === "/project1" || location.pathname === "/project2" || location.pathname === "/project3") ? <>
         <Link to={'/'}><li className='hover:bg-cyan-700 rounded-lg'><a >Home</a></li></Link>
      </> :
         <>
            <Link to={'/'}><li className='hover:bg-cyan-700 rounded-lg'><a >Home</a></li></Link>
            <li className='hover:bg-cyan-700 rounded-lg'><a href="#about">About Me</a></li>
            <li className='hover:bg-cyan-700 rounded-lg'><a href='../../../public/resume.pdf' target='_blank'>Resume</a></li>
            <li className='hover:bg-cyan-700 rounded-lg'><a href="#skills">Skills</a></li>
            <li className='hover:bg-cyan-700 rounded-lg'><a href="#projects">Projects</a></li>
         </>}


   </ul>



   return (
      <div className="navbar bg-cyan-950">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
               </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl text-white">SM Shakhawat </a>
         </div>


         <div className="navbar-center hidden lg:flex">
            {navItems}

            <div className="w-10 h-10 ">
               <img src={profilepic} className='rounded-full' />
            </div>

         </div>



      </div>
   );
};

export default Navbar;