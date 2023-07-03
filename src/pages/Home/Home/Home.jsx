
import FirstBanner from '../FirstBanner';
import AboutMe from '../AboutMe';
import Contract from '../Contract';
import MyProjects from '../MyProjects';
import MySkills from '../MySkills';

const Home = () => {
   return (
      <div className='bg-blue-950 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8'>
         <FirstBanner />
         <AboutMe />
         <MySkills />
         <MyProjects />
         <Contract />
      </div>
   );
};

export default Home;