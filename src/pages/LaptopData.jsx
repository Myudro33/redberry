import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "../assets/LOGO-10 2.png";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import "../App.css";
import Vector from "../assets/Vector.png";

const LaptopData = () => {
  const file = useRef();
  const [brands, setbrands] = useState();
  const [cpus, setcpus] = useState();
  const [photo, setPhoto] = useState("");
  const [photoStyle, setphotoStyle] = useState();
  const [photoText, setphotoText] = useState("text-[#62A1EB]");
  const [laptopNameStyle, setlaptopNameStyle] = useState("text-gray-500");
  const [laptopBrand, setlaptopBrand] = useState(false);
  const [laptopBrandStyle, setlaptopBrandStyle] = useState("");
  const [cpu, setCpu] = useState(false);
  const [cpuStyle, setcpuStyle] = useState("");
  const [cpuBirtvi, setcpuBirtvi] = useState("text-gray-500");
  const [cpuNakadi, setcpuNakadi] = useState("text-gray-500");
  const [ramStyle, setramStyle] = useState("text-gray-500");
  const [storageStyle, setstorageStyle] = useState(false);
  const [storageSty, setstorageSty] = useState("");
  const [dateStyle, setdateStyle] = useState("");
  const [priceStyle, setpriceStyle] = useState("text-gray-500");
  const [condition, setcondition] = useState(false)
  const [conditionText, setconditionText] = useState('')

  const laptopName = useRef();
  const cpuRef = useRef();
  const cpuNakadiRef = useRef();
  const ramRef = useRef();
  const dateRef = useRef();
  const priceRef = useRef();
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

  const submitHandler = () => {
    const regex = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;
    const numbersRegex = /^[0-9]*$/;

    if (photo === "") {
      setphotoStyle("border-red-400 bg-red-100");
      setphotoText("text-red-500");
    } else if (
      laptopName.current.value === "" &&
      !laptopName.current.value.match(regex)
    ) {
      setlaptopNameStyle(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!laptopBrand) {
      setlaptopBrandStyle("border-red-500");
    } else if (!cpu) {
      setcpuStyle("border-red-500");
    } else if (cpuRef?.current.value === "") {
      setcpuBirtvi(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!cpuRef.current.value.match(numbersRegex)) {
      setcpuBirtvi(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!cpuNakadiRef.current.value.match(numbersRegex)) {
      setcpuNakadi(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (cpuNakadiRef.current.value === "") {
      setcpuNakadi(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!ramRef.current.value.match(numbersRegex)) {
      setramStyle(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (ramRef.current.value === "") {
      setramStyle(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!storageStyle) {
      setstorageSty("text-red-500");
    } else if (dateRef.current.value === "") {
      setdateStyle("text-red-500 border-red-500");
    } else if (priceRef.current.value === "") {
      setpriceStyle(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    } else if (!priceRef.current.value.match(numbersRegex)) {
      setpriceStyle(
        "focus:outline-red-500 focus:border-red-500 border-red-500 text-red-500"
      );
    }else if(!condition){
         setconditionText('text-red-500')
    }else{
      window.location='/success'
    }
  };
  const handleChange = () => {
    file.current.click();
  };
  const getPhoto = (e) => {
    setPhoto(e.target.files[0]);
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
            className=" mx-4 font-extrabold   h-8 md:block xs:hidden"
          >
            თანამშრომლის ინფო
          </p>
          <p
            style={{ fontFamily: "Helvetica" }}
            className="mx-6 h-8 md:border-b-black md:block font-extrabold md:border-b-2 xs:border-b-0  xs:m-0 xs:mt-4 md:mt-0"
          >
            ლეპტოპის მახასიათებლები
          </p>
          <p className="md:hidden flex justify-center  m-0 p-0">2/2</p>
        </div>
      </div>
      <div className="md:w-3/4 xs:w-11/12 md:h-[1350px] xs:h-[1500px] rounded-md bg-white  flex mb-10 justify-center">
        <div className="md:w-3/4 xs:w-full h-full   flex flex-col">
          <div className="w-full h-full">
            <div
              onClick={handleChange}
              className={`w-full flex cursor-pointer flex-col justify-center items-center md:h-[350px] xs:h-72 mt-10 border-[3px] 
              border-[#62A1EB]
              ${photoStyle}
               border-dashed rounded-xl`}
            >
              <input
                onChange={getPhoto}
                type="file"
                hidden
                ref={file}
                name=""
                id=""
              />
              <p className={`text-center ${photoText}  xs:hidden md:block`}>
                ჩააგდე ან ატვირთე <br />
                ლეპტოპის ფოტო
              </p>
              <Button
                title={"ატვირთე"}
                styyle={"w-40 mt-12 md:block xs:hidden"}
              />
              <img className="md:hidden xs:block" src={Vector} alt="vector" />
              <p
                className={`md:hidden ${photoText} xs:block text-center  xs:mt-4`}
              >
                ლეპტოპის ფოტოს <br />
                ატვირთვა
              </p>
            </div>
            <div className="w-full md:h-48 xs:h-52   md:border-b-2 xs:border-b-4  border-b-gray-300 flex xs:flex-col md:flex-row md:justify-between xs:justify-around items-center">
              <label
                htmlFor="inp"
                className={`md:w-[45%] xs:w-full ${laptopNameStyle}`}
              >
                ლეპტოპის სახელი
                <Input
                  connect={laptopName}
                  type={"text"}
                  placeholder="HP"
                  styyle={`w-full xs:h-14 md:h-11 ${laptopNameStyle}`}
                />
                <p className={`text-xs ${laptopNameStyle}`}>
                  ლათინური ასოები, ციფრები, !@#$%^&*()_+=
                </p>
              </label>
              <select
                onChange={() => setlaptopBrand(true)}
                className={`md:w-[45%] xs:w-full bg-gray-200 md:h-11 xs:h-14 ${laptopBrandStyle} mt-2 border-2 p-2  rounded-md  focus:outline-none`}
              >
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

            <div className="w-full flex md:flex-row xs:flex-col md:h-40 xs:h-80 md:mt-0 xs:mt-4 items-center xs:justify-between justify-between">
              <select
                onChange={() => setCpu(true)}
                name=""
                id=""
                className={`md:h-11 xs:h-14 md:w-[30%] xs:w-full mt-2 bg-gray-200  border-[2px] p-2 ${cpuStyle}  rounded-md  focus:outline-none `}
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
              <label
                htmlFor=""
                className={`md:w-[30%] xs:w-full  ${cpuBirtvi}`}
              >
                CPU-ს ბირთვი
                <Input
                  connect={cpuRef}
                  placeholder={"14"}
                  styyle={`w-full md:h-11 xs:h-14 ${cpuBirtvi}`}
                  type="text"
                />
                <p className={`text-xs ${cpuBirtvi}`}>მხოლოდ ციფრები</p>
              </label>
              <label htmlFor="" className={`md:w-[30%] xs:w-full ${cpuNakadi}`}>
                CPU-ს ნაკადი
                <Input
                  connect={cpuNakadiRef}
                  placeholder={"365"}
                  styyle={`w-full md:h-11 xs:h-14 ${cpuNakadi}`}
                  type="text"
                />
                <p className={`text-xs ${cpuNakadi}`}>მხოლოდ ციფრები</p>
              </label>
            </div>
            <div className="w-full h-48  md:border-b-2 xs:border-b-4 md:my-0 xs:my-6 border-b-gray-300 flex md:flex-row xs:flex-col justify-between items-center">
              <label htmlFor="" className={`md:w-[45%] xs:w-full ${ramStyle}`}>
                ლეპტოპის RAM(GB)
                <Input
                  connect={ramRef}
                  placeholder={"365"}
                  styyle={`w-full md:h-11 xs:h-14 ${ramStyle}`}
                  type="text"
                />
                <p className={`text-xs ${ramStyle}`}>მხოლოდ ციფრები</p>
              </label>
              <div className="md:w-[45%] xs:w-full ">
                <h6 className={storageSty}>მეხსიერების ტიპი</h6>
                <label className="font-light">
                  <input
                    onClick={() => setstorageStyle(true)}
                    className="my-5 mr-2 scale-125"
                    type="radio"
                    name="type"
                    id=""
                  />
                  SSD
                </label>
                <label className="font-light">
                  <input
                    onClick={() => setstorageStyle(true)}
                    type="radio"
                    className="my-5 scale-125 outline-[#62A1EB] ml-8 mr-2"
                    name="type"
                    id=""
                  />
                  HDD
                </label>
              </div>
            </div>
            <div className="w-full h-48 flex md:flex-row xs:flex-col justify-between items-center">
              <label htmlFor="" className={`md:w-[45%] xs:w-full ${dateStyle}`}>
                შეძენის რიცხვი
                <Input
                  connect={dateRef}
                  type={"date"}
                  styyle={`w-full text-gray-400 md:h-11 xs:h-14 ${dateStyle}`}
                />
              </label>
              <label
                htmlFor=""
                className={`md:w-[45%] xs:w-full mt-4 ${priceStyle}`}
              >
                ლეპტოპის ფასი
                <Input
                  connect={priceRef}
                  type={"text"}
                  placeholder="0000"
                  styyle={`w-full md:h-11 xs:h-14  ${priceStyle}`}
                />
                <p
                  className={`relative bottom-8 md:left-[355px] xs:left-0 xs:ml-[330px] md:ml-0 text-gray-500 m-0 p-0`}
                >
                  ₾
                </p>
                <p className={`text-xs mt-[-20px] ${priceStyle}`}>
                  მხოლოდ ციფრები
                </p>
              </label>
            </div>
            <div className="md:w-[45%] xs:w-full mt-6">
              <h6 className={conditionText}>ლეპტოპის მდგომარეობა</h6>
              <label className="font-light">
                <input
                onClick={()=>setcondition(true)}
                  className="my-5 mr-2 scale-125"
                  type="radio"
                  name="condition"
                  id=""
                />
                ახალი
              </label>
              <label className="font-light">
                <input
                onClick={()=>setcondition(true)}
                  type="radio"
                  className="my-5 scale-125 outline-[#62A1EB] ml-8 mr-2"
                  name="condition"
                  id=""
                />
                მეორადი
              </label>
            </div>
            <div className="flex justify-between items-center mt-10">
              <a className="text-[#62A1EB]" href="/add-new">
                უკან
              </a>
              <Button
                click={submitHandler}
                styyle={"w-44 h-12"}
                title={"დამახსოვრება"}
              />
            </div>
          </div>
        </div>
      </div>
      <img src={Logo} className="md:block xs:hidden" alt="logo" />
    </div>
  );
};

export default LaptopData;
