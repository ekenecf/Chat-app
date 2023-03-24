import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { ImProfile } from 'react-icons/im'
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { setDropDown } from '../redux/DashboardReducer'

import image from '../images/nature.jpg'

const Profile = () => {
  AOS.init({
    duration: 1700,
  })
  const dispatch = useDispatch()
  const { dropDown } = useSelector((state) => state.DashboardReducer)

  return (
    <div className=" overflow-y-auto overscroll-y-auto" id="ProfileComponent">
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
        <p className="px-4 text-left leading-6 text-sm pt-2 text-slate-300">
          Life is an amazing journey. It sometimes not fair. Just wait as time
          and chance happens to us all
        </p>
        <div className="flex flex-col justify-center w-11/12  mt-4    ">
          <div className="flex justify-between items-center h-10 bg-slate-600 pl-4 rounded-t-lg">
            <div className="flex justify-start items-center gap-x-2">
              <ImProfile className="text-slate-300" />{' '}
              <p className="text-slate-300">About</p>
            </div>
            {dropDown ? (
              <RiArrowDropUpLine
                className="text-white text-4xl"
                onClick={() => dispatch(setDropDown())}
              />
            ) : (
              <RiArrowDropDownLine
                className="text-white text-4xl"
                onClick={() => dispatch(setDropDown())}
              />
            )}
          </div>
          {dropDown ? (
            <div className="bg-slate-900 pt-4 pl-4 " data-aos="fade-down">
              <p className="text-slate-500 font-normal">Name</p>
              <p className="text-slate-300 font-semibold">John Doe Kabiru</p>
              <p className="text-slate-500 font-normal mt-4">Email</p>
              <p className="text-slate-300 font-semibold">johndoe@email.com</p>
              <p className="text-slate-500 font-normal mt-4">Phone Number</p>
              <p className="text-slate-300 font-semibold">+123456789011</p>
              <p className="text-slate-500 font-normal mt-4">Location</p>
              <p className="text-slate-300 font-semibold pb-4">United States of Africa</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Profile
