import project1 from '../../assets/img/projects/singleProject/project1.png'

const Project1 = () => {
   return (
      <div className=' bg-blue-950 text-white '>
         <h2 className='text-5xl text-center underline mb-16'>Project Details</h2>

         <div className="flex gap-5">
            <div className="w-1/2">
               <img src={project1} alt="Shoes" className="rounded-md" />
            </div>

            <div className="w-1/2 space-y-2">
               <h2 className="card-title ">Name: <span className='text-lg'>LexiLearn</span></h2>
               <p>The Project summer camp school focuses on foreign language learning</p>
               <h2 className='text-start text-lg'>Key Features: </h2>
               <ul>
                  <li>• Three-layer dashboard for student, instructor and admin with user friendly UI</li>
                  <li>• Student can payment their courses fee, instructor can add course and admin can give the user status, approve or deny class and monitor all the site activities.</li>
                  <li>• API is much secure though JWT and axios interceptor, unauthorize server request is forbidden. </li>
               </ul>
               <h2 className="card-title ">Details Information</h2>
               <ul>
                  <li>• The Project is innovative online platform brings together passionate instructors and eager learners, providing a vibrant and immersive environment for exploring foreign languages. Step into the world of LexiLearn and discover the key to unlocking new cultures, expanding your communication skills, and connecting with people from around the globe.</li> <br />

                  <li>• The Project summer camp school focuses exclusively on foreign language learning, offering an extensive selection of languages to choose from. With a team of dedicated and experienced instructors, we provide classes in Spanish, French, German, Chinese, Japanese, Russian, and many more.</li> <br />

                  <li>• Comprehensive Language Selection: LexiLearn offers a wide range of languages to choose from, including Spanish, French, German, Chinese, Japanese, Russian, and more. Students have the opportunity to explore their desired language and immerse themselves in its culture.</li> <br />

                  <li>• User-Friendly Dashboard: Our intuitive and user-friendly dashboard provides a seamless experience for students, instructors, and admins. Easy navigation allows users to access their classes, manage bookings, and track progress effortlessly. </li> <br />

                  <li>• Booking Management: Students can easily view and manage their class bookings through a dedicated section on the website. They can track upcoming classes, review past sessions, and seamlessly make payments with a click of a button.</li> <br />

                  <li>• Admin Dashboard: The admin dashboard empowers administrators to efficiently manage the platform. They can approve or deny class requests from instructors, provide feedback on submissions, and oversee the overall operation of the website. *User Management: Admins have full control over user management, allowing them to assign roles to users. They can grant instructor or admin privileges, ensuring that qualified individuals can contribute to the platform's growth and development. </li>
                  <li> </li>
               </ul>
               <h2 className="card-title ">*Used packages/ technology name:</h2>

               *Stripe: For Payment Method <br />
               *tanstack: Quick Data fetch and refetch <br />
               *axios: For data secure and manage user <br />
               *firebase: For authentication *framer-motion: For beatutiful component and image animation <br />*react-hook-form: For form validations.

            </div>

         </div>
      </div>
   );
};

export default Project1;