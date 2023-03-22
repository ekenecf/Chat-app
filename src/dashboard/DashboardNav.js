import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import image from '../images/nature.jpg'

const DashboardNav = () => {
  return (
    <div className="flex pt-4 mx-4 justify-between items-center">
      <CgProfile className="h-5 w-5 text-slate-300" />
      <BsFillChatDotsFill className="h-5 w-5 text-slate-300" />
      <AiFillSetting className=" h-5 w-5 text-slate-300" />
      <img src={image} className="rounded-full w-8 h-8 text-slate-300" alt="userImg" />
    </div>
  )
}

export default DashboardNav
