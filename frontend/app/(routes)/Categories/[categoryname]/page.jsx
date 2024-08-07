"use client";
import React, { useState, useEffect } from "react";
import { GigCard } from "../../../../Components";
import { gigs } from "../../../../utils/data";
import { useRouter, useSearchParams } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import { fetchGigbyCategory } from "Api/gigApi";
import { setGigs } from "../../../../redux/slice/gigcreationslice";
const Gigs = ({ params }) => {
  const dispatch=useDispatch()
  const [budget, setBudget] = useState({ min: 0, max: 5000 });
  const search = useSearchParams().get("subcategory");
  const [subfieldselect, setSubfieldSelect] = useState(search || "All");
  const[gigs,setgigs]=useState("")
  const [sort, setSort] = useState("No Sort");
  const Category = useSelector((state) => state?.category);
  const router = useRouter();
  const [subcategory, setSubcategory] = useState(() => {
    const filteredSubcategories = Category?.data
      ?.flatMap(
        (c) =>
          c.subField?.filter(
            (sub) => sub.category === decodeURIComponent(params.categoryname)
          ) ?? []
      )
      .filter(Boolean);
    return filteredSubcategories;
  });
  const [filteredGigs, setfilteredGigs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryname = decodeURIComponent(params.categoryname);
        const data = await fetchGigbyCategory(categoryname);
        setgigs(data.gigs)
        setfilteredGigs(data.gigs);
        dispatch(setGigs(data.gigs));
        console.log(data);
      } catch (error) {
        console.error("Error fetching gig data:", error);
      }
    };

    fetchData();
  }, [params.categoryname]);
  const handleSort = (e) => {
    const { value } = e.target;
    let sortedArray = [...filteredGigs];
    if (value === "Top Rated") {
      sortedArray.sort((a, b) => b.star - a.star);
    } else if (value === "No of Orders") {
      sortedArray?.sort((a, b) => b.ordersCompleted - a.ordersCompleted);
    } else {
      sortedArray = gigs?.filter(
        (c) => c.category === decodeURIComponent(params.categoryname)
      );
    }
    setfilteredGigs(sortedArray);
    setSort(value);
  };

  const handlePrice = (e) => {
    const { name, value } = e.target;
    
    setBudget((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const applyBudget = () => {

   let  sortedArray = gigs?.filter((s) => {
      if (s.Package[0].price >= budget.min && s.Package[0].price <= budget.max) {
        return true;
      }
      return false;
    });
    setfilteredGigs(sortedArray);
  };

  const subfieldSort = (e) => {
    const { value } = e.target;
   
    if (value === "All") {
      setfilteredGigs(gigs);
      setSubfieldSelect(value);
    } else {
      const filteredArray = gigs?.filter((gig) => {

        const hasMatchingSubField = gig && gig.subField && gig.subField.name === value;
        return hasMatchingSubField;
    });
      setfilteredGigs(filteredArray);
      setSubfieldSelect(value);
    }
  };
  const handleRoute = (route) => {
    router.replace(route);
  };

  return (
    <div className="  bg-[#fafafa]  pt-14 pb-[300px] min-h-screen">
      <div className=" container 2xl:w-[1400px]  flex flex-col gap-5">
        <div className=" text-[#404145] text-sm flex items-center gap-3 cursor-pointer">
          <span onClick={() => handleRoute("/")}>
            <AiOutlineHome />
          </span>
          <span>/</span>{" "}
          <span onClick={() => handleRoute("/Categories")}>Categories</span>
          <span>/</span>
          <span> {decodeURIComponent(params.categoryname)}</span>
        </div>
        <div className="flex flex-col-reverse gap-2 md:flex-col ">
          <div className="flex flex-col items-center  gap-2  justify-between md:flex-row">
            <h1 className="text-[32px]  font-bold">
              {decodeURIComponent(params.categoryname)}
            </h1>
            <select
              className="border-[1px] border-solid border-[#ccc] py-3 overflow-hidden outline-none"
              value={subfieldselect}
              onChange={subfieldSort}
            >
              <option value="All">All</option>
              {subcategory?.map((subfield, index) => (
                <option key={subfield._id} value={subfield?.name}>
                  {subfield?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="font-light uppercase text-xs text-gray-500 pb-3 tracking-wide">
            Explore the boundaries of art and technology with Fiverr's{" "}
            <span className="font-bold text-[#404145]">
              {decodeURIComponent(params.categoryname)}
            </span>{" "}
            artists
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-between mb-[20px]">
          <div className="flex flex-col lg:flex-1 md:flex-row items-center gap-3 text-gray-500 font-light">
            <span className="hidden md:flex">Budget</span>
            <input
              type="number"
              placeholder="min"
              value={budget.min}
              onChange={handlePrice}
              name="min"
              className="py-2 px-1 md:py-2 border border-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600 focus:ring-2 ring-sky-400"
            />
            <input
              type="number "
              placeholder="max"
              name="max"
              onChange={handlePrice}
              value={budget.max}
              className="py-2 px-1 md:py-2 border border-gray-300 rounded-sm focus:outline-none  focus:ring-2 ring-sky-400"
            />
            <button
              className="px-1 py-2 w-full md:w-[200px]  bg-green-600 text-white font-semibold rounded-sm cursor-pointer"
              onClick={applyBudget}
            >
              Apply
            </button>
          </div>
          <div className=" flex items-center gap-[10px]">
            <span className=" text-gray-500 font-light hidden lg:flex">
              SortBy
            </span>
            <select
              className="border-[1px] border-solid border-[#ccc] p-3 outline-none"
              value={sort}
              onChange={handleSort}
            >
              <option value="No Sort">No Sort</option>
              <option value="Top Rated">Top Rated</option>
              <option value="No of Orders">No of Orders</option>
            </select>
          </div>
        </div>
        <div
          className={`flex items-center  flex-wrap justify-center sm:gap-12 lg:gap-4 md:justify-normal`}
        >
          {filteredGigs &&
            filteredGigs?.map((obj) => {
              return <GigCard key={obj.id} {...obj} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
