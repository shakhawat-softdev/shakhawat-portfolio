import contractImg1 from '../../assets/img/contract/5138237.jpg'
import contact1 from '../../../public/contract.json'
import { Player } from '@lottiefiles/react-lottie-player';

const Contract = () => {
   return (
      <div id='contact mx-auto'>
         <h2 className="text-center text-white text-3xl border-y-2 border-yellow-600 w-1/2 mx-auto p-3 my-16">Contact With Me</h2>
         <div className="w-full flex flex-row-reverse justify-center ">

            <div className="form-control w-1/2 ">
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
               <button className="btn btn-wide">Submit</button>
            </div>

            <div className="w-1/2">

               <Player autoplay loop src={contact1} style={{ height: '500px', width: '500px' }} > </Player>
            </div>
         </div>
      </div>
   );
};

export default Contract;