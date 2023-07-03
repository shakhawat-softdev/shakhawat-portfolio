import html from '../../../src/assets/img/skills/html.png'
import css from '../../../src/assets/img/skills/css.png'
import bootstrap from '../../../src/assets/img/skills/bootstrap.png'
import javaScript from '../../../src/assets/img/skills/js.png'
import firebse from '../../../src/assets/img/skills/firebse.png'
import react from '../../../src/assets/img/skills/react.png'
import Node from '../../../src/assets/img/skills/nodejs.png'
import mongoDB from '../../../src/assets/img/skills/mongoDB.png'
import tailwind from '../../../src/assets/img/skills/tailwind.png'
import express from '../../../src/assets/img/skills/express.png'
import git from '../../../src/assets/img/skills/git.png'
import vercel from '../../../src/assets/img/skills/vercel.png'

import Slide from 'react-reveal/Slide';

const MySkills = () => {
   return (
      <div id='skills' className=''>
         <h2 className="text-center text-white text-3xl border-y-2 border-yellow-600 w-1/2 mx-auto p-3 my-16">Technical Skills</h2>

         <div className='md:w-[800px] grid grid-cols-2 md:grid-cols-6 gap-3 place-items-center mx-auto'>

            <Slide right>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={html} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">HTML</h2>
               </div>
            </Slide>
            <Slide right>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={css} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">CSS</h2>
               </div>
            </Slide>

            <Slide right>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={bootstrap} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Bootstrap</h2>
               </div>
            </Slide>
            <Slide right>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={tailwind} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Tailwind</h2>
               </div>
            </Slide>

            <Slide right>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={javaScript} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Java Script</h2>
               </div>
            </Slide>
            <Slide left>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={firebse} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Firebase</h2>
               </div>
            </Slide>
            <Slide left>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={react} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">React JS</h2>
               </div>
            </Slide>

            <Slide left>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={Node} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Node JS</h2>
               </div>
            </Slide>
            <Slide left>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={express} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Express JS</h2>
               </div>
            </Slide>

            <Slide left>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={mongoDB} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">MongoDB</h2>
               </div>
            </Slide>
            <Slide left>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={git} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Git</h2>
               </div>
            </Slide>
            <Slide left>
               <div className="card w-32 bg-primary hover:bg-secondary  text-primary-content rounded-md">
                  <figure className="p-5">
                     <img src={vercel} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="card-title mx-auto mb-4">Vercel</h2>
               </div>
            </Slide>

         </div>
      </div>
   );
};

export default MySkills;