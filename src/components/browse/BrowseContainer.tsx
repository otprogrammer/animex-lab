"use client"
import React,{useState,useEffect,createContext ,useContext} from 'react'
import { genrelist, years, origin, seasons, rating, status, animeTypes, sort } from './BrowseVars';

import axios from 'axios';
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from 'react-icons/io5';
import Card from '@/components/card/Card';

import GridContainer from '../container/GridContainer';
import CustomDropdown from './DropDown';
import Pagination from '../pagination/Pagination';


export default function BrowserContainer() {

    const genresList = ["Special","TV"]; // replace with your list of genres
    // const SelectedStatusContext:any= createContext([]);
    const [isChecked, setIsChecked] = useState(false);
    const [data,setData] = useState<any>([])
    const [selectedSeasons,setSelectedSeasons] = useState([])
    const [selectedTypes,setSelectedTypes] = useState([])
    const [selectedRating,setSelectedRating] = useState([])
    const [selectedStatus,setSelectedStatus] = useState([])
    const [selectedOrigin,setSelectedOrigin] = useState([])
    const [selectedSort,setSelectedSort] = useState("score")

    const [selectedYears,setSelectedYears] = useState([])
    const [page,setPage] = useState<number>(1)
    const [loading,setLoading] = useState(true)
    const [refresh,setRefresh] = useState(false)
   

    const handleSelect = (selectedOptions:any) => {

        
        fetchData()
        setPage(1)
      };

      const handleRefresh = () => {
        setRefresh(true)
      }


      const handlePageChange = (page:any) => {
        setPage(page);
        // Perform any additional logic or data fetching based on the selected page
      };
    const handleCheckboxChange = (event:any) => {

        setIsChecked(!isChecked);
        localStorage.setItem("isAutoNext",isChecked as any)
      
    };
    useEffect(() =>  {
        setRefresh(false)
        setLoading(true)
        fetchData()
        
    },[page,refresh])

    // useEffect(() => {
    //     setSelectedStatusContext(selectedStatus);
    //   }, [selectedStatus]);

    const fetchData = async () => {
        let url = `https://ottoex.vercel.app/api/browse?status=${selectedStatus.join(',')}&season=${selectedSeasons.join(',')}&year=${selectedYears.join(',')}&type=${selectedTypes.join(',')}&countryoforigin=${selectedOrigin.join(',')}&rating=${selectedRating.join(',')}&sort=${selectedSort}&page=${page}`
        let req = await axios.get(url)
        let res = req.data

        setData(res)
        setLoading(false)
    

    }
    // const selectedStatusContext :any= [selectedStatus, setSelectedStatus];
    // const setSelectedStatusContext :any= selectedStatusContext[1];

    // console.log(selectedStatusContext)
  return (
    
    <div className='home_container w-full'>


      <div className='py-2'>

      {/* <label className="switch">
      <input type="checkbox" onChange={handleCheckboxChange}/>
      <div className="slider">
          <div className="circle">
              <svg className="pause" xmlSpace="preserve"  viewBox="0 0 32 32" y="0" x="0" height="12" width="12" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g>
                      <path data-original="#000000" fill="currentColor" data-name="Layer 33" d="M14 5v22a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3zm10-3h-3a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"></path>
                  </g>
              </svg>
              <svg className="play" xmlSpace="preserve"  viewBox="0 0 163.861 163.861" y="0" x="0" height="12" width="12" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g>
                      <path className="" data-original="#000000" fill="currentColor" d="M34.857 3.613C20.084-4.861 8.107 2.081 8.107 19.106v125.637c0 17.042 11.977 23.975 26.75 15.509L144.67 97.275c14.778-8.477 14.778-22.211 0-30.686L34.857 3.613z"></path>
                  </g>
              </svg>
          </div>
      </div>
  </label> */}
  <div className='flex-wrap flex gap-2 justify-center items-center'>
  <CustomDropdown refresh={handleRefresh} options={years} onSelect={handleSelect} title={"Year"} selectedOptions={selectedYears} setSelectedOptions={setSelectedYears}/>
  <CustomDropdown refresh={handleRefresh} options={status} onSelect={handleSelect} title={"Status"} selectedOptions={selectedStatus} setSelectedOptions={setSelectedStatus}/>
  <CustomDropdown refresh={handleRefresh} options={animeTypes} onSelect={handleSelect} title={"Type"} selectedOptions={selectedTypes} setSelectedOptions={setSelectedTypes}/>

  <CustomDropdown refresh={handleRefresh} options={origin} onSelect={handleSelect} title={"Country"} selectedOptions={selectedOrigin} setSelectedOptions={setSelectedOrigin}/>

  <CustomDropdown refresh={handleRefresh} options={seasons} onSelect={handleSelect} title={"Season"} selectedOptions={selectedSeasons} setSelectedOptions={setSelectedSeasons}/>
  <CustomDropdown refresh={handleRefresh} options={rating} onSelect={handleSelect} title={"Rating"} selectedOptions={selectedRating} setSelectedOptions={setSelectedRating}/>
  <CustomDropdown refresh={handleRefresh} options={sort} onSelect={handleSelect}  title={"Sort"} selectedOptions={selectedSort} setSelectedOptions={setSelectedSort}/>

  </div>


      </div>

      <div className="items-center  text-xs text-white sm:space-y-0 sm:space-x-3 sm:flex">
      <Pagination
        currentPage={page}
        totalPages={data?.total_pages}
        handlePageChange={handlePageChange}
      />
	
</div>

{loading ? "" : data?.data?.length < 1 ? "<NotFound />" : (

<GridContainer data={data.data}    heading={"Browse"} /> 

//       <div className='mt-2 grid grid-cols-5 xl:grid-cols-8 gap-2 p-3'>

//       {data?.data?.map((a:any,i:number) => (
//   <div key={i}>
//   <Card {...a}  url={a.anime_id} heading={"Browse"} released={a.year} animeType={a.type} image_url={a.poster_path && `https://image.tmdb.org/t/p/original${a.poster_path}` ||a.coverimage}/>
//   </div>
// ))}

//       </div>
)}

        {/* <BrowserContainer /> */}
    </div>
  )
}
