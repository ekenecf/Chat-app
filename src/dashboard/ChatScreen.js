import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setChatDisplay } from '../redux/DashboardReducer'
import image from '../images/nature.jpg'

const ChatScreen = () => {
  const dispatch = useDispatch()
  const { brightness } = useSelector((state) => state.DashboardReducer)
  const handleClick = () => {
    const screenWidth = window.innerWidth
    if (screenWidth > 767) {
      return
    } else {
      dispatch(setChatDisplay())
    }
  }

  return (
    <div
      className=" overflow-y-scroll mt-4  pb-14 md:pb-4"
      id="ChatScreenMainContainer"
    >
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div className="mt-4 flex justify-between mx-5 items-center">
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div className="mt-4 flex justify-between mx-5 items-center">
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
      <div
        className="mt-4 flex justify-between mx-5 items-center"
        onClick={() => handleClick()}
      >
        <div className="flex justify-between gap-x-3">
          <img
            src={image}
            className="rounded-full w-10 h-10 relative"
            alt="userImg"
          />
          <div>
            <p
              className={`text-base font-semibold ${
                brightness ? 'text-black' : 'text-white'
              }`}
            >
              Full Name of user
            </p>
            <p
              className={`text-sm ${
                brightness ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              Last message of user1
            </p>
          </div>
        </div>
        <p className={` ${brightness ? 'text-slate-700' : 'text-slate-400'}`}>
          MsgTime
        </p>
      </div>
    </div>
  )
}

export default ChatScreen
