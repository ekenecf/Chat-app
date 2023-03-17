import React from 'react'
import Image from '../images/chatUp.png'

const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-t from-zinc-300 to-zinc-50 md:flex md:flex-row md:h-screen md:pr-40 md:pl-20 md:pb-8">
      <div className="w-3/5 ">
        <img src={Image} alt="LogInImge" />
      </div>
      <form class="w-full max-w-lg pl-11 pr-11 pt-8">
        <div class="flex flex-wrap -mx-3 mb-5">
          <div class="w-full md:w-1/2 px-3 mb-5 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 border-red-500">
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-5">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200  border-red-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic mb-4">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Confirm Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200  border-red-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2 md:mb-0">
          <div class="w-full px-3 mb-6 md:mb-5">
            <label class="block uppercase tracking-wide border-red-500 text-xs font-bold mb-2">
              City
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Albuquerque"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full px-3 mb-4 md:mb-2">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Demo Number
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="+1234567890"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-3/5 rounded-full h-10 "
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
