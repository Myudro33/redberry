import React from "react";
import frame from '../assets/Frame.png'


const Success = () => {
  return <div className="w-full bg-[#4A4A4A] flex justify-center items-center h-screen">
<div className="md:w-1/2 rounded-md md:h-1/2 bg-white">
  <img src={frame} alt="" />
  <p>ჩანაწერი დამატებულია</p>

</div>
</div>;
};

export default Success;
