import React from 'react'
import Uplaoder from "../../../../Components/GigCreation/img/Uplaoder";

const Img = () => {
  return (
    <div className='w-full h-[1000px]'>
      <div className="ml-[230px] mr-[365px] pt-[100px] text-[35px] mb-11 border-b-2 ">
        <div>
          <h1 className="mb-[30px]">Images</h1>
        </div>
      </div>
      <div className='flex justify-center items-center max-w-[1000px] basic-right h-[500px] border-[1px] rounded mx-[230px] mt-[10px]'>
            <Uplaoder/>
      </div>
      <button  className="bg-dark-blue mb-16 text-white py-4 px-8 ml-[1050px] mt-6 rounded-xl hover:bg-blue-950">
        Save & Continue
      </button>
    </div>
  )
}

export default Img