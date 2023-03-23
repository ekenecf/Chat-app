import React from 'react'
import { useDispatch } from 'react-redux'

import { CgProfile } from 'react-icons/cg'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import image from '../images/nature.jpg'
import { setChatView, setProfileView } from '../redux/DashboardReducer'

const DashboardNav = () => {
    const dispatch = useDispatch()

    const changeDisplay = () => dispatch(setChatView())
    const changeProfileView = () => dispatch(setProfileView())

  return (
    <div className="flex pt-4 px-6 justify-between items-center fixed w-full">
      <CgProfile className="h-5 w-5 text-slate-300" onClick={() => changeProfileView()}/>
      <BsFillChatDotsFill className="h-5 w-5 text-slate-300" onClick={() => changeDisplay()} />
      <AiFillSetting className=" h-5 w-5 text-slate-300" />
      <img src={image} className="rounded-full w-8 h-8 text-slate-300" alt="userImg" />
    </div>
  )
}

export default DashboardNav
