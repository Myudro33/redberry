import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";
import "../App.css";

const LaptopInfo = () => {
  const [data, setdata] = useState([]);
  const [team, setteam] = useState();
  const [brand, setbrand] = useState();
  const [position, setposition] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=143d7d8b4901d87eb92e44547c358bad`
      )
      .then((response) => setdata(response.data.data))
      .catch((error) => error);
    
  }, [id]);
  
  const getTeam = () => {
    if (data?.user?.team_id === 1) {
      setteam("დეველოპერი");
    } else if (data?.user?.team_id === 2) {
      setteam("HR");
    } else if (data?.user?.team_id === 3) {
      setteam("გაყიდვები");
    } else if (data?.user?.team_id === 4) {
      setteam("დიზაინი");
    } else if (data?.user?.team_id === 5) {
      setteam("მარკეტინგი");
    }
  };

  const getPosition = () => {
    if (data?.user?.position_id === 1) {
      setposition("ინტერნი");
    } else if (data?.user?.position_id === 2) {
      setposition("ჯუნიორ დეველოპერი");
    } else if (data?.user?.position_id === 3) {
      setposition("მიდლ დეველოპერი");
    } else if (data?.user?.position_id === 4) {
      setposition("სენიორ დეველოპერი");
    } else if (data?.user?.position_id === 5) {
      setposition("ლიდ დეველოპერი");
    } else if (data?.user?.position_id === 6) {
      setposition("HR სპეციალისტი");
    } else if (data?.user?.position_id === 7) {
      setposition("HR პროექტ მენეჯერი");
    } else if (data?.user?.position_id === 8) {
      setposition("HR ბიზნეს პარტნიორი");
    } else if (data?.user?.position_id === 9) {
      setposition("ჯუნიორ ბიზნეს დეველოპერი");
    } else if (data?.user?.position_id === 10) {
      setposition("ბიზნეს დეველოპერი");
    } else if (data?.user?.position_id === 11) {
      setposition("სენიორ ბიზნეს დეველოპერი");
    } else if (data?.user?.position_id === 12) {
      setposition("ჯუნიორ UI/UX დიზაინერი");
    } else if (data?.user?.position_id === 13) {
      setposition("UI/UX დიზაინერი");
    } else if (data?.user?.position_id === 14) {
      setposition("სენიორ UI/UX დიზაინერი");
    } else if (data?.user?.position_id === 15) {
      setposition("ლიდ UI/UX დიზაინერი");
    } else if (data?.user?.position_id === 16) {
      setposition("ბლოგერი");
    } else if (data?.user?.position_id === 17) {
      setposition("growth მარკეტინგის სპეციალისტი");
    } else if (data?.user?.position_id === 18) {
      setposition("მარკეტინგის თიმ ლიდი");
    }
  };
  const getBrand = () => {
    if (data?.laptop?.brand_id === 1) {
      setbrand("HP");
    } else if (data?.laptop?.brand_id === 2) {
      setbrand("Deli");
    } else if (data?.laptop?.brand_id === 3) {
      setbrand("Microsoft");
    } else if (data?.laptop?.brand_id === 4) {
      setbrand("Apple");
    } else if (data?.laptop?.brand_id === 5) {
      setbrand("Lenovo");
    } else {
      setbrand("Acer");
    }
  };
  useEffect(()=>{
    getTeam();
    getPosition();
    getBrand();
  },[data])
  return (
    <div className="w-full">
      <div className="flex items-center">
        <Link to={"/list"}>
          <div className="w-10 h-10 md:ml-4 xs:mt-3   md:bg-gray-400 xs:bg-white rounded-full flex justify-center items-center">
            <AiOutlineLeft className="w-5 h-5" />
          </div>
        </Link>
        <h1 className="inline m-auto mt-4 md:text-2xl xs:text-xl">
          ლეპტოპის ინფო
        </h1>
      </div>
      {data.length !== 0 ? (
        <div className="md:w-3/4 xs:w-full m-auto mt-10 flex flex-col md:p-0 xs:p-4">
          <div className="w-full md:h-80 xs:h-80 flex md:flex-row xs:flex-col">
            <div className="md:w-1/2 xs:w-full h-full">
              <img
                className="md:w-full md:h-full xs:h-48 xs:w-full object-fit"
                src={`https://pcfy.redberryinternship.ge/${data?.laptop?.image}`}
                alt="img"
              />
            </div>
            <div className="md:w-1/2 xs:w-full md:h-full xs:h-60 md:p-4 xs:p-0 flex items-center md:mt-0 xs:mt-4 md:justify-start xs:justify-between text-lg">
              <div className="md:h-64 xs:h-full  flex flex-col md:justify-around xs:justify-between md:m-10 xs:m-0">
                <p className="flex">სახელი:</p>
                <p className="flex">თიმი:</p>
                <p className="flex">პოზიცია:</p>
                <p className="flex">მეილი:</p>
                <p className="flex">ტელ. ნომერი:</p>
              </div>
              <div className="md:h-64 xs:h-full flex flex-col md:justify-around xs:justify-between m-4 text-[#797979]">
                <p>
                  {data?.user?.name} {data?.user?.surname}
                </p>
                <p>{team}</p>
                <p>{position}</p>
                <p>{data?.user?.email}</p>
                <p>{data?.user?.phone_number}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:h-72 xs:h-[340px] md:mt-16 xs:mt-24 border-t-2 text-lg  border-t-slate-300 flex md:flex-row xs:flex-col">
            <div className="md:w-1/2 xs:w-full md:h-[286px] xs:h-34 flex items-center">
              <div className="md:h-2/3 xs:h-5/6 flex flex-col md:justify-between xs:justify-around">
                <p>ლეპტოპის სახელი:</p>
                <p>ლეპტოპის ბრენდი:</p>
                <p>RAM:</p>
                <p>მეხსიერების ტიპი:</p>
              </div>
              <div className="md:h-2/3 xs:h-5/6 flex flex-col md:justify-between xs:justify-around m-10 text-[#797979]">
                <p>{data?.laptop?.name}</p>
                <p>{brand}</p>
                <p>{data?.laptop?.ram}</p>
                <p>{data?.laptop?.hard_drive_type}</p>
              </div>
            </div>
            <div className="flex md:h-[286px] xs:h-28 md:w-1/2 xs:w-full md:justify-start xs:justify-between items-center ">
              <div className="md:h-1/2 xs:h-full flex flex-col md:justify-between xs:justify-around md:m-10 xs:m-0">
                <p>CPU:</p>
                <p>CPU-ს ბირთვი:</p>
                <p>CPU-ს ნაკადი:</p>
              </div>
              <div className="md:h-1/2 xs:h-full flex flex-col md:justify-between xs:justify-around md:m-10 xs:m-[45px] text-[#797979]">
                <p>{data?.laptop?.cpu.name}</p>
                <p>{data?.laptop?.cpu.cores}</p>
                <p>{data?.laptop?.cpu.threads}</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 h-40 flex md:flex-row xs:flex-col text-lg border-t-2 border-t-slate-300">
            <div className="md:w-1/2 xs:w-5/6  md:h-full xs:h-20 flex items-center md:justify-start xs:justify-between">
              <div className="md:h-1/2  flex flex-col justify-around">
                <p className="xs:hidden md:block">ლეპტოპის მდგომარეობა:</p>
                <p className="md:hidden">მდგომარეობა:</p>
                <p>ლეპტოპის ფასი:</p>
              </div>
              <div className="h-1/2 flex flex-col justify-around m-5 text-[#797979]">
                <p>{data?.laptop?.state === "new" ? "ახალი" : "მეორადი"}</p>
                <p>{data?.laptop?.price}₾</p>
              </div>
            </div>
            <div className="md:w-1/2 xs:w-full h-full flex items-center md:justify-start xs:justify-between">
              <div className="md:h-1/2 xs:h-full md:m-10">
                <p>შეძენის რიცხვი:</p>
              </div>
              <div className="md:h-1/2 xs:h-full text-[#797979]">
                <p className="mr-[45px]">{data?.laptop?.purchase_date}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <TailSpin
            height="80"
            width="80"
            radius="9"
            color="black"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
    </div>
  );
};

export default LaptopInfo;
