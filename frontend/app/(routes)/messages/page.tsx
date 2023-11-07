import React from 'react'
import Image from 'next/image'



const Messages = () => {
    const currentUser = {
        id: 1,
        username: "Anna",
        isSeller: true,
      };
      const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      maxime cum corporis esse aspernatur laborum dolorum? Animi
      molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
      nobis praesentium placeat.`
  return (
    <div className='myGigs flex justify-center text-gray-500'>
        <div className="conatiner w-[1400px] mx-auto px-[50px] py-[0px]">
            <div className="title flex justify-between">
                <h1>Messages</h1>
            </div>
            <table className='w-full'>
                <tr className='h-[100px]'>
                    <th className='text-left'>Buyer</th>
                    <th className='text-left'>Last Message</th>
                    <th className='text-left'>Date</th>
                    <th className='text-left'>Action</th>
                </tr>
                <tr className='h-[100px]'>
                    <td className='px-[10px] py-[10px]'>John Doe</td>
                    <td className='px-[10px] py-[10px]'>{message.substring(0,100)}...</td>
                    <td className='px-[10px] py-[10px]'>1 day ago</td>
                    <td className='px-[10px] py-[10px]'>
                        <button className='bg-green-500 text-white font-semibold py-[10px] px-[10px] cursor-pointer'>Mark as Read</button>
                    </td>
                </tr>

                <tr className='h-[100px]'>
                    <td className='px-[10px] py-[10px]'>John Doe</td>
                    <td className='px-[10px] py-[10px]'> {message.substring(0,100)}...</td>
                    <td className='px-[10px] py-[10px]'>1 day ago</td>
                    <td className='px-[10px] py-[10px]'>
                        <button className='bg-green-500 text-white font-semibold py-[10px] px-[10px] cursor-pointer'>Mark as Read</button>
                    </td>
                </tr>

                <tr className='h-[100px]'>
                    <td className='px-[10px] py-[10px]'>John Doe</td>
                    <td className='px-[10px] py-[10px]'>{message.substring(0,100)}...</td>
                    <td className='px-[10px] py-[10px]'>1 day ago</td>
                    <td className='px-[10px] py-[10px]'>
                        <button className='bg-green-500 text-white font-semibold py-[10px] px-[10px] cursor-pointer'>Mark as Read</button>
                    </td>
                </tr>

                <tr className='h-[100px]'>
                    <td className='px-[10px] py-[10px]'>John Doe</td>
                    <td className='px-[10px] py-[10px]'>{message.substring(0,100)}...</td>
                    <td className='px-[10px] py-[10px]'>1 day ago</td>
                    <td className='px-[10px] py-[10px]'>
                        <button className='bg-green-500 text-white font-semibold py-[10px] px-[10px] cursor-pointer'>Mark as Read</button>
                    </td>
                </tr>

                
            </table>
        </div>
    </div>
  )
}

export default Messages