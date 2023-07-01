import project2 from '../../assets/img/projects/singleProject/project2.png'

const Project2 = () => {
   return (
      <div className=' bg-blue-950 text-white '>
         <h2 className='text-5xl text-center underline mb-16'>Project Details</h2>

         <div className="flex gap-5">
            <div className="w-1/2">
               <img src={project2} alt="Shoes" className="rounded-md" />
            </div>

            <div className="w-1/2 space-y-2">
               <h2 className="card-title ">Name: <span className='text-lg'>Toy KingDom</span></h2>
               <p>A variety of Toy & Dolls Shop</p>
               <h2 className='text-start text-lg'>Key Features: </h2>
               <ul>
                  <li>• Design and developed a database system to manage toy inventory, enabling to add, update and deletion</li>
                  <li>• Integrate a comprehensive search functionality to find specific toys based on price.</li>
                  <li>• Develop advance filtering system that’s why user can easily refine toy search based on specific criteria.</li>
               </ul>
               <h2 className="card-title ">Details Information</h2>
               <ul>
                  <li>•This Project is for toy shop or market</li> <br />

                  <li>• This Project is based on MONGODB, EXPRESS JS, REACT and NODE JS which is called MERN Stack.</li> <br />

                  <li>• For Authenntication I used Firebase Authentication, like Email password and google login.</li> <br />

                  <li>• In this project i have used Node MongoDB CURD operations for getting data from Database.</li> <br />

                  <li>• In Home page i have displayed data in six section in ine section i have used React Tab.</li> <br />

                  <li>• Logged user can access "all Toys" page a user can see all the product of the user added this website, un logged user is redirected to Login page. </li>
                  <li>•Finally i have done the website according to the Project requirements. </li>


               </ul>


            </div>

         </div>
      </div>
   );
};

export default Project2;