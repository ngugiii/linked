import React, { useEffect, useState } from "react";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";
import registerImg from "../../assets/progressing.png";
import register from "../../assets/register.png";
import done from "../../assets/congratulation.png";
import wink from "../../assets/wink.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectTopic: "",
    category: "",
    groupSize: "",
    termsAgreed: false,
  });

  const registrationComplete = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.projectTopic &&
      formData.category &&
      formData.groupSize &&
      formData.termsAgreed
    );
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section className="relative register w-full text-white md:px-32 px-8">
      <div className="register_full w-full flex justify-center items-center md:flex-row flex-col h-full min-h-[90vh]">
        <h1 className="text-[#D434FE] w-full text-left mt-7 md:hidden block mb-4 text-2xl font-extrabold">
          Register
        </h1>{" "}
        <img
          src={purple}
          className="absolute top-[8rem] md:block hidden left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={star}
          className="absolute top-[15rem] md:block hidden right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={grayStar}
          className="absolute top-[32rem] md:block hidden left-[24rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={grayStar}
          className="absolute top-[14rem] md:block hidden left-[42rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <div data-aos="fade-right" className="register-left w-[80%]">
          <img src={register} alt="" />
        </div>
        <div data-aos="fade-left" className="register-right w-full">
          <form
            action=""
            className="shadow-2xl flex flex-col bg-[#150e23] rounded-md md:px-14 px-6 py-8 mb-8 w-[full]"
          >
            <h1 className="text-[#D434FE] md:block hidden mb-4 text-2xl font-extrabold">
              Register
            </h1>
            <div>
              Be part of this movement{" "}
              <span className="text-[#D434FE] relative">
                ....................
                <img
                  src={registerImg}
                  className="absolute top-[-1rem] left-[6px]"
                  alt=""
                />
              </span>
            </div>
            <h1 className="my-4 font-bold md:text-left text-center text-xl">
              CREATE YOUR ACCOUNT
            </h1>
            <div className="flex md:flex-row flex-col w-full">
              <div className="w-full mr-4">
                <label htmlFor="name">Team's Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent w-full mr-2 border border-white p-2 rounded mb-4"
                  placeholder="Enter the name of your group"
                />
              </div>
              <div className="w-full">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-transparent w-full mr-2 border border-white p-2 rounded mb-4"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex w-full md:flex-row flex-col">
              <div className="w-full mr-4">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent w-full border border-white p-2 rounded mb-4"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="w-full">
                <label htmlFor="projectTopic">Project Topic</label>
                <input
                  type="text"
                  name="projectTopic"
                  required
                  value={formData.projectTopic}
                  onChange={handleInputChange}
                  className="bg-transparent w-full border border-white p-2 rounded mb-4"
                  placeholder="What is your group project topic"
                />
              </div>
            </div>
            <div className="flex w-full md:flex-row flex-col">
              <div className="w-full mr-4">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="bg-transparent w-full border border-white p-2 rounded mb-4"
                >
                  <option value="">Select Your Category</option>
                  <option value="AI">Artificial Intelligence</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="groupSize">Group Size</label>
                <select
                  name="groupSize"
                  required
                  value={formData.groupSize}
                  onChange={handleInputChange}
                  className="bg-transparent w-full border border-white p-2 rounded mb-4"
                >
                  <option value="">Select</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <h1 className="my-3 text-[#D434FE] italic font-semibold md:text-left text-center">
              Please review your registration details before submitting
            </h1>
            <div className="w-full flex md:justify-start justify-center mb-2 items-center">
              <label>
                <input
                  type="checkbox"
                  name="termsAgreed"
                  required
                  checked={formData.termsAgreed}
                  onChange={handleInputChange}
                />{" "}
                I agree with the event terms and conditions and privacy policy
              </label>
            </div>
            <div className="w-full flex justify-start items-center">
              <button
                className="primaryColor w-full px-5 py-4 rounded"
                onClick={registrationComplete}
                //   disabled={!isFormValid()}
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-50 z-50">
          <div className="content md:w-[32rem] w-[24rem] border-2 rounded-md p-7 border-[#D434FE]">
            <div className="header">
              <img src={done} className="" alt="" />
            </div>
            <div className="text text-center">
              <h1 className="text-3xl text-center font-bold">
                Congratulations!!!
              </h1>
              <h1 className="text-3xl text-center mb-3 font-bold">
                You have Succesfully Registered
              </h1>
              <h3>Yes it was easy and you did it</h3>
              <h3 className="flex justify-center items-center">
                Check your mailbox for the next step{" "}
                <img src={wink} className="ml-2" alt="" />{" "}
              </h3>
            </div>
            <div className="w-full flex justify-start mt-3 items-center">
              <button
                className="primaryColor w-full px-5 py-4 rounded"
                onClick={closePopup}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;
