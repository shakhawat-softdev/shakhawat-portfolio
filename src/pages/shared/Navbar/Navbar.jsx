import profilepic from '../../../assets/img/bannereimg/myphoto.jpg'

const Navbar = () => {
   const navItems = <ul className="menu menu-horizontal px-1 text-lg text-white">
      <li className='hover:bg-cyan-700 rounded-lg'><a href='/'>Home</a></li>
      <li className='hover:bg-cyan-700 rounded-lg'><a href="#about">About Me</a></li>
      <li className='hover:bg-cyan-700 rounded-lg'><a href="#resume">Resume</a></li>
      <li className='hover:bg-cyan-700 rounded-lg'><a href="#skills">Skills</a></li>
      <li className='hover:bg-cyan-700 rounded-lg'><a href="#projects">Projects</a></li>
   </ul>



   return (
      <div className="navbar bg-cyan-950">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li>
                     <a>Parent</a>
                     <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                     </ul>
                  </li>
                  <li><a>Item 3</a></li>
               </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl text-white">SM Shakhawat </a>
         </div>


         <div className="navbar-center hidden lg:flex">
            {navItems}

         </div>


         <div className="w-10 ">
            <img src={profilepic} className='rounded-full' />
         </div>
      </div>
   );
};

export default Navbar;