import React from 'react'
import Image from 'next/image'
import message from "../../../public/message.png"



const Orders = () => {
    const currentUser = {
        id: 1,
        username: "Anna",
        isSeller: true,
      };
  return (
    <div className='myGigs flex justify-center text-gray-500'>
        <div className="conatiner w-[1400px] mx-auto px-[50px] py-[0px]">
            <div className="title flex justify-between">
                <h1>Orders</h1>
            </div>
            <table className='w-full'>
                <tr className='h-[50px]'>
                    <th className='text-left'>Image</th>
                    <th className='text-left'>Title</th>
                    <th className='text-left'>Price</th>
                    <th className='text-left'>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                    <th className='text-left'>Contact</th>
                </tr>
                <tr className='h-[50px]'>
                    <td>
                        <img className='w-[50px] h-[25px] object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td>
                        <Image className='w-[20px] cursor-pointer' src={message} alt=''/>
                    </td>
                </tr>

                <tr className='h-[50px]'>
                    <td>
                        <img className='w-[50px] h-[25px] object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td>
                        <Image className='w-[20px] cursor-pointer' src={message} alt=''/>
                    </td>
                </tr>

                <tr className='h-[50px]'>
                    <td>
                        <img className='w-[50px] h-[25px] object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td>
                        <Image className='w-[20px] cursor-pointer' src={message} alt=''/>
                    </td>
                </tr>

                <tr className='h-[50px]'>
                    <td>
                        <img className='w-[50px] h-[25px] object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td>
                        <Image className='w-[20px] cursor-pointer' src={message} alt=''/>
                    </td>
                </tr>

                <tr className='h-[50px]'>
                    <td>
                        <img className='w-[50px] h-[25px] object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td>
                        <Image className='w-[20px] cursor-pointer' src={message} alt=''/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Orders