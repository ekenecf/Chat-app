import React from 'react'
import { useSelector } from 'react-redux'

import DashboardMobileSearch from './DashboardMobileSearch'
import ActiveUsers from './ActiveUsers'
import ChatScreen from './ChatScreen'
import DashboardNav from './DashboardNav'
import Profile from './Profile'
import EditProfile from './EditProfile'

const Dashboard = () => {
  const { chatView, profileView, editProfile } = useSelector(
    (state) => state.DashboardReducer,
  )

  return (
    <div className="bg-slate-700 h-screen relative">
      {chatView ? (
        <>
          <p className="p-7 font-semibold text-white text-2xl">Chats</p>
          <DashboardMobileSearch />
          <ActiveUsers />
          <p className="mt-5 ml-5 text-lg font-semibold text-white">Recent</p>
          <ChatScreen />
        </>
      ) : profileView ? (
        <Profile />
      ) : editProfile ? <EditProfile/> : null}

      <DashboardNav />
    </div>
  )
}

export default Dashboard
