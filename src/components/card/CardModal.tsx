import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillStar, AiOutlineClose } from "react-icons/ai";
// import Backdrop from "../layout/BackDrop";
// import { motion } from "framer-motion";
import styled from "styled-components";
import { ImPlay2 } from "react-icons/im";
// import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";
// import { createClient } from '@supabase/supabase-js'
import Link from "next/link";
import { FaPlay, FaYoutube } from "react-icons/fa";
import ReactPlayer from "react-player";
import axios from "axios";
import { CgClose } from "react-icons/cg";
// import Episodes from "../episodes/EpisodeContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";
import supabase from "../../../utils/supabase";
import { LuLoader } from "react-icons/lu";
import Backdrop from "../backdrop/Backdrop";
import Episodes from "../episodes/Episodes";
import { Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { appendMissingEpisodes } from "../../../lib/appendeps";

// import { HeartSwitch } from "@anatoliygatt/heart-switch";
// import { supabase } from "@/supabase";
// import { useAuth } from "@/hooks/Auth";

// const supabaseUrl = 'https://tomeleyakujcqfaovrqr.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbWVsZXlha3VqY3FmYW92cnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMjMzMDgsImV4cCI6MTk4ODU5OTMwOH0.d4pv9u8o0zyCrCyVB0Qv1ZP-Qsn7B86ht63SG8r_HMA';

// const supabase = createClient(supabaseUrl, supabaseKey);
// const query = `SELECT * FROM malid`;

const navbar = [
  { name: "Overview", key: 0 },
  { name: "Episodes", key: 1 },
  
];

const Msg = ({ title, message }:any) => {
  return (
    <div className="flex flex-col">
      <span>
        <span className="font-bold text-gray-200">{title}</span> {message}
      </span>

      <span className="text-blue-800 text-xl "></span>
    </div>
  );
};

function CardModal({ id, handleClose }: any) {
  const [data, setData] = useState([]);
//   const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [animeData, setAnimeData] = useState<any>();
  const [showTrailer, setShowTrailer] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");
  const [activeIndex, setActiveIndex] = useState(0);
  const [click, setClick] = useState(false);
//   const {user} = useAuth();
const [episodesList, setEpisodesList] = useState<any[]>([])

const router = useRouter()
  const ImageContainer = styled.div`
position: relative ;
overflow:hidden;
background:black;
display:flex;
width:100%;
justify-content:center;
align-items:center;

height: 266px ;
 &::before {
  content: '';

  position:  absolute ;
  top: 0 ;
  right: 0 ;
  bottom: 0 ;
  left: 0 ;
  filter : ${
    animeData?.bannerimage
      ? "blur(0px) brightness(0.4)"
      : "blur(8px) brightness(0.4)"
  };
  background-image: var(--bg-image) ;
  background-size: cover ;
  background-position: center ;
  
  background-repeat:no-repeat;
  box-shadow: #3f4145 0px 11px 0px -10px inset, #030304 0px -45px 50px -10px inset;

  
   
}
  
    
  }
`;

  useEffect(() => {
    setLoading(true);
    fetchData();
    
  
    // fetchNeon()
  }, []);


  useEffect(() => {
 
    
    fetchGogoData()
  
    // fetchNeon()
  }, [animeData?.anime_id]);
  // const fetchData = async () => {
  //   let url = `https://ottoex.vercel.app/api/anime/${id}`;
  //   let req = await fetch(url);
  //   let res = await req.json();
  //   setAnimeData(res[0]);
  //   setLoading(false);
  // };

  useEffect(() => {
    const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("animeList");
    const animeList = storedAnimeList ? JSON.parse(storedAnimeList) : [];

    const current = animeList.filter((item: any) => item.anime_id == animeData?.anime_id || item.mal_id == animeData?.mal_id);
    current.length > 0 ? setClick(true) : setClick(false);
  }, [loading]);


  const fetchGogoData = async () => {
    if (animeData?.anime_id) {

      let url = `https://animexgogoanimeapi.vercel.app/gogoanime/info/${animeData?.anime_id}`;
      let req = await fetch(url);
      let res = await req.json();
      // setGogoData(res);
      if (
       
       animeData?.episodeslist?.length < 1
      ) {
        setEpisodesList(res.episodes !== null && res.episodes);
      }
      if (animeData?.episodeslist?.length != res.episodes?.length) {
        setEpisodesList(
          appendMissingEpisodes(episodesList, res.episodes)
        );
      }
    }
  };

  console.log(animeData?.episodeslist)
  const fetchData = async () => {

    const {data}  : any = await supabase.from("anime").select("*").or(`anime_id.eq.${id},mal_id.eq.${id}`)
    
    // let url = `https://ottoex.vercel.app/api/anime/${id}`;
    // let req = await fetch(url);
    // let res = await req.json();
    setAnimeData(data?.filter((a:any) => !a.title.includes("(Dub)"))[0])
    setEpisodesList(data?.filter((a:any) => !a.title.includes("(Dub)"))[0]?.episodeslist)
    setLoading(false);

    
  };

//   const addAnime = async () => {
//     await supabase.rpc("append_favs", {
//       user_id: user?.id,
//       data: {
//         id: animeData?.anime_id,
//         image_url: animeData?.coverimage ,
//         title: animeData?.title ,
//         released: animeData?.year ,
//       },
//     });
//   };

  function handleAddAnime() {
    const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("animeList");
    let updatedAnimeList = storedAnimeList ? JSON.parse(storedAnimeList) : [];

    const animeIndex = updatedAnimeList.findIndex(
      (anime: any) => anime.anime_id === animeData?.anime_id 
    );

    if (animeIndex === -1) {
      updatedAnimeList = [...updatedAnimeList, animeData];
      typeof window !== "undefined" &&
        localStorage.setItem("animeList", JSON.stringify(updatedAnimeList));
        
    } else {
      console.log(`Anime '${animeData?.title}' already exists in the list`);
    }
  }


  function handleDeleteAnime() {
    const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("animeList");
    let updatedAnimeList = storedAnimeList ? JSON.parse(storedAnimeList) : [];

    updatedAnimeList = updatedAnimeList.filter(
      (anime: any) => anime.anime_id !== animeData?.anime_id
    );

    typeof window !== "undefined" &&
      localStorage.setItem("animeList", JSON.stringify(updatedAnimeList));
  }
  function handleClick() {
    if (click) {
      setClick(false);
      handleDeleteAnime();
      toast.info(
        <Msg title={animeData?.title} message="Was Removed From Your List" />
      );
    } else {
      handleAddAnime();
      addAnime()
      setClick(true);
      toast.info(<Msg title={animeData?.title} message="Was Added To Your List" />);

    }
  }


  // const fetchTest = async () => {
  //   let req = await axios.get('https://api.animeflix.live/anime/episodes?id=21&dub=false')
  //   let res = req.data
  //   console.log(res)
  // }

  return (
    <Backdrop onClick={handleClose}>
      <Transition
              appear={true}
              as={"div"}
              show={id ? true : false}
              enter="transform transition duration-500"
              enterFrom="opacity-0 translate-y-[500px] duration-[800ms] scale-[0.70]"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-0 scale-95 translate-y-[-500px] duration-[800ms] "
              leaveTo="opacity-0 scale-95 translate-y-[-500px] duration-[800ms] "
              className={`w-full`}
            >


             
      <div
        // initial={{ y: "-100vh" }}
        // animate={{
        //   y: 0,
        //   transition: {
          
        //     type: "spring",
        //     stiffness: 130,
        //     damping: 15,
        //   },
        // }}
        // exit={{ y: "100vh" }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[900px] bg-[#060606]  max-h-[95VH] mx-auto shadow-2xl my-[2rem] overflow-y-scroll scroll-smooth text-white	 cursor-default my-12"
      >
        {loading ? (
          <LuLoader />
        ) : (
          <div className=" flex flex-col gap-3 h-full w-full p-1">
            <div className="overflow-hidden">
              {!showTrailer && (
                <ImageContainer
                  style={
                    {
                      "--bg-image": `url(${
                        animeData?.bannerimage || animeData?.coverimage
                      })`,
                    } as any
                  }
                >
                  <span
                  // onClick={handleClick}
                  className={` flex justify-center items-center cursor-pointer rounded-md p-2 hover:scale-110 transform transition-all duration-200`}
                >
                  {/* <HeartSwitch
                    checked={click ? true : false}
                    onChange={handleClick}
                    title="Bookmark"
                  /> */}
                  {/* {click ? (
                    <FaHeart size={24} color="red" />
                  ) : (
                    <FaHeart
                      className="hover:text-red-800"
                      size={24}
                      color="white"
                    />
                  )} */}
                </span>
                  <IoMdClose
                    onClick={handleClose}
                    size={30}
                    strokeWidth={2.5}
                    className="absolute cursor-pointer hover:scale-105 text-gray-200   rounded-full top-2 right-2 font-black"
                  />
                </ImageContainer>
              )}

              {showTrailer && (
                <div className="relative">
                  <button
                    className="text-white z-50 font-bold text-3xl bg-[#2229] rounded-full p-1 hover:bg-[#3334] hover:scale-105 absolute top-2 right-2"
                    onClick={() => setShowTrailer(false)}
                  >
                    <CgClose />
                  </button>
                  <div className=" pointer-events-none">
                    <ReactPlayer
                      url={`${animeData?.trailer_url}`}
                      width="100%"
                      height="350px"
                      config={{
                        youtube: {
                          playerVars: { modestbranding: 1 },
                        },
                      }}
                      playing
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              className={`${
                !showTrailer ? "-mt-20" : ""
              }  relative px-1 lg:px-4`}
            >
              <div className="flex justify-between w-full items-center">
                <h1 className="font-bold text-md lg:text-2xl txt-primary">
                  {animeData?.title}
                </h1>
                <div className="flex  gap-1 ">
                  <button
                    onClick={() =>
                      animeData?.status !== "Not yet aired" &&
                      router.push(`/anime/${animeData?.anime_id}`)
                    }
                    className="py-1.5 px-2.5 bg-blue-600 text-gray-200 rounded-sm  flex  items-center justify-center gap-2  hover:bg-blue-800 hover:scale-105 transition-all ease-in-out"
                  >
                    <BsInfoCircleFill size={16} />
                    <span className="mx-auto">Details</span>
                  </button>

                  <button
                    onClick={() => setShowTrailer(true)}
                    className="py-1.5 px-2.5 bg-red-600 text-gray-200 rounded-sm  flex  items-center gap-2  hover:bg-red-800  justify-center hover:scale-105 transition-all ease-in-out"
                  >
                    <FaYoutube size={18} />
                    <span className="mx-auto">Trailer</span>
                  </button>
                </div>
              </div>

              <div className=" text-gray-200 flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1 items-center">
                    <span>
                      <AiFillStar color="orange" />
                    </span>
                    {animeData?.score}
                  </div>
                  <span>
                    {animeData?.duration?.replace("min per ep", "Min")}
                  </span>
                  <span>{animeData?.type}</span>
                </div>
                <span className="text-gray-300">{animeData?.status}</span>

                
              </div>
            </div>
            <div
              className={`grid grid-cols-2 sticky  border-b-[0px] text-gray-200 justify-center  border-neutral-700 ${
                showTrailer ? "mt-[0]" : "mt-0"
              } transition-all ease-out duration-300`}
            >
              {navbar.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setActiveItem(item.name);
                    setActiveIndex(
                      navbar.filter((t: any) => t.name == item.name)[0].key
                    );
                  }}
                  className={`text-center p-2.5 hover:txt-primary bg-neutral-900/70 border-r-[2px] border-black text-[10px] md:text-sm cursor-pointer font-bold ${
                    activeItem === item.name
                      ? "txt-primary bg-neutral-950"
                      : ""
                  }`}
                >
                  <span>{item.name}</span>
                </div>
              ))}
              <hr
                className={` h-0.5 w-full transition-all duration-500 ${
                  activeIndex == 0 ? `ml-0` : "ml-[100%]"
                } bg-white`}
              />
            </div>
                {activeItem == "Overview" && (

            <div className="mb-4">


            

            <div className="px-2  text-left">
              <p className="px-2 text-[#fffdfd99] font-light">
                {animeData?.synopsis}
              </p>
            </div>
            <div className="py-1 flex justify-center ">
              <span
                className={`text-gray-400 flex flex-row flex-wrap justify-center my-2 w-full items-center`}
              >
                {animeData?.genres?.map((Item: any, index: number) => (
                  <Link href={`/genre/${Item}/1`} key={index}>
                    <span
                      key={index}
                      className={` py-1 px-5 mr-2  border-[1px]  cursor-pointer flex justify-center whitespace-nowrap items-center transform hover:-translate-y-[3px]  transition-transform duration-400`}
                    >
                      {Item}
                    </span>
                  </Link>
                ))}
              </span>
            </div>
            </div>
                )}

{activeItem === "Episodes" && (

  <Episodes
                  episodesList={episodesList}
                  handleEpisodeRoute={() => {}}
                  animeImg={animeData?.coverimage}
                  episodeNumber={1}
                  isModal={true}
                />
              

                
              )}
          </div>
        )}
      </div>
            </Transition>
    </Backdrop>
  );
}

export default CardModal;
