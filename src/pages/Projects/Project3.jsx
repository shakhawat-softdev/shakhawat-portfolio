
import project3 from '../../assets/img/projects/singleProject/project3.png'
const Project3 = () => {
   return (
      <div className=' bg-blue-950 text-white '>
         <h2 className='text-5xl text-center underline mb-16'>Project Details</h2>

         <div className="flex gap-5">
            <div className="w-1/2">
               <img src={project3} alt="Shoes" className="rounded-md" />
            </div>

            <div className="w-1/2 space-y-2">
               <h2 className="card-title ">Name: <span className='text-lg'>Chef Master</span></h2>
               <p>The website stands out for its vast collection of delectable dishes from around the country.</p>
               <h2 className='text-start text-lg'>Key Features: </h2>
               <ul>
                  <li>• User Can find all the popular chef of his country and their best recipe</li>
                  <li>• New user can easily login though social media through GitHub and Google.</li>
                  <li>• Utilize React components and state management to build dynamic recipe catalog displaying recipe.</li>
               </ul>
               <h2 className="card-title ">Details Information</h2>
               <ul>
                  <li>• This project is about a resturent & chef related project where i implement some important method.</li> <br />

                  <li>• In this project i used React Library and Tailwind CSS.</li> <br />

                  <li>• First i have created a setup router thorough React Router DOM and i also created another Router for Protect Route because of unregistered user not to see some of page in this website.</li> <br />

                  <li>• For authentication i have used google Firebase authentication.</li> <br />

                  <li>• I used Email password authentication and also gmail & github authentication.</li> <br />

                  <li>• For backend data and api purpose i used express.js </li>
                  <li>• For the website i created fake data through CHAT GPT and image collect from free resource. </li>
                  <li>• In this website There is multiple page i have created l.e Home, Details, Login, Register and Blog. The chef details page is protect by private route, only authorize user will be see this page.</li>
                  <li>• For icon i have user hero-icon</li>

               </ul>


            </div>

         </div>
      </div>
   );
};

export default Project3;