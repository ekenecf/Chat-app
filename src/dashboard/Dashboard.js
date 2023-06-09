import React from 'react'
import { useSelector } from 'react-redux'

import DashboardMobileSearch from './DashboardMobileSearch'
import ActiveUsers from './ActiveUsers'
import ChatScreen from './ChatScreen'
import DashboardNav from './DashboardNav'
import Profile from './Profile'
import EditProfile from './EditProfile'
import Summary from './Summary'
import ChatDisplay from './ChatDisplay'
import DesktopChatScerrn from './DesktopChatScerrn'

const Dashboard = () => {
  const {
    chatView,
    profileView,
    editProfile,
    summary,
    brightness,
    chatDisplay,
  } = useSelector((state) => state.DashboardReducer)

  console.log(chatDisplay)

  return (
    <div
      className={`h-screen relative ${
        brightness ? 'bg-slate-100' : 'bg-slate-700'
      } md:flex`}
    >
      {chatView ? (
        <div className='md:w-1/2 lg:w-2/5 relative'>
          <div className=' pl-4 '>
          <p
            className={`pl-4 py-7 font-semibold ${
              brightness ? 'text-slate-100' : 'text-slate-300'
            }  text-2xl `}
          >
            Chats
          </p>
          <DashboardMobileSearch />
          <ActiveUsers />
          <p
            className={`mt-5 ml-5 text-lg font-semibold ${
              brightness ? 'text-slate-100' : 'text-slate-300'
            }`}
          >
            Recent
          </p>
          </div>
          <ChatScreen />
        </div>
      ) : profileView ? (
        <Profile />
      ) : editProfile ? (
        <EditProfile />
      ) : null}
      <ChatDisplay />
      <DesktopChatScerrn />

      {summary ? <Summary /> : null}

      <DashboardNav />
    </div>
  )
}

export default Dashboard
