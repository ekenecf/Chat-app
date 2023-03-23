import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ImProfile } from 'react-icons/im'
import { RiArrowDropDownLine } from 'react-icons/ri'
import image from '../images/nature.jpg'

const Profile = () => {
  return (
    <div>
      <div className="flex justify-between px-6 pt-7 ">
        <p className="font-semibold text-xl text-slate-300">My Profile</p>
        <BsThreeDotsVertical className="text-slate-50" />
      </div>
      <div className="flex flex-col justify-center items-center pt-6 ">
        <img
          src={image}
          className="rounded-full w-20 h-20 text-slate-300"
          alt="userImg"
        />
        <p className="pt-4 text-base text-slate-300 font-medium">
          Full name of user
        </p>
        <p className="text-base text-slate-50 pb-2">🐸 Active </p>
        <hr className=" w-11/12 " />
        <p className="px-4 text-left leading-6 text-base pt-2 text-slate-300">
          Life is an amazing journey. It sometimes not fair. Just wait as time
          and chance happens to us all
        </p>
        <div className="flex flex-col justify-center w-11/12 pl-4 mt-4 h-10 bg-slate-600 rounded-t-lg ">
          <div className="flex justify-between items-center ">
            <div className="flex justify-start items-center gap-x-2">
              <ImProfile className="text-slate-300" />{' '}
              <p className="text-slate-300">About</p>
            </div>
            <RiArrowDropDownLine className="text-white text-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
