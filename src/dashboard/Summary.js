import React from 'react'
import { useDispatch } from 'react-redux'

import { MdCancel } from 'react-icons/md'
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  setProfileView,
  setEditProfile,
  setSummary,
} from '../redux/DashboardReducer'

const Summary = () => {
  AOS.init({
    duration: 1150,
  })
  const dispatch = useDispatch()

  return (
    <div
      className="flex justify-end fixed w-9/12 bottom-14 h-40 px-3 "
      data-aos="fade-up"
    >
      <div className="w-11/12 bg-slate-800 ">
        <div className="flex justify-between py-2">
          <p></p>
          <MdCancel
            className="h-7 w-7 text-slate-300 "
            onClick={() => dispatch(setSummary())}
          />
        </div>
        <div
          className="flex justify-around mb-3"
          onClick={() => {
            dispatch(setProfileView())
            dispatch(setSummary())
          }}
        >
          <p className="text-slate-300 font-semibold">Profile</p>
          <CgProfile className="h-5 w-5 text-slate-500" />
        </div>
        <div
          className="flex justify-around mb-3"
          onClick={() => {
            dispatch(setEditProfile())
            dispatch(setSummary())
          }}
        >
          <p className="text-slate-300 font-semibold">Settings</p>
          <AiFillSetting className="h-5 w-5 text-slate-500" />
        </div>
        <div
          className="flex justify-around mb-3"
          onClick={() => dispatch(setSummary())}
        >
          <p className="text-slate-300 font-semibold">Log Out</p>
          <AiOutlineLogout className="h-5 w-5 text-slate-500" />
        </div>
      </div>
    </div>
  )
}

export default Summary
