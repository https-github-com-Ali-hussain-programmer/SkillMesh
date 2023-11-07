import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import del from "../../../public/delete.png"



const MyGigs = () => {
  return (
    <div className='myGigs flex justify-center text-gray-500'>
        <div className="conatiner w-[1400px] mx-auto px-[50px] py-[0px]">
            <div className="title flex justify-between">
                <h1>Gigs</h1>
                <Link href="/add">
                    <button className='bg-green-500 text-white font-semibold py-[10px] px-[10px] cursor-pointer'>Add New Gig</button>
                </Link>
            </div>
            <table className='w-full'>
                <tr className='h-[50px]'>
                    <th className='text-left'>Image</th>
                    <th className='text-left'>Title</th>
                    <th className='text-left'>Price</th>
                    <th className='text-left'>Sales</th>
                    <th className='text-left'>Action</th>
                </tr>
                <tr className='h-[50px]'>
                    <td>
                        <img className='w-[50px] h-[25px] object-cover' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td>
                        <Image className='w-[20px] cursor-pointer' src={del} alt=''/>
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
                        <Image className='w-[20px] cursor-pointer' src={del} alt=''/>
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
                        <Image className='w-[20px] cursor-pointer' src={del} alt=''/>
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
                        <Image className='w-[20px] cursor-pointer' src={del} alt=''/>
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
                        <Image className='w-[20px] cursor-pointer' src={del} alt=''/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default MyGigs