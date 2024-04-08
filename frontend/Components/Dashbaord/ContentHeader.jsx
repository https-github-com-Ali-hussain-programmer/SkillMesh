import React from 'react'
import { BiNotification, BiSearch } from 'react-icons/bi'

const ContentHeader = () => {
  return (
    <div className='content--header flex items-center justify-between'>
        <h1 className='header--title text-[26px] font-bold text-dark-black'>Dispute Calls</h1>
        <div className="header--activity flex items-center gap-[20px]">
            <div className="search-box bg-[#dde6ed] px-[8px] py-[8px] rounded-[10px] flex items-center ">
                <input type="text" placeholder='Search...' className='border-none outline-0	bg-transparent p-[5px] ' />
                <BiSearch className='text-[#969393] text-[22px] hover:cursor-pointer hover:scale-150 transition ease-in-out' />
            </div>

            {/* <div className="notify bg-[#dde6ed] p-[12px] rounded-[10px] hover:scale-150 hover:cursor-pointer text-[#969393] flex items-center justify-center">
                <BiNotification className="icon"/>
            </div> */}
        </div>
    </div>
  )
}

export default ContentHeader