import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CgProfile } from 'react-icons/cg'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { MdOutlineLightMode } from 'react-icons/md'
import image from '../images/nature.jpg'
import {
  setChatView,
  setProfileView,
  setEditProfile,
  setSummary,
  setLightDark
} from '../redux/DashboardReducer'

const DashboardNav = () => {
  const dispatch = useDispatch()

  const { chatView, profileView, editProfile } = useSelector( 
    (state) => state.DashboardReducer,
  )

  const changeDisplay = () => dispatch(setChatView())
  const changeProfileView = () => dispatch(setProfileView())

  return (
    <div className="flex h-14 px-6 justify-between items-center fixed w-full bottom-0 bg-slate-700">
      <CgProfile
        className={`h-7 w-7 ${
          profileView ? 'text-slate-300' : 'text-slate-900'
        }`}
        onClick={() => changeProfileView()}
      />
      <BsFillChatDotsFill
        className={`h-7 w-7 ${chatView ? 'text-slate-300' : 'text-slate-900'}`}
        onClick={() => changeDisplay()}
      />
      <AiFillSetting
        className={`h-7 w-7 ${
          editProfile ? 'text-slate-300' : 'text-slate-900'
        }`}
        onClick={() => dispatch(setEditProfile())}
      />
      <img
        src={image}
        className="rounded-full w-8 h-8 text-slate-300"
        alt="userImg"
        onClick={() => dispatch(setSummary())}
      />
      <MdOutlineLightMode className='text-slate-900 w-8 h-8' onClick={() => dispatch(setLightDark())}/>
    </div>
  )
}

export default DashboardNav
