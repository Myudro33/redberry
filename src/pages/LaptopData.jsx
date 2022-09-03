import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "../assets/LOGO-10 2.png";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import "../App.css";

const LaptopData = () => {
  const file = useRef();
  const date = useRef();
  const [brands, setbrands] = useState();
  const [cpus, setcpus] = useState();
  const [alo, setalo] = useState(false);

  useEffect(() => {
    // cpus
    axios
      .get("https://pcfy.redberryinternship.ge/api/cpus")
      .then((response) => {
        const cpus = response.data;

        setcpus(cpus.data);
      });

    // brands
    axios
      .get("https://pcfy.redberryinternship.ge/api/brands")
      .then((response) => {
        const brands = response.data;
        setbrands(brands);
      });
  }, []);
  const handleChange = () => {
    console.log(file);
    file.current.click();
  };

  const getPhoto = (e) => {
    console.log(e.target.files[0].name);
  };

  return (
    <div className="flex items-center flex-col bg-slate-50">
      <div className=" flex md:mt-8 p-3 xs:items-center xs:p-0 w-full h-20">
        <Link to={"/add-new"}>
          <div className="w-10 h-10 md:ml-4   md:bg-gray-400 xs:bg-white rounded-full flex justify-center items-center">
            <AiOutlineLeft className="w-5 h-5" />
          </div>
        </Link>
        <div className="md:flex md:m-auto xs:ml-14">
          <p
            style={{ fontFamily: "Helvetica" }}
            className=" mx-4 font-extrabold   h-8"
          >
            თანამშრომლის ინფო
          </p>
          <p
            style={{ fontFamily: "Helvetica" }}
            className="mx-6 h-8 md:border-b-black md:block font-extrabold md:border-b-2 xs:hidden"
          >
            ლეპტოპის მახასიათებლები
          </p>
          <p className="md:hidden flex justify-center  m-0 p-0">1/2</p>
        </div>
      </div>
      <div className="md:w-3/4 xs:w-11/12 h-[1350px] rounded-md bg-white  flex mb-10 justify-center">
        <div className="md:w-3/4 xs:w-full h-full   flex flex-col">
          <div className="w-full h-full">
            <div
              onClick={handleChange}
              className="w-full flex cursor-pointer flex-col justify-center items-center md:h-[350px] mt-10 border-[3px]  border-[#62A1EB] border-dashed rounded-xl"
            >
              <input
                onChange={getPhoto}
                type="file"
                hidden
                ref={file}
                name=""
                id=""
              />
              <p className="text-center text-[#62A1EB]">
                ჩააგდე ან ატვირთე <br />
                ლეპტოპის ფოტო
              </p>
              <Button title={"ატვირთე"} styyle={"w-40 mt-12"} />
            </div>

            <div className="w-full h-48  border-b-2  border-b-gray-300 flex justify-between items-center">
              <label htmlFor="inp" className={`w-[45%]`}>
                ლეპტოპის სახელი
                <Input type={"text"} placeholder="HP" styyle={"w-full"} />
                <p className={`text-xs text-gray-500`}>
                  ლათინური ასოები, ციფრები, !@#$%^&*()_+=
                </p>
              </label>
              <select className="w-[45%] h-11 bg-gray-200 mt-2 border-[2px] p-2  rounded-md focus:border-none border-none focus:outline-none">
                <option selected disabled value="ლეპტოპის ბრენდი">
                  ლეპტოპის ბრენდი
                </option>
                {brands?.data.map((brand) => (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full flex h-40 items-center justify-between">
              <select
                name=""
                id=""
                className="h-11 w-[30%] mt-2 bg-gray-200  border-[2px] p-2  rounded-md focus:border-none border-none focus:outline-none"
              >
                <option disabled selected value="CPU">
                  CPU
                </option>
                {cpus?.map((cpu) => (
                  <option key={cpu.id} value={cpu.name}>
                    {cpu.name}
                  </option>
                ))}
              </select>
              <label htmlFor="" className="w-[30%]">
                CPU-ს ბირთვი
                <Input placeholder={"14"} styyle={"w-full"} type="text" />
                <p className="text-xs text-gray-500">მხოლოდ ციფრები</p>
              </label>
              <label htmlFor="" className="w-[30%]">
                CPU-ს ნაკადი
                <Input placeholder={"365"} styyle={"w-full"} type="text" />
                <p className="text-xs text-gray-500">მხოლოდ ციფრები</p>
              </label>
            </div>
            <div className="w-full h-48  border-b-2  border-b-gray-300 flex justify-between items-center">
              <label htmlFor="" className="w-[45%]">
                ლეპტოპის RAM(GB)
                <Input placeholder={"365"} styyle={"w-full"} type="text" />
                <p className="text-xs text-gray-500">მხოლოდ ციფრები</p>
              </label>
              <div className="w-[45%] ">
                <h6>მეხსიერების ტიპი</h6>
                <label className="font-light">
                  <input
                    className="my-5 mr-2 scale-125"
                    type="radio"
                    name="type"
                    id=""
                  />
                  SSD
                </label>
                <label className="font-light">
                  <input
                    type="radio"
                    className="my-5 scale-125 outline-[#62A1EB] ml-8 mr-2"
                    name="type"
                    id=""
                  />
                  HDD
                </label>
              </div>
            </div>
            <div className="w-full h-48 flex justify-between items-center">
              <label htmlFor="" className="w-[45%]">
                შეძენის რიცხვი
                <Input type={"date"} styyle="w-full text-gray-400" />
              </label>
              <label htmlFor="" className="w-[45%] mt-2">
                ლეპტოპის ფასი
                <Input type={"text"} placeholder="0000" styyle="w-full" />
                <p className="text-xs text-gray-400">მხოლოდ ციფრები</p>
              </label>
            </div>
            <div className="w-[45%] mt-6">
              <h6>ლეპტოპის მდგომარეობა</h6>
              <label className="font-light">
                <input
                  className="my-5 mr-2 scale-125"
                  type="radio"
                  name="condition"
                  id=""
                />
                ახალი
              </label>
              <label className="font-light">
                <input
                  type="radio"
                  className="my-5 scale-125 outline-[#62A1EB] ml-8 mr-2"
                  name="condition"
                  id=""
                />
                მეორადი
              </label>
            </div>
          <div className="flex justify-between items-center mt-10">
            <a className="text-[#62A1EB]" href="/add-new">უკან</a>
            <Button styyle={'w-44 h-12'} title={'დამახსოვრება'} />
          </div>
          </div>
        </div>
      </div>
      <img src={Logo} className="md:block xs:hidden" alt="logo" />
    </div>
  );
};

export default LaptopData;
