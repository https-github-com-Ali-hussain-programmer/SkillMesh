import React from 'react'

const ExtraService = ({title}) => {
    const noOfPages =[
        "1 Pages",
        "2 Pages",
        "4 Pages",
        "6 Pages",
        "8 Pages",
        "10 Pages",
        "12 Pages",
        "15 Pages",
    ];
  return (
    <div className="flex flex-row justify-between px-10 py-8">
          <h3 className="text-[18px] font-semibold">{title}</h3>
          <div className="flex gap-5">
            <label htmlFor="" className="text-[18px] py-2 px-3">I will charge</label>
            <input type="text" className="w-[100px] border-[1px] border-black py-2 px-3 rounded-2xl" placeholder="$"/>
            <label htmlFor="" className="text-[18px] py-2 px-3">For addtional</label>
            <select
              className="border-[1px] border-black border-solid py-2 px-3 rounded-2xl  outline-none w-[100px] text-gray-400"
            >
                <option value="Select">Select</option>

                {
                    noOfPages.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                    ))
                }
            </select> 
          </div>
          </div>
    
  )
}

export default ExtraService