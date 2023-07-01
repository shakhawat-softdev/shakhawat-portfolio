import { Link } from 'react-router-dom';
import project1 from '../../assets/img/projects/project1.png'
import project2 from '../../assets/img/projects/project2.png'
import project3 from '../../assets/img/projects/project3.png'
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';

const MyProjects = () => {
   return (
      <div id='projects '>
         <h2 className="text-center text-white text-3xl border-y-2 border-yellow-600 w-1/2 mx-auto p-3 my-16">My Projects</h2>

         {/* Project No-1 */}
         <div className='flex gap-2 justify-center items-center '>
            <div className="card w-96 h-[500px] glass rounded-md">
               <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                  <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                     <img src={project1} alt="" className="w-full object-cover object-top rounded-lg" />
                  </div>
               </div>

               <div className="card-body">
                  <h2 className="card-title text-white">LexiLearn</h2>
                  <p className='text-white'>The Project summer camp school focuses on foreign language learning</p>
                  <div className='space-x-2'>
                     <Link to={"https://lexi-learn-66370.web.app/"}><button className="btn btn-success btn-xs">Live Site</button></Link>
                     <Link to={"https://github.com/syedarafatcse/lexi-learn-client"}><button className="btn btn-success btn-xs"> <FaGithub /> Client Side</button></Link>
                     <Link to={"https://github.com/syedarafatcse/lexi-learn-server"}><button className="btn btn-success btn-xs"> <FaGithub /> Server Side</button></Link>
                  </div>
                  <div className="card-actions">
                     <Link to={'/project1'}>
                        <button className="btn btn-secondary btn-wide btn-sm">More Details</button>
                     </Link>
                  </div>
               </div>
            </div>

            {/* Project No-2 */}
            <div className="card w-96 h-[500px] glass rounded-md">
               <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                  <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                     <img src={project2} alt="" className="w-full object-cover object-top rounded-lg" />
                  </div>
               </div>

               <div className="card-body">
                  <h2 className="card-title text-white">ToyKingDom</h2>
                  <p className='text-white'>A variety of Toy & Dolls Shop.</p>
                  <div className='space-x-2'>
                     <Link to={"https://toy-marketplace-client-s-60275.web.app/"}><button className="btn btn-success btn-xs">Live Site</button></Link>
                     <Link to={"https://github.com/syedarafatcse/toy-marketplace-client"}><button className="btn btn-success btn-xs"> <FaGithub /> Client Side</button></Link>
                     <Link to={"https://github.com/syedarafatcse/-toy-marketplace-server"}><button className="btn btn-success btn-xs"> <FaGithub /> Server Side</button></Link>
                  </div>
                  <Link to={'/project2'}>
                     <button className="btn btn-secondary btn-wide btn-sm">More Details</button>
                  </Link>
               </div>
            </div>

            {/* Project No-3 */}
            <div className="card w-96 h-[500px] glass rounded-md">
               <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                  <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                     <img src={project3} alt="" className="w-full object-cover object-top rounded-lg" />
                  </div>
               </div>

               <div className="card-body">
                  <h2 className="card-title text-white">Chef Master</h2>
                  <p className='text-white'>Vast collection of delectable dishes from around the country.</p>
                  <div className='space-x-2'>
                     <Link to={"https://chef-recipe-hunter-clien-ef342.web.app/"}><button className="btn btn-success btn-xs">Live Site</button></Link>
                     <Link to={"https://github.com/syedarafatcse/chef-recipe-hunter-client"}><button className="btn btn-success btn-xs"><FaGithub /> Client Side</button></Link>
                     <Link to={"https://github.com/syedarafatcse/chef-recipe-hunter-server"}><button className="btn btn-success btn-xs"><FaGithub /> Server Side</button></Link>
                  </div>
                  <Link to={'/project3'}>
                     <button className="btn btn-secondary btn-wide btn-sm">More Details</button>
                  </Link>
               </div>
            </div>

         </div>
      </div>
   );
};

export default MyProjects;