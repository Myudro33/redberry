import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
    console.log(props.name);
  return (
    <div class="flex font-sans bg-[#AED1EA] border h-36 border-[#72bef4] p-2 md:m-2 xs:my-3 rounded-xl md:w-[48%] xs:w-full">
      <div class="flex-none w-48 relative">
        <img
          src={`https://pcfy.redberryinternship.ge/${props.image}`}
          alt=""
          class="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </div>
      <form class="flex-auto p-2">
        <div class="flex flex-wrap">
          <h2 class="flex-auto text-md  text-slate-900">{props.userName} {props.surname}</h2>
          <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Pentium II
          </div>
        </div>
        <Link to={`/list/laptops/${props.id}`} class="text-sm underline text-[#4386A9]">
          მეტის ნახვა
        </Link>
      </form>
    </div>
  );
};

export default Card;
