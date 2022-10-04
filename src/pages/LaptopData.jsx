import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "../assets/LOGO-10 2.png";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import "../App.css";
import ImageUploading from "react-images-uploading";
import { useFormik } from "formik";
import * as Yup from "yup";

const LaptopData = () => {
  const [brands, setbrands] = useState();
  const [brandId, setbrandId] = useState();
  const [cpus, setcpus] = useState();
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem("data"))
  const formData  = new FormData() 

  const [images, setImages] = React.useState([]);

  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {

    setImages(imageList);
  };
  
  const formik = useFormik({
    initialValues: {
      laptop_name: "",
      laptop_brand: "",
      laptop_cpu: "",
      laptop_cpu_cores: "",
      laptop_cpu_threads: "",
      laptop_ram: "",
      laptop_hard_drive_type: "",
      laptop_state: "",
      laptop_purchase_date: "",
      laptop_price: "",
    },
    validationSchema: Yup.object({
      laptop_name: Yup.string()
        .required("სავალდებულო")
        .matches(
          /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/,
          "ლათინური ასოები, ციფრები, !@#$%^&*()_+="
        ),
      laptop_brand: Yup.string().required("სავალდებულო"),
      laptop_cpu: Yup.string().required("სავალდებულო"),
      laptop_cpu_cores: Yup.string("მხოლოდ ციფრები").required("სავალდებულო").matches(/^[0-9]*$/,'მხოლოდ ციფრები'),
      laptop_cpu_threads: Yup.string("მხოლოდ ციფრები").required("სავალდებულო").matches(/^[0-9]*$/,'მხოლოდ ციფრები'),
      laptop_ram: Yup.string().required("სავალდებულო").matches(/^[0-9]*$/,'მხოლოდ ციფრები'),
      laptop_hard_drive_type: Yup.string().required("სავალდებულო"),
      laptop_state: Yup.string().required("სავალდებულო"),
      laptop_purchase_date: Yup.string().required("სავალდებულო"),
      laptop_price: Yup.string().required("სავალდებულო").matches(/^[0-9]*$/,'მხოლოდ ციფრები'),
    }),
    onSubmit: (values) => {
      console.log(values);
      formData.append('name',data.name)
      formData.append('surname',data.surname)
      formData.append('team_id',data.team_id)
      formData.append('position_id',data.position_id)
      formData.append('phone_number',data.phone_number)
      formData.append('email',data.email)
      formData.append('token',data.token)
      formData.append('laptop_name',formik.values.laptop_name)
      formData.append('laptop_image',images[0].file)
      formData.append('laptop_brand_id',brandId)
      formData.append('laptop_cpu',formik.values.laptop_cpu)
      formData.append('laptop_cpu_cores',formik.values.laptop_cpu_cores)
      formData.append('laptop_cpu_threads',formik.values.laptop_cpu_threads)
      formData.append('laptop_ram',formik.values.laptop_ram)
      formData.append('laptop_hard_drive_type',formik.values.laptop_hard_drive_type)
      formData.append('laptop_state',formik.values.laptop_state)
      formData.append('laptop_purchase_date',formik.values.laptop_purchase_date)
      formData.append('laptop_price',formik.values.laptop_price)
      
      const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post("https://pcfy.redberryinternship.ge/api/laptop/create", formData, config)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
      navigate('/success')
    },
    
  });

  

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
                     } ${images.length>0?'border-[#62a1eb]':'border-red-500 text-red-500'} flex flex-col items-center justify-center `}
                    >
                      <button onClick={onImageUpload} {...dragProps}>
                        ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო
                      </button>
                      &nbsp;
                      <Button
                        click={onImageRemoveAll}
                        styyle={`w-1/3 h-12 ${
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
              <label
                htmlFor="inp"
                className={`md:w-[45%] xs:w-full ${
                  formik.errors.laptop_name&&formik.touched.laptop_name ? "text-red-600" : ""
                }`}
              >
                ლეპტოპის სახელი
                <Input
                blur={formik.handleBlur}
                  click={formik.handleChange}
                  valu={formik.values.laptop_name}
                  idd="laptop_name"
                  type={"text"}
                  placeholder="HP"
                  styyle={`w-full xs:h-14 md:h-11 ${
                    formik.errors.laptop_name&&formik.touched.laptop_name ? "error-input" : ""
                  }`}
                />
                {formik.touched.laptop_name&&(

                <p
                  className={`text-xs ${
                    formik.errors.laptop_name ? "text-red-600" : ""
                  }`}
                >
                  {formik.errors.laptop_name}
                </p>
                )}
              </label>
              <select
                onChangeCapture={formik.handleChange}
                onBlur={formik.handleBlur}
                id="laptop_brand"
                onChange={(e) => {
                  getBrandId(e.target.value);
                }}
                className={`md:w-[45%] xs:w-full bg-gray-200 md:h-11 xs:h-14  xs:mt-2 md:mt-6 border-2 p-2  rounded-md  focus:outline-none ${
                  formik.errors.laptop_brand&&formik.touched.laptop_brand ? "error-select" : ""
                }`}
              >
                <option selected disabled>
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
                onChangeCapture={formik.handleChange}
                onBlur={formik.handleBlur}
                id="laptop_cpu"
                className={`md:h-11 xs:h-14 md:w-[30%] xs:w-full mt-6 bg-gray-200   border-[2px] p-2 ${
                  formik.errors.laptop_cpu&& formik.touched.laptop_cpu ? "error-select" : ""
                }  rounded-md  focus:outline-none `}
              >
                <option disabled selected>
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
                className={`md:w-[30%] xs:w-full ${
                  formik.errors.laptop_cpu_cores&&formik.touched.laptop_cpu_cores ? "text-red-600" : ""
                }`}
              >
                CPU-ს ბირთვი
                <Input
                blur={formik.handleBlur}
                  click={formik.handleChange}
                  valu={formik.values.laptop_cpu_cores}
                  idd="laptop_cpu_cores"
                  placeholder={"14"}
                  styyle={`w-full md:h-11 xs:h-14 ${
                    formik.errors.laptop_cpu_cores&&formik.touched.laptop_cpu_cores ? "error-input" : ""
                  }`}
                  type="text"
                />
                {formik.touched.laptop_cpu_cores&&(
                    <p
                  className={`text-xs ${
                    formik.errors.laptop_cpu_cores ? "text-red-600" : ""
                  }`}
                >
                  {formik.errors.laptop_cpu_cores}
                </p>
                )}
              
              </label>
              <label
                htmlFor=""
                className={`md:w-[30%] xs:w-full  ${
                  formik.errors.laptop_cpu_threads&&formik.touched.laptop_cpu_threads ? "text-red-600" : ""
                }`}
              >
                CPU-ს ნაკადი
                <Input
                blur={formik.handleBlur}
                  click={formik.handleChange}
                  valu={formik.values.laptop_cpu_threads}
                  idd="laptop_cpu_threads"
                  placeholder={"365"}
                  styyle={`w-full md:h-11 xs:h-14 ${
                    formik.errors.laptop_cpu_threads&&formik.touched.laptop_cpu_threads ? "error-input" : ""
                  }`}
                  type="text"
                />
                {formik.touched.laptop_cpu_threads&&(
                    <p
                  className={`text-xs ${
                    formik.errors.laptop_cpu_threads ? "text-red-600" : ""
                  }`}
                >
                  {formik.errors.laptop_cpu_threads}
                </p>
                )}
              
              </label>
            </div>
            <div className="w-full h-48  md:border-b-2 xs:border-b-4 md:my-0 xs:my-6 border-b-gray-300 flex md:flex-row xs:flex-col justify-between items-center">
              <label
                htmlFor=""
                className={`md:w-[45%] xs:w-full ${
                  formik.errors.laptop_ram&&formik.touched.laptop_ram ? "text-red-600" : ""
                }`}
              >
                ლეპტოპის RAM(GB)
                <Input
                blur={formik.handleBlur}
                  click={formik.handleChange}
                  valu={formik.values.laptop_ram}
                  idd="laptop_ram"
                  placeholder={"365"}
                  styyle={`w-full md:h-11 xs:h-14 ${formik.errors.laptop_ram&&formik.touched.laptop_ram?'error-input':''}`}
                  type="text"
                />
                {formik.touched.laptop_ram&&(
                  <p className={`text-xs ${formik.errors.laptop_ram?'text-red-600':''}`}>{formik.errors.laptop_ram}</p>
                )}
              </label>
              <div role='group' aria-labelledby="my-radio-group" className="md:w-[45%] xs:w-full ">
                <h6 className={`${formik.errors.laptop_hard_drive_type&&formik.touched.laptop_hard_drive_type?'text-red-600':''}`}>მეხსიერების ტიპი</h6>
                <label className="font-light">
                  <input
                    className="my-5 mr-2 scale-125"
                    type="radio"
                    name="laptop_hard_drive_type"
                    onChange={()=>formik.setFieldValue('laptop_hard_drive_type','SSD')}
                    value='SSD'
                  />
                  SSD
                </label>
                <label className="font-light">
                  <input
                    type="radio"
                    className="my-5 scale-125 outline-[#62A1EB] ml-8 mr-2"
                    name="laptop_hard_drive_type"
                    onChange={()=>formik.setFieldValue('laptop_hard_drive_type','HDD')}
                    value='HDD'
                  />
                  HDD
                </label>
              </div>
            </div>
            <div className="w-full h-48 flex md:flex-row xs:flex-col justify-between items-center">
              <label htmlFor="" className={`md:w-[45%]  xs:w-full  ${formik.errors.laptop_purchase_date&&formik.touched.laptop_purchase_date?'text-red-600':''}`}>
                შეძენის რიცხვი
                <Input
                blur={formik.handleBlur}
                  click={formik.handleChange}
                  valu={formik.values.laptop_purchase_date}
                  idd='laptop_purchase_date'
                  type={"date"}
                  styyle={`w-full  text-gray-400 md:h-11 xs:h-14 ${formik.errors.laptop_purchase_date&&formik.touched.laptop_purchase_date?'error-input':''}`}
                />
              </label>
              <label htmlFor="" className={`md:w-[45%] xs:w-full mt-5 ${formik.errors.laptop_price&&formik.touched.laptop_price?'text-red-600':''}`}>
                ლეპტოპის ფასი
                <Input
                blur={formik.handleBlur}
                click={formik.handleChange}
                valu={formik.values.laptop_price}
                idd='laptop_price'
                  type={"text"}
                  placeholder="0000"
                  styyle={`w-full md:h-11 xs:h-14  ${formik.errors.laptop_price&&formik.touched.laptop_price?'error-input':''}`}
                />
                <p
                  className={`relative bottom-8 md:left-[355px] xs:left-0 xs:ml-[330px] md:ml-0 text-gray-500 m-0 p-0`}
                >
                  ₾
                </p>
                {formik.touched.laptop_price&&(
                  <p className={`text-xs mt-[-20px] ${formik.errors.laptop_price?'text-red-600':''} `}>{formik.errors.laptop_price}</p>
                )}
              </label>
            </div>
            <div className="md:w-[45%] xs:w-full mt-6">
              <h6 className={formik.errors.laptop_state&&formik.touched.laptop_state?'text-red-600':""} >ლეპტოპის მდგომარეობა</h6>
              <label className="font-light">
                <input
                  className="my-5 mr-2 scale-125"
                  type="radio"
                  name="laptop_state"
                  onChange={()=>formik.setFieldValue('laptop_state','new')}
                  
                />
                ახალი
              </label>
              <label className="font-light">
                <input
                  type="radio"
                  className="my-5 scale-125 outline-[#62A1EB] ml-8 mr-2"
                  name="laptop_state"
                  onChange={()=>formik.setFieldValue('laptop_state','used')}
                  
                />
                მეორადი
              </label>
            </div>
            <div className="flex justify-between items-center mt-10">
              <Link className="text-[#62A1EB]" to={"/add-new"}>
                უკან
              </Link>
              <Button
                click={formik.handleSubmit}
                type="submit"
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
