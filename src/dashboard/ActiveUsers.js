import React from 'react'
import { useSelector } from 'react-redux'

import image from '../images/nature.jpg'

const ActiveUsers = () => {
  const { brightness } = useSelector(
    (state) => state.DashboardReducer,
  )

  return (
    <div className='h-16 mx-3 flex overflow-y-auto overscroll-y-auto w-11/12 pl-5' id='ActiveUser'>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
      <div className='relative w-16 h-16 text-center shadow-[6px_4px_6px_6px_#00000024] flex flex-col items-center ml-2 rounded-lg'>
        <div className='flex'>
          <img src={image} className='rounded-full w-10 h-10 relative' alt='userImg' />
          <small className='absolute right-1 top-6'>🐸</small>
        </div>

        <p className={`text-sm font-semibold ${brightness ? 'text-black' : 'text-white'} `}>Ekeneeme</p>
      </div>
    </div>
  )
}

export default ActiveUsers
