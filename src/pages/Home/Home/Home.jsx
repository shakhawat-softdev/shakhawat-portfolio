
import AboutMe from '../AboutMe';
import Contract from '../Contract';
import FirstBanner from '../FirstBanner';
import MyProjects from '../MyProjects';
import MySkills from '../MySkills';

const Home = () => {
   return (
      <div className='bg-blue-950'>
         <FirstBanner />
         <AboutMe />
         <MySkills />
         <MyProjects />
         <Contract />
      </div>
   );
};

export default Home;