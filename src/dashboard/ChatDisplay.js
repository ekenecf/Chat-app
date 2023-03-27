import React from 'react'
import { useSelector } from 'react-redux'

// import AOS from 'aos'
// import 'aos/dist/aos.css'

const ChatDisplay = () => {

  const { chatDisplay } = useSelector((state) => state.DashboardReducer)
  console.log(chatDisplay)

  return (
    <div className={`${chatDisplay ? 'block' : 'hidden'} md:block overflow-y-auto overscroll-y-auto`}
    // data-aos="fade-left"
    >
      <p>
        Display Chats Display Chats Display Chats Display Chats Display Chats
        Display Chats Display Chats Display Chats Display Chats Display Chats
        Display Chats Display Chats Display Chats Display Chats Display Chats
        Display Chats Display Chats Display Chats Display Chats Display Chats
        Display Chats Display Chats
      </p>
    </div>
  )
}

export default ChatDisplay
