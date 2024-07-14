
"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const referralData = Object.fromEntries(formData);

    try {
      const response = await axios.post('https://accredian-backend-task-iomq.onrender.com/api/referrals', referralData);
      console.log('Referral submitted:', response.data);
      toast.success("Referral Form Submitted Successfully")
      setIsModalOpen(false);
      // Show success message to user
    } catch (error) {
      console.error('Error submitting referral:', error);
      toast.error(error)
      // Show error message to user
    }
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between  mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <div className="flex flex-col text-justify">
              <span className="text-2xl font-semibold text-blue-600">
                accredian
              </span>
              <span className="text-xs text-gray-500">
                credentials that matter
              </span>
            </div>
            <button>
            <Link
              href="#"
              className="block px-4  ml-10 bg-blue-600 py-2 pr-4  text-white border-b border-gray-100 hover:bg-blue-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 rounded-lg"
            >
              Courses
            </Link>
          </button>
          </a>
     
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="text-black bg-gray-200 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 focus:outline-none"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 focus:outline-none"
            >
              Try for free
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Refer & Earn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="bg-blue-100 py-3 px-10 mt-10 rounded-full shadow-md max-w-md mx-auto">
        <ul className="flex justify-between items-center">
          <li className="relative">
            <a href="#" className="text-blue-500 font-medium">
              Refer
            </a>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              Benefits
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              Support
            </a>
          </li>
        </ul>
      </nav>

      <div className="bg-blue-100 mt-10 p-8  mb-20 rounded-3xl shadow-lg max-w-6xl mx-auto relative overflow-hidden">
        <div className="flex">
          <div className="w-1/2 pr-4 mt-14">
            <h1 className="text-6xl font-bold mb-4">
              Let&apos;s Learn <br /> & Earn
            </h1>
            <p className="text-4xl mb-4 mt-10">
              Get a chance to win <br />
              up to <span className="text-blue-600 font-semibold">Rs. 15,000</span>
            </p>
            <button 
              className="bg-blue-500  text-white px-8 py-3 rounded-md mt-32 hover:bg-blue-600 transition duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Refer Now
            </button>
          </div>

          <div className="w-1/2 relative">
            <Image
              src="/img.svg"
              alt="People with phone"
              width={300}
              height={100}
              layout="responsive"
              className="rounded-3xl"
            />
          </div>
        </div>

        <img
          src="/money.svg"
          alt="Money"
          className="absolute top-0 left-4 w-32 h-12"
        />
        <img
          src="/money.svg"
          alt="Money"
          className="absolute bottom-40 right-96 w-40 h-14"
        />
        <img
          src="/money.svg"
          alt="Money"
          className="absolute top-1/4 left-1/3 w-24 h-24 transform rotate-12"
        />
        <img
          src="/money.svg"
          alt="Money"
          className="absolute bottom-1/4 left-16 w-20 h-20 transform -rotate-12"
        />
        <img
          src="/money.svg"
          alt="Money"
          className="absolute top-10 right-20 w-16 h-16"
        />
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="referrer" className="block mb-1">Your Name</label>
          <input type="text" id="referrer" name="referrer" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="referee" className="block mb-1">Friend&apos;s Name</label>
          <input type="text" id="referee" name="referee" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="course" className="block mb-1">Course</label>
          <input type="text" id="course" name="course" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Friend&apos;s Email</label>
          <input type="email" id="email" name="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit Referral
          </button>
        </div>
      </form>
      
    </div>
  </div>
)}
<ToastContainer />
    </div>
  );
};
