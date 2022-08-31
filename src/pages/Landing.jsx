import React from "react";
import Logo from "../assets/LOGO-02 1.png";
import Group from "../assets/Group 1.png";
import GroupMobile from '../assets/Group-mobile.png'
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <img className="mt-12" src={Logo} alt="logo" />
      <img className="mt-20 xs:hidden md:block" src={Group} alt="group" />
      <img className="xs:block md:hidden h-96   mt-28 w-3/4 " src={GroupMobile} alt="group-mobile" />
      <Link to={"/add-new"}>
        <Button styyle={"md:mt-24 xs:mt-28 md:text-base m-5 xs:w-80 xs:h-14 md:h-10 md:w-72 xs:text-xl"} title={"ჩანაწერის დამატება"} />
      </Link>
      <Link to={'/list'}>
        <Button title={"ჩანაწერების სია"} styyle={"md:w-72 md:text-base md:h-10 xs:w-80 xs:h-14 xs:text-xl"} />
      </Link>
    </div>
  );
};

export default Landing;
