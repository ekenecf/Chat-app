import React from 'react'
import DashboardMobileSearch from './DashboardMobileSearch'
import ActiveUsers from './ActiveUsers'
import ChatScreen from './ChatScreen'
import DashboardNav from './DashboardNav'

const Dashboard = () => {
  return (
    <div className='bg-slate-700 h-screen '>
      <p className='p-7 font-semibold text-white text-2xl'>Chats</p>
      <DashboardMobileSearch />
      <ActiveUsers />
      <p className='mt-5 ml-5 text-lg font-semibold text-white'>Recent</p>
      <ChatScreen />
      <DashboardNav />
    </div>
  )
}

export default Dashboard
