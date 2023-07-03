import banner from '../../assets/img/bannereimg/myphoto.jpg'
import { useSpring, animated } from 'react-spring';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
   const textAnimation = useSpring({
      from: { opacity: 0, transform: 'translateX(-20px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
      config: { duration: 1000 },
   });

   const imageAnimation = useSpring({
      from: { opacity: 0, transform: 'translateX(-20px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
      config: { duration: 2000, delay: 300 },
   });

   return (
      <div id='about'>
         <h2 className="text-center text-white text-3xl border-y-2 border-yellow-600 w-1/2 mx-auto p-3 my-16">About Me</h2>

         <div className="w-full md:flex">
            <div className=' md:w-2/5 mx-auto'>
               <Fade left>
                  <animated.div style={imageAnimation}>
                     <img className='w-[400px] h-[400px] rounded-full border-8 border-stone-400 mx-auto' src={banner} alt="My Image" />
                  </animated.div>
               </Fade>


               {/* <animated.div style={imageAnimation}>
                  <img className='w-[400px] h-[400px] rounded-full border-8 border-stone-400 mx-auto' src={banner} alt="My Image" />
               </animated.div> */}
            </div>

            <div className='md:w-1/2 m-auto text-justify overflow-hidden mt-6 md:mt-auto'>

               <Fade right>
                  <h1 className="text-white">Hello, This is SM Shakhawat Hosen.
                     Experienced Web Design & Developing. professional with a Bachelor of Computer Science and Engineering focused in Computer Science from Premier University. I always love to play with creative ideas and innovation. it makes me feel good and passionate. To Work in a position where discipline and a high-tech environment will ensure the development and make me more efficient and skillful where I can apply my knowledge and skills for continuous improvement.</h1> <br />
                  <h1 className="text-white">
                     I am familiar with the MERN (MongoDB, Express.js, React, Node.js) stack, which enables me to build robust and scalable web applications. Additionally, I have experience with Firebase for backend-as-a-service functionality, and I am proficient in HTML, CSS, and JavaScript for building engaging and responsive user interfaces.
                     I have also delved into other areas, such as integrating payment systems using Stripe and working with C programming. I have a good understanding of Redux for state management and have explored TypeScript for static typing benefits. Furthermore, I have knowledge of Next.js, a React framework for server-side rendering.
                  </h1>
               </Fade>



            </div>





         </div>
      </div>
   );
};

export default AboutMe;