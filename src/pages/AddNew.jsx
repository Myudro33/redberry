import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Input from "../components/Input";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import Logo from "../assets/LOGO-10 2.png";

const AddNew = () => {
  const [teams, setTeams] = useState();
  const [positions, setPositions] = useState();
  const [teamId, setTeamId] = useState();
  const [firstP, setFirstP] = useState("მინიმუმ 2 სიმბოლო, ქართული ასოები");
  const [firstLabel, setfirstLabel] = useState("");
  const [firstInput, setfirstInput] = useState("");
  const [secondP, setsecondP] = useState("მინიმუმ 2 სიმბოლო, ქართული ასოები");
  const [secondLabel, setsecondLabel] = useState("");
  const [secondInput, setsecondInput] = useState("");
  const [select, setselect] = useState(false);
  const [select2, setselect2] = useState(false);
  const [selectStyle, setselectStyle] = useState("");
  const [selectStyle2, setselectStyle2] = useState("");
  const [emailText, setemailText] = useState("");
  const [emailTextStyle, setemailTextStyle] = useState("");
  const [mobileEmailStyle, setmobileEmailStyle] = useState("");
  const inp = useRef();
  const inp2 = useRef();
  const firstSelect = useRef();
  const mobileEmail = useRef();

  console.log(mobileEmail);

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

  const submitForm = () => {
    const georgianRegex = /^[ა-ჰ]+$/;
    const georgianNumberRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;
    if (inp.current?.value.length < 2) {
      setFirstP("მინიმუმ 2 სიმბოლო");
      setfirstLabel("text-red-500");
      setfirstInput(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!inp.current?.value.match(georgianRegex)) {
      setFirstP("გამოიყენე ქართული ასოები");
      setfirstLabel("text-red-500");
      setfirstInput(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (inp2.current?.value.length < 2) {
      setsecondP("მინიმუმ 2 სიმბოლო");
      setsecondLabel("text-red-500");
      setsecondInput(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!inp2.current?.value.match(georgianRegex)) {
      setsecondP("გამოიყენე ქართული ასოები");
      setsecondLabel("text-red-500");
      setsecondInput(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!select) {
      setselectStyle("border-red-500");
    } else if (!select2) {
      setselectStyle2("border-red-500");
    } else if (!emailText.endsWith("@redberry.ge")) {
      setemailTextStyle(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!mobileEmail.current?.value.match(georgianNumberRegex)) {
      setmobileEmailStyle(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    }
    else{
      window.location='/laptop-data'
    }
  };

  //   ჯგუფის შესაბამისი პოზიციების ჩამონათვალი
  const setPosition = (e) => {
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
    if (
      e.target.value === "დეველოპერი" ||
      e.target.value === "HR" ||
      e.target.value === "გაყიდვები" ||
      e.target.value === "დიზაინი" ||
      e.target.value === "მარკეტინგი"
    ) {
      setselect(true);
    } else {
      setselect(false);
    }
  };

  return (
    <div className="flex items-center flex-col bg-slate-50 h-[900px]">
      <div className=" flex md:mt-8 p-3 xs:items-center xs:p-0 w-full h-20">
        <Link to={"/"}>
          <div className="w-10 h-10 md:ml-4   md:bg-gray-400 xs:bg-white rounded-full flex justify-center items-center">
            <AiOutlineLeft className="w-5 h-5" />
          </div>
        </Link>
        <div className="md:flex md:m-auto xs:ml-14">
          <p
            style={{ fontFamily: "Helvetica" }}
            className="md:border-b-black mx-4 font-extrabold  md:border-b-2 h-8"
          >
            თანამშრომლის ინფო
          </p>
          <p
            style={{ fontFamily: "Helvetica" }}
            className="mx-6 h-8 md:block font-extrabold xs:hidden"
          >
            ლეპტოპის მახასიათებლები
          </p>
          <p className="md:hidden flex justify-center  m-0 p-0">1/2</p>
        </div>
      </div>
      <div className="md:w-3/4 xs:w-11/12 h-[650px] rounded-md bg-white  flex mb-10 justify-center">
        <div className="md:w-3/4 xs:w-full h-full  flex flex-col">
          <form className="w-full h-full">
            <div className="w-full flex md:flex-row xs:flex-col justify-between mt-14">
              <div className="md:w-[47%] xs:w-full flex flex-col">
                <label
                  style={{ fontFamily: "Helvetica", fontWeight: "bold" }}
                  className={`${firstLabel}`}
                  htmlFor="saxeli"
                >
                  სახელი
                </label>
                <Input
                  connect={inp}
                  type={"text"}
                  placeholder="გრიშა"
                  styyle={`w-full h-12 ${firstInput}`}
                />
                <p className={`text-xs ${firstInput}`}>{firstP}</p>
              </div>
              <div className="md:w-[47%] xs:w-full xs:mt-5 md:mt-0">
                <label className={`font-bold ${secondLabel}`} htmlFor="gvari">
                  გვარი
                </label>
                <Input
                  connect={inp2}
                  type={"text"}
                  placeholder="ბაგრატიონი"
                  styyle={`w-full h-12 ${secondInput}`}
                />
                <p className={`text-xs ${secondInput}`}>{secondP}</p>
              </div>
            </div>
            <select
              onChange={setPosition}
              className={`w-full md:h-10 xs:h-12 p-2 rounded-md bg-gray-200 border mt-8 focus:outline-none ${selectStyle}`}
            >
              <option ref={firstSelect} disabled selected>
                თიმი
              </option>
              {teams?.data.map((team) => (
                <option key={team.id}>{team.name}</option>
              ))}
            </select>
            <select
              onChange={() => {
                setselect2(true);
              }}
              className={`w-full border  mb-10 md:h-10 p-2 xs:h-12 rounded-md bg-gray-200 mt-8 focus:outline-none ${selectStyle2}`}
            >
              <option selected disabled>
                პოზიცია
              </option>
              {positions?.data
                .filter((pos) => pos.team_id === teamId)
                .map((position) => (
                  <option key={position.id}>{position.name}</option>
                ))}
            </select>
            <label className={`font-bold ${emailTextStyle}`} htmlFor="mail">
              მეილი
            </label>
            <Input
              click={(e) => {
                setemailText(e.target.value);
              }}
              type={"mail"}
              placeholder="grish666@redberry.ge"
              styyle={`w-full h-12 ${emailTextStyle} `}
            />
            <p className={`text-xs mb-10 ${emailTextStyle}`}>
              უნდა მთავრდებოდეს @redberry.ge-ით
            </p>
            <label className={`font-bold ${mobileEmailStyle}`} htmlFor="mail">
              ტელეფონის ნომერი
            </label>
            <Input
              connect={mobileEmail}
              type={"mail"}
              placeholder="+995 571 17 36 33"
              styyle={`w-full h-12 ${mobileEmailStyle}`}
            />
            <p className={`text-xs ${mobileEmailStyle}`}>
              უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
            </p>
          </form>
          <div className="w-full flex mt-8  justify-end">
            <Button
              click={submitForm}
              title={"შემდეგი"}
              styyle={"w-28 md:mt-0 xs:mt-4"}
            />
          </div>
        </div>
      </div>
      <img src={Logo} className="md:block xs:hidden" alt="logo" />
    </div>
  );
};

export default AddNew;
