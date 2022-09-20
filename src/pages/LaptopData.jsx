import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "../assets/LOGO-10 2.png";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import "../App.css";
import ImageUploading from "react-images-uploading";

const LaptopData = () => {
  const [brands, setbrands] = useState();
  const [brandId, setbrandId] = useState();
  const [cpus, setcpus] = useState();

  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  const [store, setstore] = useState({});
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

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

  const getBrandId = (e) => {
    if (e === "HP") {
      setbrandId(1);
    } else if (e === "Dell") {
      setbrandId(2);
    } else if (e === "Microsoft") {
      setbrandId(3);
    } else if (e === "Apple") {
      setbrandId(4);
    } else if (e === "Lenovo") {
      setbrandId(5);
    } else if (e === "Acer") {
      setbrandId(6);
    }
  };
  const submitHandler = () => {
    // const regex = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;
    // const numbersRegex = /^[0-9]*$/;
    // setstore(form);
    // console.log([...form.forEach()])
    // setstore((store) => ({ ...store, ...data }));
    // console.log(store);
    // axios
    //   .post("https://pcfy.redberryinternship.ge/api/laptop/create", store)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => console.log(error));
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
              className={`w-full flex cursor-pointer flex-col justify-center items-center md:h-[350px] xs:h-72 mt-10`}
            >
              <div className="App w-full h-full">
                <ImageUploading
                  encType="multipart/form-data"
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div
                      onClick={onImageUpload}
                      {...dragProps}
                      className={`upload__image-wrapper border-[3px] 
                     border-dashed rounded-xl w-full h-full ${
                       isDragging ? "border-red-500" : "border-[#62A1EB]"
                     } flex flex-col items-center justify-center `}
                    >
                      <button onClick={onImageUpload} {...dragProps}>
                        ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო
                      </button>
                      &nbsp;
                      <Button
                        click={onImageRemoveAll}
                        styyle={`w-1/5 h-12 ${
                          imageList.length > 0 ? "hidden" : "block"
                        }`}
                        title={"ატვირთე"}
                      />
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className="image-item w-full flex flex-col items-center"
                        >
                          <img
                            src={image["data_url"]}
                            alt=""
                            className="w-28"
                          />
                          <div className="image-item__btn-wrapper">
                            <Button
                              title={"განახლება"}
                              styyle={"h-9 m-1 text-sm w-28"}
                              click={() => onImageUpdate(index)}
                            />
                            <Button
                              title={"წაშლა"}
                              styyle={"h-9 m-1 text-sm w-28"}
                              click={() => onImageRemove(index)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>
            <div className="w-full md:h-48 xs:h-52   md:border-b-2 xs:border-b-4  border-b-gray-300 flex xs:flex-col md:flex-row md:justify-between xs:justify-around items-center">
              <label htmlFor="inp" className={`md:w-[45%] xs:w-full`}>
                ლეპტოპის სახელი
                <Input
                  type={"text"}
                  placeholder="HP"
                  styyle={`w-full xs:h-14 md:h-11`}
                />
                <p className={`text-xs`}>
                  ლათინური ასოები, ციფრები, !@#$%^&*()_+=
                </p>
              </label>
              <select
                onChange={(e) => {
                  getBrandId(e.target.value);
                }}
                className={`md:w-[45%] xs:w-full bg-gray-200 md:h-11 xs:h-14  mt-2 border-2 p-2  rounded-md  focus:outline-none`}
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
                name=""
                id=""
                className={`md:h-11 xs:h-14 md:w-[30%] xs:w-full mt-2 bg-gray-200  border-[2px] p-2   rounded-md  focus:outline-none `}
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
              <label htmlFor="" className={`md:w-[30%] xs:w-full `}>
                CPU-ს ბირთვი
                <Input
                  placeholder={"14"}
                  styyle={`w-full md:h-11 xs:h-14 `}
                  type="text"
                />
                <p className={`text-xs `}>მხოლოდ ციფრები</p>
              </label>
              <label htmlFor="" className={`md:w-[30%] xs:w-full`}>
                CPU-ს ნაკადი
                <Input
                  placeholder={"365"}
                  styyle={`w-full md:h-11 xs:h-14 `}
                  type="text"
                />
                <p className={`text-xs `}>მხოლოდ ციფრები</p>
              </label>
            </div>
            <div className="w-full h-48  md:border-b-2 xs:border-b-4 md:my-0 xs:my-6 border-b-gray-300 flex md:flex-row xs:flex-col justify-between items-center">
              <label htmlFor="" className={`md:w-[45%] xs:w-full `}>
                ლეპტოპის RAM(GB)
                <Input
                  placeholder={"365"}
                  styyle={`w-full md:h-11 xs:h-14 `}
                  type="text"
                />
                <p className={`text-xs `}>მხოლოდ ციფრები</p>
              </label>
              <div className="md:w-[45%] xs:w-full ">
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
            <div className="w-full h-48 flex md:flex-row xs:flex-col justify-between items-center">
              <label htmlFor="" className={`md:w-[45%] xs:w-full `}>
                შეძენის რიცხვი
                <Input
                  type={"date"}
                  styyle={`w-full text-gray-400 md:h-11 xs:h-14`}
                />
              </label>
              <label htmlFor="" className={`md:w-[45%] xs:w-full mt-4 `}>
                ლეპტოპის ფასი
                <Input
                  type={"text"}
                  placeholder="0000"
                  styyle={`w-full md:h-11 xs:h-14  `}
                />
                <p
                  className={`relative bottom-8 md:left-[355px] xs:left-0 xs:ml-[330px] md:ml-0 text-gray-500 m-0 p-0`}
                >
                  ₾
                </p>
                <p className={`text-xs mt-[-20px] `}>მხოლოდ ციფრები</p>
              </label>
            </div>
            <div className="md:w-[45%] xs:w-full mt-6">
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
