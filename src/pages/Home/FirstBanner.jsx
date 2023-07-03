import banner from '../../assets/img/bannereimg/myphoto.jpg'
import animation from '../../../public/banner.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Typist from 'react-typist';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link } from 'react-router-dom';
const FirstBanner = () => {

   // const handleDownload = () => {
   //    const link = document.createElement('a');w-80 md:w-96
   //    link.href = '../../../public/resume.pdf';
   //    link.download = '/resume.pdf';
   //    link.click();
   // }

   return (
      <div className="w-full md:flex m-auto">

         <div id='resume' className="w-1/2 text-white m-auto text-center space-y-3 mb-10 md:mb-auto" >
            <h2 className='text-2xl md:text-4xl d-inline-block mb-2 hidden md:contents'>Hi,
               <br /> I'm SM Shakhawat Hosen <br /></h2>

            <h2 className='text-xl mb-2 md:hidden'>Hi, <br /> I'm SM Shakhawat Hosen </h2>

            <Rotate bottom right>
               <TypeAnimation
                  sequence={[

                     'React Developer',
                     1000,
                     'MERN Stack Developer',
                     1000,
                     'Full Stack Developer',
                     1000,
                     'Front End Developer',
                     1000

                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                  repeat={Infinity}
               />
            </Rotate>


            <br />
            {/* <button onClick={handleDownload} className="btn btn-secondary btn-sm btn-wide">Get Resume</button> */}

            <Link to={'https://drive.google.com/file/d/123kMyVaPKuyxBwP_6BN6KquKZOXtu9iH/view?usp=drive_link'}><button className=" btn btn-secondary btn-sm md:btn-wide mb-10 md:mb-auto">Get Resume</button>
            </Link>

            {/* <Link to={'https://drive.google.com/drive/folders/1ik6NzE9m3rcf6Y1UWpuoeN0Q_gvfcArs'}><a className='mx-auto' href='../../../public/resume.pdf' download={'resume.pdf'} target='_blank'><button className=" btn btn-secondary btn-sm  mb-10 md:mb-auto">Download Resume</button></a></Link> */}

            <h2 className='text-center mb-10 md:mb-2'>Socila Links</h2>
            <div className='flex justify-center items-center gap-3 text-4xl'>
               <LightSpeed bottom>
                  <Link to={"https://www.linkedin.com/in/sm-shakhawat-hosen-851b46241/"}><FaLinkedin /></Link>
                  <Link to={'https://github.com/syedarafatcse'}><FaGithub /></Link>
                  <Link to={'https://www.facebook.com/'}><FaFacebook /></Link>
               </LightSpeed>

            </div>

         </div>

         <div className="w-1/2 mx-auto">
            <div className='w-full md:w-[600px] '>
               <Player autoplay loop src={animation}  > </Player>
            </div>
         </div>
      </div>
   );
};

export default FirstBanner;