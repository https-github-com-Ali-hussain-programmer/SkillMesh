"use client"

import React, {useState} from 'react'
import Image from "next/image";
import down from "../../../public/down.png"
import GigCard from '../../../Components/gigCard/GigCard';
import { gigs } from "../../../utils/data"

const Gigs = () => {

    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");

    const reSort = (type:any) =>{
        setSort(type);
        setOpen(false);
    }

  return (
    <div className='text-white flex w-full'>
        <div className="w-[1530px] mx-auto">
            <span className="font-light uppercase text-xs text-gray-500">FIVERR  GRAPHICS & DESIGN </span>
            <h1 className='text-[32px] font-bold'>AI Artists</h1>
            <p className='font-light uppercase text-xs text-gray-500 pb-3'>
                Explore the boundaries of art and technology with Fiverr's AI artists
            </p>
            <div className="flex items-center justify-between mb-[20px]">
                <div className="flex items-center gap-5 text-gray-500 font-light">
                    <span>Budged</span>
                    <input type="text" placeholder='min' className= "p-[3px] border border-gray-300 rounded-md focus:outline-none::placeholder:text-gray-600"/>
                    <input type="text" placeholder='max' className= "p-[3px] border border-gray-300 rounded-md focus:outline-none::placeholder:text-gray-600"/>
                    <button className= "px-2 py-1 bg-green-600 text-white font-semibold rounded-md cursor-pointer">Apply</button>
                </div>
                <div className=" relative flex items-center gap-[10px]">
                    <span className='text-gray-500 font-light'>SortBy</span>
                    <span className='font-semibold'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
                    <Image src={down} alt='down arrow' className='w-[15px] cursor-pointer' onClick={() => setOpen(!open)}/>
                    {
                        open && <div className="p-[20px] bg-white border border-gray-300 rounded position-absolute top-[30px] bottom-10 z-9 flex flex-col gap-[20px] text-gray-500">
                        {sort === "sales" ? (
                            <span className='cursor-pointer' onClick={() => reSort("createdAt")}>Newest</span>
                        ) : (
                            <span className='cursor-pointer' onClick={() => reSort("sales")}>Best Selling</span>
                        )
                        }
                    </div>
                    }
                </div>
            </div>
            <div className="flex justify-between flex-wrap">
            {gigs.map((obj) => {

                return <GigCard key={obj.id} {...obj} />;
                
                })}
            </div>
        </div>
    </div>
  )
}

export default Gigs