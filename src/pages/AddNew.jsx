import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Input from "../components/Input";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import Button from '../components/Button'
import Logo from '../assets/LOGO-10 2.png'

const AddNew = () => {
  const [teams, setTeams] = useState();
  const [positions, setPositions] = useState();
  const [teamId, setTeamId] = useState();
  useEffect(() => {


    // ჯგუფების ჩამონათვალი
    axios
      .get("https://pcfy.redberryinternship.ge/api/teams")
      .then((response) => {
        const teams = response.data;
        setTeams(teams);
      });

    //   პოზიციების ჩამონათვალი
    axios
      .get("https://pcfy.redberryinternship.ge/api/positions")
      .then((response) => {
        const positions = response.data;
        setPositions(positions);
      });
  }, []);

//   ჯგუფის შესაბამისი პოზიციების ჩამონათვალი
  const setPosition = (e) => {
    console.log(e.target.value);
    if (e.target.value === "დეველოპერი") {
      setTeamId(1);
    } else if (e.target.value === "HR") {
      setTeamId(2);
    } else if (e.target.value === "გაყიდვები") {
      setTeamId(3);
    } else if (e.target.value === "დიზაინი") {
      setTeamId(4);
    } else {
      setTeamId(5);
    }
  };

  return (
    <div className="flex items-center flex-col bg-slate-50 h-[900px]">
      <div className=" flex md:mt-8 p-3 w-full h-20">
        <Link to={"/"}>
          <div className="w-10 h-10  bg-gray-400 rounded-full flex justify-center items-center">
            <AiOutlineLeft className="w-5 h-5" />
          </div>
        </Link>
        <div className="md:flex m-auto">
          <p
            style={{ fontFamily: "Helvetica" }}
            className="md:border-b-black mx-3 font-extrabold  md:border-b-2 h-8"
          >
            თანამშრომლის ინფო
          </p>
          <p
            style={{ fontFamily: "Helvetica" }}
            className="mx-3 h-8 md:block font-extrabold xs:hidden"
          >
            ლეპტოპის მახასიათებლები
          </p>
          <p className="md:hidden flex justify-center  m-0 p-0">1/2</p>
        </div>
      </div>
      <div className="w-3/4 h-[650px] rounded-md bg-white  flex mb-10 justify-center">
        <div className="w-3/4 h-full  flex flex-col">
          <form className="w-full h-full">
            <div className="w-full flex justify-between mt-14">
              <div className="w-[47%] flex flex-col">
                <label style={{ fontFamily: "Helvetica" }} htmlFor="saxeli">
                  სახელი
                </label>
                <Input
                  type={"text"}
                  placeholder="გრიშა"
                  styyle={"w-full h-12"}
                />
                <p className="text-xs">მინიმუმ 2 სიმბოლო, ქართული ასოები </p>
              </div>
              <div className="w-[47%]">
                <label htmlFor="gvari">გვარი</label>
                <Input
                  type={"text"}
                  placeholder="ბაგრატიონი"
                  styyle="w-full h-12"
                />
                <p className="text-xs">მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
              </div>
            </div>
            <select
              onChange={setPosition}
              className="w-full h-10 rounded-md bg-gray-200 mt-8 focus:outline-none"
            >
              <option disabled selected>
                თიმი
              </option>
              {teams?.data.map((team) => (
                <option key={team.id}>{team.name}</option>
              ))}
            </select>
            <select className="w-full mb-10 h-10 rounded-md bg-gray-200 mt-8 focus:outline-none">
              <option selected disabled>
                პოზიცია
              </option>
              {positions?.data
                .filter((pos) => pos.team_id === teamId)
                .map((position) => (
                  <option key={position.id}>{position.name}</option>
                ))}
            </select>
            <label htmlFor="mail">მეილი</label>
            <Input
              type={"mail"}
              placeholder="grish666@redberry.ge"
              styyle={"w-full h-12 "}
            />
            <p className="text-xs mb-10">უნდა მთავრდებოდეს @redberry.ge-ით</p>
            <label htmlFor="mail">ტელეფონის ნომერი</label>
            <Input
              type={"mail"}
              placeholder="+995 571 17 36 33"
              styyle={"w-full h-12 "}
            />
            <p className="text-xs">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
          <div className="w-full flex mt-8  justify-end">
            <Button title={'შემდეგი'} styyle={'w-28'} />
         </div>
          </form>
        </div>
      </div>
      <img src={Logo} alt="logo" />
    </div>
  );
};

export default AddNew;
