import React from "react";
import frame from '../assets/Frame.png'
import Button from "../components/Button";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

const Success = () => {
   
    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };
    
    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });



  return <div className="w-full bg-[#4A4A4A] flex justify-center items-center h-screen">
<div className="md:w-1/2 xs:w-full xs:h-full md:rounded-md md:h-1/2 bg-white flex flex-col items-center xs:justify-center">
  <img src={frame} alt="frame" className="md:h-44 xs:h-72" />
  <p className="text-center xs:text-2xl md:text-base">ჩანაწერი <br className="md:hidden"/> დამატებულია!</p>
<Link to={'/list'}>
<Button title={'სიაში გადაყვანა'} styyle='md:w-44 xs:w-72 xs:h-14 md:h-11 xs:text-xl md:text-base md:mt-10 xs:mt-44' />
</Link>
<a className="md:mt-5 xs:mt-20 xs:text-xl md:text-base text-[#62A1EB]" href="/">მთავარი</a>

</div>
</div>;
};

export default Success;
