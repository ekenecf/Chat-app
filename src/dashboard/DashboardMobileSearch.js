import React from 'react'

const DashboardMobileSearch = () => {
  return (
    <div className="flex justify-center">
  <div className="mb-3 xl:w-96 w-11/12">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="search"
        className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-white outline-none transition duration-300 ease-in-out focus:border-primary focus:text-white focus:shadow-te-primary focus:outline-none dark:text-white dark:placeholder:text-white"
        placeholder="Search users"
        aria-label="Search"
        aria-describedby="button-addon1" />
      <button
        className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
             />
        </svg>
      </button>
    </div>
  </div>
</div>
  )
}

export default DashboardMobileSearch
