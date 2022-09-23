import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Input from "../components/Input";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import Logo from "../assets/LOGO-10 2.png";
import { useFormik } from "formik";
// import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

const AddNew = () => {
  const [teams, setTeams] = useState();
  const [positions, setPositions] = useState();
  const [teamId, setTeamId] = useState();
  const [positionId, setpositionId] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      team: "",
      position: "",
      mail: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "მინიმუმ 2 სიმბოლო")
        .required("სავალდებულო")
        .matches(/^[ა-ჰ]+$/, "მხოლოდ ქართული სიმბოლოები"),
      lastName: Yup.string()
        .required("სავალდებულო")
        .min(2, "მინიმუმ 2 სიმბოლო")
        .matches(/^[ა-ჰ]+$/, "მხოლოდ ქართული სიმბოლოები"),
      team: Yup.string().required("სავალდებულო"),
      position: Yup.string().required("სავალდებულო"),
      mail: Yup.string()
        .required("სავალდებულო")
        .matches(/.*\@redberry.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით"),
      number: Yup.string()
        .required("სავალდებულო")
        .matches(
          /^(\+?995)?(79\d{7}|5\d{8})$/,
          "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
        ),
    }),
    onSubmit: (values) => {
      const firstInfo = {
        name: formik.values.name,
        surname: formik.values.lastName,
        team_id: teamId,
        position_id: positionId,
        phone_number: formik.values.number,
        email: formik.values.mail,
        token: '2c136363a8c02a83c7955be0864db980'
      };
      console.log(firstInfo);
      localStorage.setItem('data',JSON.stringify(firstInfo))
      navigate('/laptop-data')
    },
  });
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

  const getPositionId = (e) => {
    if (e === "ინტერნი") {
      setpositionId(1);
    } else if (e === "ჯუნიორ დეველოპერი") {
      setpositionId(2);
    } else if (e === "მიდლ დეველოპერი") {
      setpositionId(3);
    } else if (e === "სენიორ დეველოპერი") {
      setpositionId(4);
    } else if (e === "ლიდ დეველოპერი") {
      setpositionId(5);
    } else if (e === "HR სპეციალისტი") {
      setpositionId(6);
    } else if (e === "HR პროექტ მენეჯერი") {
      setpositionId(7);
    } else if (e === "HR ბიზნეს პარტნიორი") {
      setpositionId(8);
    } else if (e === "ჯუნიორ ბიზნეს დეველოპერი") {
      setpositionId(9);
    } else if (e === "ბიზნეს დეველოპერი") {
      setpositionId(10);
    } else if (e === "სენიორ ბიზნეს დეველოპერი") {
      setpositionId(11);
    } else if (e === "ჯუნიორ UI/UX დიზაინერი") {
      setpositionId(12);
    } else if (e === "UI/UX დიზაინერი") {
      setpositionId(13);
    } else if (e === "სენიორ UI/UX დიზაინერი") {
      setpositionId(14);
    } else if (e === "ლიდ UI/UX დიზაინერი") {
      setpositionId(15);
    } else if (e === "ბლოგერი") {
      setpositionId(16);
    } else if (e === "growth მარკეტინგის სპეციალისტი") {
      setpositionId(17);
    } else if (e === "მარკეტინგის თიმ ლიდი") {
      setpositionId(18);
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
      <div className="md:w-3/4 xs:w-11/12 h-[750px] rounded-md bg-white  flex mb-10 justify-center">
        <div className="md:w-3/4 xs:w-full h-full  flex flex-col">
          <form onSubmit={formik.handleSubmit} className="w-full h-full">
            <div className="w-full flex md:flex-row xs:flex-col justify-between mt-14">
              <div className="md:w-[47%] xs:w-full flex flex-col">
                <label
                  style={{ fontFamily: "Helvetica", fontWeight: "bold" }}
                  htmlFor="saxeli"
                  className={formik.errors.name ? "text-red-600" : ""}
                >
                  სახელი
                </label>
                <Input
                  valu={formik.values.name}
                  click={formik.handleChange}
                  idd="name"
                  type={"text"}
                  placeholder="გრიშა"
                  styyle={`w-full h-12 ${
                    formik.errors.name ? "error-input" : ""
                  }`}
                />
                <p
                  className={`text-xs ${
                    formik.errors.name ? "text-red-600" : ""
                  } `}
                >
                  {formik.errors.name}
                </p>
              </div>
              <div className="md:w-[47%] xs:w-full xs:mt-5 md:mt-0">
                <label
                  className={`font-bold ${
                    formik.errors.lastName ? "text-red-600" : ""
                  } `}
                  htmlFor="gvari"
                >
                  გვარი
                </label>
                <Input
                  valu={formik.values.lastName}
                  click={formik.handleChange}
                  idd="lastName"
                  type={"text"}
                  placeholder="ბაგრატიონი"
                  styyle={`w-full h-12 ${
                    formik.errors.lastName ? "error-input" : ""
                  }`}
                />
                <p
                  className={`text-xs ${
                    formik.errors.lastName ? "text-red-600" : ""
                  }`}
                >
                  {formik.errors.lastName}
                </p>
              </div>
            </div>
            <select
              name="team"
              onChangeCapture={formik.handleChange}
              onBlur={formik.handleBlur}
              onChange={setPosition}
              className={`w-full md:h-12 xs:h-12 p-2 rounded-md bg-gray-200 border mt-8 focus:outline-none ${
                formik.errors.team ? "error-select" : ""
              } `}
            >
              <option selected disabled>
                თიმი
              </option>
              {teams?.data.map((team) => (
                <option value={team.name} key={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <select
              name="position"
              onChangeCapture={formik.handleChange}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                getPositionId(e.target.value);
              }}
              className={`w-full border  mb-10 md:h-12 p-2 xs:h-12 rounded-md bg-gray-200 mt-8 focus:outline-none ${
                formik.errors.position ? "error-select" : ""
              } `}
            >
              <option selected disabled>
                პოზიცია
              </option>
              {positions?.data
                .filter((pos) => pos.team_id === teamId)
                .map((position) => (
                  <option value={position.name} key={position.id}>
                    {position.name}
                  </option>
                ))}
            </select>
            <label
              className={`font-bold ${
                formik.errors.mail ? "text-red-600" : ""
              }`}
              htmlFor="mail"
            >
              მეილი
            </label>
            <Input
              idd={"mail"}
              valu={formik.values.mail}
              click={formik.handleChange}
              type={"mail"}
              placeholder="grish666@redberry.ge"
              styyle={`w-full h-12  ${formik.errors.mail ? "error-input" : ""}`}
            />
            <p
              className={`text-xs mb-10 ${
                formik.errors.mail ? "text-red-600" : ""
              }`}
            >
              {formik.errors.mail}
            </p>
            <label
              className={`font-bold ${
                formik.errors.number ? "text-red-600" : ""
              }`}
              htmlFor="mail"
            >
              ტელეფონის ნომერი
            </label>
            <Input
              idd={"number"}
              valu={formik.values.number}
              click={formik.handleChange}
              type={"mail"}
              placeholder="+995 571 17 36 33"
              styyle={`w-full h-12 ${
                formik.errors.number ? "error-input" : ""
              }`}
            />
            <p
              className={`text-xs ${
                formik.errors.number ? "text-red-600" : ""
              }`}
            >
              {formik.errors.number}
            </p>
          </form>
          <div className="w-full flex mt-8  justify-end">
            <Button
              type={"submit"}
              click={formik.handleSubmit}
              title={"შემდეგი"}
              styyle={"w-28 md:mt-0 md:mb-6 xs:mt-4"}
            />
          </div>
        </div>
      </div>
      <img src={Logo} className="md:block xs:hidden" alt="logo" />
    </div>
  );
};

export default AddNew;
