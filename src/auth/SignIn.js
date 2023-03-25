import React from 'react'
import { Link } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

function SignIn() {
  AOS.init({
    duration: 1700,
  })
  return (
    <div className="flex items-center justify-center min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg md:w-2/4 ">
        <div className="flex justify-between w-full md:w-3/4 items-center gap-x-1.5">
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            Back to home
          </Link>
          <h3 className="text-2xl font-bold text-center" data-aos="fade-left">
            Login to your account
          </h3>
        </div>
        <form data-aos="fade-in">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <Link
                to="/sign-in"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
