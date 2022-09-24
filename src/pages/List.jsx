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
        "https://pcfy.redberryinternship.ge/api/laptops?token=2c136363a8c02a83c7955be0864db980"
      )
      .then((response) => {
        console.log(response.data.data);
        setdata(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

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
      <div className="md:w-2/3 xs:w-full h-fit m-auto mt-14 mb-16 flex justify-between flex-wrap md:p-5 xs:p-1">
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
      </div>
    </div>
  );
};

export default List;
