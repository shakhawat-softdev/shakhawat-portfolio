import banner from '../../assets/img/bannereimg/myphoto.jpg'
import animation from '../../../public/banner.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Typist from 'react-typist';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';
const FirstBanner = () => {

   const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '../../../public/resume.pdf';
      link.download = '/resume.pdf';
      link.click();
   }

   return (
      <div className="w-full flex">

         <div className="w-1/2 text-white  m-auto text-center space-y-3" >
            <Typist>
               <h2 className='text-4xl d-inline-block mb-2'>Hi,
                  <br /> I'm SM Shakhawat Hosen <br /></h2>

               <Typist.Delay ms={500} />
               <h2 className='text-2xl'>Front End Developper....</h2>
            </Typist>

            <button onClick={handleDownload} className="btn btn-secondary btn-sm btn-wide">Get Resume</button>

            <h2>Socila Links</h2>
            <div className='flex justify-center items-center gap-3 text-4xl'>
               <FaLinkedin />
               <FaGithub />
               <FaYoutube />
               <FaFacebook />
            </div>

         </div>

         <div className="w-1/2">
            <Player autoplay loop src={animation} style={{ height: '600px', width: '600px' }} > </Player>
         </div>
      </div>
   );
};

export default FirstBanner;