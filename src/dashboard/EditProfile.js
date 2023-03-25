import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ImProfile } from 'react-icons/im'
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  setEditDropDown,
  setEditName,
  setEditLocation,
  setEditNumber,
} from '../redux/DashboardReducer'

import image from '../images/nature.jpg'

const EditProfile = () => {
  AOS.init({
    duration: 1200,
  })
  const dispatch = useDispatch()
  const {
    editDropDown,
    editName,
    editLocation,
    editNumber,
    brightness,
  } = useSelector((state) => state.DashboardReducer)

  console.log(editLocation)

  return (
    <div
      className=" overflow-y-auto overscroll-y-auto"
      id="EditProfileComponent"
    >
      <div className=" px-6 pt-7 ">
        <p
          className={`font-semibold text-xl ${
            brightness ? 'text-black' : 'text-slate-300'
          }`}
        >
          Settings
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pt-6 ">
        <img
          src={image}
          className="rounded-full w-20 h-20 text-slate-300"
          alt="userImg"
        />
        <p
          className={`pt-4 text-base ${
            brightness ? 'text-black' : 'text-slate-300'
          } font-medium`}
        >
          Full name of user
        </p>
        <p
          className={`text-base ${
            brightness ? 'text-black' : 'text-slate-400'
          } pb-2`}
        >
          Available
        </p>
        <div className="flex flex-col justify-center w-11/12  mt-4    ">
          <div
            className={`flex justify-between items-center h-10 ${
              brightness ? 'bg-slate-400' : 'bg-slate-600'
            }  pl-4 rounded-t-lg`}
          >
            <div className="flex justify-start items-center gap-x-2">
              <ImProfile
                className={`${brightness ? 'text-white' : 'text-slate-300'}`}
              />{' '}
              <p className={`${brightness ? 'text-white' : 'text-slate-300'}`}>
                Personal Info
              </p>
            </div>
            {editDropDown ? (
              <RiArrowDropUpLine
                className="text-white text-4xl"
                onClick={() => dispatch(setEditDropDown())}
              />
            ) : (
              <RiArrowDropDownLine
                className="text-white text-4xl"
                onClick={() => dispatch(setEditDropDown())}
              />
            )}
          </div>
          {editDropDown ? (
            <div
              className={`pt-4 pl-4 ${
                brightness ? 'bg-slate-300' : 'bg-slate-900'
              }`}
              data-aos="fade-down"
            >
              <div className="flex justify-between items-center mr-2">
                <div>
                  <p
                    className={`${
                      brightness ? 'bg-slate-300' : 'text-slate-500'
                    } font-normal mb-2`}
                  >
                    Name
                  </p>
                  {editName ? (
                    <p
                      className={`${
                        brightness ? 'text-white' : 'text-slate-300'
                      }  font-semibold`}
                    >
                      John Doe Kabiru
                    </p>
                  ) : (
                    <input className="outline-none p-2 " placeholder="Name" />
                  )}
                </div>
                {editName ? (
                  <FiEdit
                    className={`w-6 h-6 ${
                      brightness ? 'text-black' : 'text-slate-300'
                    }`}
                    onClick={() => dispatch(setEditName())}
                  />
                ) : (
                  <button
                    className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 rounded-2xl w-4/12 h-10 text-white"
                    data-aos="fade-left"
                    onClick={() => dispatch(setEditName())}
                  >
                    Save Name
                  </button>
                )}
              </div>
              <p
                className={`${
                  brightness ? 'bg-slate-300' : 'text-slate-500'
                } font-normal mt-4`}
              >
                Email
              </p>
              <p
                className={`${
                  brightness ? 'text-white' : 'text-slate-300'
                }  font-semibold`}
              >
                johndoe@email.com
              </p>
              <div className="flex justify-between items-center mr-2">
                <div>
                  <p
                    className={`${
                      brightness ? 'bg-slate-300' : 'text-slate-500'
                    } font-normal mt-4 mb-2`}
                  >
                    Phone Number
                  </p>
                  {editNumber ? (
                    <input
                      className="outline-none p-2 "
                      placeholder="Phone Number"
                    />
                  ) : (
                    <p
                      className={`${
                        brightness ? 'text-white' : 'text-slate-300'
                      }  font-semibold`}
                    >
                      +123456789011
                    </p>
                  )}
                </div>
                {!editNumber ? (
                  <FiEdit
                    className={`w-6 h-6 ${
                      brightness ? 'text-black' : 'text-slate-300'
                    }`}
                    onClick={() => dispatch(setEditNumber())}
                  />
                ) : (
                  <button
                    className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 rounded-2xl w-4/12 h-10 text-white"
                    // data-aos="fade-down"
                    onClick={() => dispatch(setEditNumber())}
                  >
                    Save Number
                  </button>
                )}
              </div>

              <div className="flex justify-between items-center mr-2 mb-3">
                <div>
                  <p
                    className={`${
                      brightness ? 'bg-slate-300' : 'text-slate-500'
                    } font-normal my-4`}
                  >
                    Location
                  </p>
                  {editLocation ? (
                    <input
                      className="outline-none p-2 "
                      placeholder="Location"
                    />
                  ) : (
                    <p
                      className={`${
                        brightness ? 'text-white' : 'text-slate-300'
                      }  font-semibold`}
                    >
                      United States of America
                    </p>
                  )}
                </div>
                {!editLocation ? (
                  <FiEdit
                    className={`w-6 h-6 ${
                      brightness ? 'text-black' : 'text-slate-300'
                    }`}
                    onClick={() => dispatch(setEditLocation())}
                  />
                ) : (
                  <button
                    className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 rounded-2xl w-4/12 h-10 text-white"
                    // data-aos="fade-up"
                    onClick={() => dispatch(setEditLocation())}
                  >
                    Save Location
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default EditProfile
