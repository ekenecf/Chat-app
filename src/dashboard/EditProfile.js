import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { ImProfile } from 'react-icons/im'
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  setEditDropDown,
  setEditName,
  setEditLocation,
  setEditNumber,
} from '../redux/DashboardReducer'

import image from '../images/nature.jpg'

const EditProfile = () => {
  AOS.init({
    duration: 1500,
  })
  const dispatch = useDispatch()
  const { editDropDown, editName, editLocation, editNumber } = useSelector(
    (state) => state.DashboardReducer,
  )

  return (
    <div
      className=" overflow-y-auto overscroll-y-auto"
      id="EditProfileComponent"
    >
      <div className="flex justify-between px-6 pt-7 ">
        <p className="font-semibold text-xl text-slate-300">Settings</p>
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
        <p className="text-base text-slate-400 pb-2">Available</p>
        <div className="flex flex-col justify-center w-11/12  mt-4    ">
          <div className="flex justify-between items-center h-10 bg-slate-600 pl-4 rounded-t-lg">
            <div className="flex justify-start items-center gap-x-2">
              <ImProfile className="text-slate-300" />{' '}
              <p className="text-slate-300">About</p>
            </div>
            {editDropDown ? (
              <RiArrowDropUpLine
                className="text-white text-4xl"
                onClick={() => dispatch(setEditDropDown())}
              />
            ) : (
              <RiArrowDropDownLine
                className="text-white text-4xl"
                onClick={() => dispatch(setEditDropDown())}
              />
            )}
          </div>
          {editDropDown ? (
            <div className="bg-slate-900 pt-4 pl-4 " data-aos="fade-down">
              <div className="flex justify-between mr-2">
                <div>
                  <p className="text-slate-500 font-normal">Name</p>
                  <p className="text-slate-300 font-semibold">
                    John Doe Kabiru
                  </p>
                </div>
                {editName ? (
                  <FiEdit
                    className="w-6 h-6 text-slate-300"
                    onClick={() => dispatch(setEditName())}
                  />
                ) : (
                  <button
                    className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 rounded-2xl w-4/12 h-10 text-white"
                    data-aos="fade-left"
                    onClick={() => dispatch(setEditName())}
                  >
                    Save Name
                  </button>
                )}
              </div>
              <p className="text-slate-500 font-normal mt-4">Email</p>
              <p className="text-slate-300 font-semibold">johndoe@email.com</p>
              <div className="flex justify-between mr-2">
                <div>
                <p className="text-slate-500 font-normal mt-4">Phone Number</p>
              <p className="text-slate-300 font-semibold">+1234567890</p>
                </div>
                {!editNumber ? (
                  <FiEdit
                    className="w-6 h-6 text-slate-300"
                    onClick={() => dispatch(setEditNumber())}
                  />
                ) : (
                  <button
                    className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 rounded-2xl w-4/12 h-10 text-white"
                    data-aos="fade-left"
                    onClick={() => dispatch(setEditNumber())}
                  >
                    Save Number
                  </button>
                )}
              </div>

              <div className="flex justify-between mr-2">
                <div>
                  <p className="text-slate-500 font-normal mt-4">Location</p>
                  <p className="text-slate-300 font-semibold pb-4">
                    United States of America
                  </p>
                </div>
                {!editLocation ? (
                  <FiEdit
                    className="w-6 h-6 text-slate-300"
                    onClick={() => dispatch(setEditLocation())}
                  />
                ) : (
                  <button
                    className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 rounded-2xl w-4/12 h-10 text-white"
                    data-aos="fade-left"
                    onClick={() => dispatch(setEditLocation())}
                  >
                    Save Location
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default EditProfile
