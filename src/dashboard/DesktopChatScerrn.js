import React from 'react'
// import { useSelector } from 'react-redux'
import DesktopChatHeader from './DesktopChatHeader'

const DesktopChatScerrn = () => {
  // const { chatDisplay } = useSelector((state) => state.DashboardReducer)
  // console.log(chatDisplay)

  return (
    <div
      className='hidden md:block py-7'
      // className={`${chatDisplay ? 'block' : 'hidden'} md:block overflow-y-auto overscroll-y-auto px-3 py-3`}
    >
      <DesktopChatHeader />
      <p>
        Display DesktopChatScerrn Display DesktopChatScerrn Display
        DesktopChatScerrn Display DesktopChatScerrn Display DesktopChatScerrn
        Display DesktopChatScerrn Display DesktopChatScerrn Display
        DesktopChatScerrn Display DesktopChatScerrn Display DesktopChatScerrn
      </p>
    </div>
  )
}

export default DesktopChatScerrn
