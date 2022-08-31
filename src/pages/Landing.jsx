import React from "react";
import Logo from "../assets/LOGO-02 1.png";
import Group from "../assets/Group 1.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <img className="mt-12" src={Logo} alt="logo" />
      <img className="mt-20" src={Group} alt="group" />
      <Link to={"/add-new"}>
        <Button styyle={"mt-24 m-5 w-72"} title={"ჩანაწერის დამატება"} />
      </Link>
      <Link to={"/list"}>
        <Button title={"ჩანაწერების სია"} styyle={"w-72"} />
      </Link>
    </div>
  );
};

export default Landing;
