import React from 'react'
import Link from 'next/link'

const Message = () => {
  return (
    <div className='flex justify-center'>

        <div className="w-[1200px] mx-[50px] my-[50px]">
            <span className="breadcrumbs font-light text-xs text-gray-500">
                {/* <Link href={}>MESSAGES > JHON DOE > </Link> */}
            </span>
            <div className="messages mx-[30px] my-[0px] px-[50px] py-[50px] flex flex-col gap-[20px] h-[500px] overflow-auto no-scroll">
                <div className="item flex gap-[20px] max-w-[600px] text-[18px]">
                    <img className='"w-[40px] h-[40px] rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p className='max-w-[500px] px-[20px] py-[20px] bg-gray-200 rounded-bl-lg rounded-br-lg text-gray-500 font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
                        mollitia perspiciatis officiis voluptate? Sequi quae officia
                        possimus, iusto labore alias mollitia eveniet nemo placeat
                        laboriosam nisi animi! Error, tenetur!
                    </p>
                </div>

                <div className="item flex gap-[20px] max-w-[600px] text-[18px]">
                    <img className='"w-[40px] h-[40px] rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p className='max-w-[500px] px-[20px] py-[20px] bg-gray-200 rounded-bl-lg rounded-br-lg text-gray-500 font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
                        mollitia perspiciatis officiis voluptate? Sequi quae officia
                        possimus, iusto labore alias mollitia eveniet nemo placeat
                        laboriosam nisi animi! Error, tenetur!
                    </p>
                </div>

                <div className="item flex gap-[20px] max-w-[600px] text-[18px]">
                    <img className='"w-[40px] h-[40px] rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p className='max-w-[500px] px-[20px] py-[20px] bg-gray-200 rounded-bl-lg rounded-br-lg text-gray-500 font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
                        mollitia perspiciatis officiis voluptate? Sequi quae officia
                        possimus, iusto labore alias mollitia eveniet nemo placeat
                        laboriosam nisi animi! Error, tenetur!
                    </p>
                </div>
                <div className="item flex flex-row-reverse items-end">
                    <img className='"w-[40px] h-[40px] rounded-full object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p className='max-w-[500px] rounded-tr-lg rounded-br-lg rounded-bl-none bg-blue-500 text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
                        mollitia perspiciatis officiis voluptate? Sequi quae officia
                        possimus, iusto labore alias mollitia eveniet nemo placeat
                        laboriosam nisi animi! Error, tenetur!
                    </p>
                </div>

            </div>

            
            <hr className='border border-half border-gray-300 h-0 mb-[20px]'/>
            <div className="write flex items-center justify-between">
                <textarea className='w-4/5 h-[100px] px-[10px] py-[10px] border border-gray-300 rounded-[10px]' name='' placeholder='Write a meessage' cols={30} rows={10}></textarea>
                <button className='bg-green-500 py-[20px] px-[20px] text-white font-[500] rounded-lg cursor-pointer w-[100px]'>Send</button>
            </div>
        </div>
     </div>
  )
}

export default Message

