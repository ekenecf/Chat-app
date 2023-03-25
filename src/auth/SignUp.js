import React from 'react'
import { Link } from 'react-router-dom'

import Image from '../images/chatUp.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const SignUp = () => {
  AOS.init({
    duration: 1700,
  })
  return (
    <div className="w-full flex flex-col items-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 md:flex md:flex-row md:h-screen md:pr-40 md:pl-20 md:pb-8">
      <div className="w-3/5" data-aos="fade-in" data-aos-delay="50">
        <Link to="/" className="text-lg text-gray-50 hover:underline ">
          Back to home
        </Link>
        <img src={Image} alt="LogInImge" />
      </div>
      <form className="w-full max-w-lg pl-11 pr-11 pt-8">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div
            className="w-full md:w-1/2 px-3 mb-5 md:mb-0"
            data-aos="fade-right"
          >
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic" data-aos="fade-in">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3" data-aos="fade-left">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border-red-500">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border-red-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic mb-4" data-aos="fade-in">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border-red-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic" data-aos="fade-in">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 md:mb-0">
          <div className="w-full px-3 mb-6 md:mb-5">
            <label className="block uppercase tracking-wide border-red-500 text-xs font-bold mb-2">
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Lagos"
            />
            <p className="text-red-500 text-xs italic" data-aos="fade-in">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full px-3 mb-4 md:mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Demo Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="+1234567890"
            />
            <p className="text-red-500 text-xs italic" data-aos="fade-in">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-3/5 rounded-full h-10 mb-6 md:mb-1"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
