import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center">
      <div className="container mx-auto  rounded-xl shadow border pt-20 px-4 h-4/5 bg-gradient-to-t from-zinc-300 to-zinc-50">
        <p className="text-sm font-mono text-orange-700 mb-5 text-center">
          AN APP THAT CONNECTS ALL, EVERYWHERE AROUND THE WORLD!!
        </p>
        <p className="text-3xl font-bold mb-5 leading-8 text-stone-900 text-center">
          Simplified and easy to use even for smarter businesses.
        </p>
        <p className="text-gray-500 text-base leading-6 text-center lg:mx-80">
          Bani enables local and global businesses to sell, build and scale
          effortlessly with powerful payment solutions. Start growing your
          business today.
        </p>
        <div className="mt-8 md:mt-20 flex w-full justify-center gap-x-1">
          <button className="transition duration-700 ease-in-out bg-blue-500 hover:bg-blue-400 text-white md:h-20 h-14 md:w-1/4 w-1/2 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to="/sign-up">SignUp</Link>
          </button>
          <button className="transition duration-700 ease-in-out bg-blue-500 hover:bg-blue-400 text-white md:h-20 h-14 md:w-1/4 w-1/2 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to="/sign-up">SignIn</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
