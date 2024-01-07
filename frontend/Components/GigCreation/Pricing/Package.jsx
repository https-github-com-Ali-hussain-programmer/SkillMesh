import React from 'react'

const Package = ({title}) => {
    const devliveryTime = [
        "1 DAY DELIVERY",
        "2 DAY DELIVERY",
        "4 DAY DELIVERY",
        "6 DAY DELIVERY",
        "8 DAY DELIVERY",
        "11 DAY DELIVERY",
        "13 DAY DELIVERY",
        "15 DAY DELIVERY",
    ];
    const noOfPages =[
        "1",
        "2",
        "4",
        "6",
        "8",
        "10",
        "12",
        "15",
        "17",
        "19",
        "21",
        "23",
        "25",
    ];
  return (
    <div className="flex py-[40px] px-9 bg-slate-50">
          <div className="flex-[0.5]">
            <h2 className="text-[20px] font-semibold">{title}</h2>
          </div>
          <div className="flex-[2] flex flex-row justify-start gap-7 flex-wrap">
            <input
              type="text"
              className="border-[1px] border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Name Your Package"
            />
            <input
              type="text"
              className="border-[1px] border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Details of your offering"
            />
            <select
              className="border-[1px] border-black border-solid p-3  outline-none w-[250px] text-gray-400"
            >
                <option value="No of pages or screens">No of pages or screens</option>

                {
                    noOfPages.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                    ))
                }
            </select> 
            <select
              className="border-[1px] border-black border-solid p-3  outline-none w-[250px] text-gray-400"
            >
                <option value="No of pages or screens">No of pages or screens</option>

                {
                    noOfPages.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                    ))
                }
            </select> 
            <input
              type="text"
              className="border-[1px] border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Price in Pkr"
            />
          </div>
        </div>
  )
}

export default Package;