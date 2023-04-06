import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// ImCancelCircle
import { ImCancelCircle } from 'react-icons/im'
import { setChatView } from '../redux/DashboardReducer'

// import AOS from 'aos'
// import 'aos/dist/aos.css'

const ChatDisplay = () => {
  const dispatch = useDispatch()

  const { chatDisplay } = useSelector((state) => state.DashboardReducer)
  console.log(chatDisplay)

  return (
    <div
      className={`${
        chatDisplay ? 'block' : 'hidden'
      } md:hidden overflow-y-auto overscroll-y-auto px-3 py-3`}
      // data-aos="fade-left"
    >
      <ImCancelCircle
        className="text-white text-4xl mb-3 md:hidden"
        onClick={() => dispatch(setChatView())}
      />
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
