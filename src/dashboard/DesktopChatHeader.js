import React from 'react'
import { useSelector } from 'react-redux'
import image from '../images/nature.jpg'

function DesktopChatHeader() {
  const { brightness } = useSelector((state) => state.DashboardReducer)

  return (
    <div className="hidden md:block mb-8 pr-5">
      <div className="flex justify-between gap-x-3">
        <div className='flex justify-between items-center gap-x-3'>
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <p
            className={`text-base font-semibold ${
              brightness ? 'text-black' : 'text-white'
            }`}
          >
            Full Name of user Appearing
          </p>
        </div>
        <div>
            <p  className={`text-base font-semibold ${
              brightness ? 'text-black' : 'text-white'
            }`}>
                I am waiting
            </p>
        </div>
      </div>
    </div>
  )
}

export default DesktopChatHeader
