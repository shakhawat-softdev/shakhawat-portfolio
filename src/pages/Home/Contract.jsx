
import contact1 from '../../../public/contract.json'
import { Player } from '@lottiefiles/react-lottie-player';

const Contract = () => {
   return (
      <div id='contact mx-auto'>
         <h2 className="text-center text-white text-3xl border-y-2 border-yellow-600 w-1/2 mx-auto  md:p-3 my-16 ">Contact With Me</h2>
         <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-center items-center">
            <div className="form-control md:w-1/2">
               <label className="label">
                  <span className="label-text text-white">Your Name</span>
               </label>
               <label className="input-group">
                  <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
               </label>
               <label className="label">
                  <span className="label-text text-white">Your Email</span>
               </label>
               <label className="input-group">
                  <input type="text" placeholder="info@site.com" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="label">
                  <span className="label-text text-white">Your Message</span>
                  <span className="label-text-alt">Alt label</span>
               </label>
               <textarea className="textarea textarea-bordered textarea-md w-full max-w-xs" placeholder="Message"></textarea>
               <label className="label">
                  <span className="label-text-alt">Your bio</span>
                  <span className="label-text-alt">Alt label</span>
               </label>
               <button className="btn btn-secondary btn-wide">Submit</button>
            </div>

            <div className="md:w-1/2">
               <Player className='w-80 md:w-[500px] md:h-[500px]' autoplay loop src={contact1}> </Player>
            </div>
         </div>
      </div>
   );
};

export default Contract;