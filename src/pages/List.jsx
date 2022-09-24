import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const List = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pcfy.redberryinternship.ge/api/laptops?token=143d7d8b4901d87eb92e44547c358bad"
      )
      .then((response) => {
        setdata(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full justify-center">
      <div className="flex items-center">
        <Link to={"/"}>
          <div className="w-10 h-10 md:ml-4 xs:mt-3   md:bg-gray-400 xs:bg-white rounded-full flex justify-center items-center">
            <AiOutlineLeft className="w-5 h-5" />
          </div>
        </Link>
        <h1 className="inline m-auto mt-4 text-2xl">ჩანაწერების სია</h1>
      </div>
     {data.length>0?(<div className="md:w-2/3 xs:w-full h-fit m-auto mt-14 mb-16 flex justify-between flex-wrap md:p-5 xs:p-1">
      {data.map((card) => (
          <Card
            key={card.laptop.id}
            name={card.laptop.name}
            image={card.laptop.image}
            id={card.laptop.id}
            userName={card.user.name}
            surname={card.user.surname}
          />
        ))}
      </div>):(<div className="md:w-2/3 xs:w-full h-fit m-auto mt-14 mb-16 flex justify-between flex-wrap md:p-5 xs:p-1">
      <h1 className="text-6xl mt-20 m-auto text-red-400">ჩანაწერები არარის :(</h1>
      </div>)}
    </div>
  );
};

export default List;
