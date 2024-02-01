"use client";
import React, { useEffect, useState } from "react";
import {
  useUser,
  useSupabaseClient,
  useSession,
} from "@supabase/auth-helpers-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { BsInfoLg } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { RiHistoryLine, RiPlayList2Line } from "react-icons/ri";
import {
  AiFillHeart,
  AiOutlineLoading3Quarters,
  AiOutlineUpload,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import supabase from "../../../../utils/supabase";
import Card from "@/components/card/Card";
import Backdrop from "@/components/backdrop/Backdrop";
import { useAuth } from "@/components/hooks/Auth";
import ListCard from "@/components/card/ListCard";
import WatchCard from "@/components/card/WatchCard";

const navbar = [
  {
    name: "FAVORITES",
    icon: <FaHeart size={20} color="gray" />,
  },
  {
    name: "WATCHLIST",
    icon: <RiHistoryLine size={20} color="gray" />,
  },
  {
    name: "PLAYLIST",
    icon: <RiPlayList2Line size={20} color="gray" />,
  },
];

function Profile() {
  //   const supabase = useSupabaseClient();
  const session = useSession();
  const { user } = useAuth();

  const user_id: any = useUser();
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [favs, setFavs] = useState([]);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [data, setData] = useState<any>([]);
  const [currentNav, setCurrentNav] = useState("FAVORITES");
  const [isEdit, setIsEdit] = useState(false);
  const [uploading, setUploading] = useState(false);
  // const { watchList } = useSelector((state) => state);
  const [watchList, setWatchList] = useState([]);
  // const sortedList = watchList.sort((a:any,b:any) => b?.time - a?.time);
  const [refresh, setRefresh] = useState(false);
  const [file, setFile] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  // const {user} :any = useAuth()
  const [coverFile, setCoverFile] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState("FAVORITES");

  // const { watchList } = useSelector((state) => state);

  useEffect(() => {
    getUserWatchList();
    // updateProfile({avatar_url:"test"})

    getProfile();
  }, [session, id, watchList?.length, refresh]);
  console.log(user_id);
  useEffect(() => {}, [refresh]);

  console.log(user);

  const removeAnimeFromWatchlist = async (anime_id: any) => {
    await supabase.rpc("delete_watchlist_id", {
      user_id: "c3a476e3-2a01-4430-b2db-7718a4eb5ac2",
      anime_id: anime_id,
    });
  };
  const handleFileCoverChange = (e: any) => {
    const selectedFile = e.target.files[0];
    const reader: any = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      setCoverFile(selectedFile);
      setCoverUrl(reader.result);
      handleCoverUpload(selectedFile);
    };
  };

  const handleFileAvatarChange = (e: any) => {
    const sFile = e.target.files[0];
    console.log(e.target.files);
    const rd: any = new FileReader();
    rd.readAsDataURL(sFile);
    rd.onloadend = () => {
      setAvatarFile(sFile);
      setAvatarUrl(rd.result);
      handleUpload(sFile);
    };
  };

  const handleUpload = (avatarF: any) => {
    setUploading(true);

    const clientId = "2cbdd925473cd2a";
    const formData = new FormData();
    formData.append("image", avatarF);

    axios
      .post("https://api.imgur.com/3/image", formData, {
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
      })
      .then((response) => {
        const imageLink = response.data.data.link;
        const imageId = response.data.data.id;
        setUploading(false);

        setAvatarUrl(imageLink);
        updateProfile({ avatar_url: imageLink } as any);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCoverUpload = (coverF: any) => {
    setUploading(true);

    const clientId = "2cbdd925473cd2a";
    const formData = new FormData();
    formData.append("image", coverF);

    axios
      .post("https://api.imgur.com/3/image", formData, {
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
      })
      .then((response) => {
        const imageLink = response.data.data.link;
        const imageId = response.data.data.id;
        setUploading(false);
        setCoverUrl(imageLink);
        updateProfile({ coverimage: imageLink } as any);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserWatchList = async () => {
    const { data }: any = await supabase
      .from("profiles")
      .select("watchlist")
      .eq("username", id);
    setWatchList(data[0].watchlist);
    await supabase.from("auth").select("*");
  };

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`*`)
        .eq("username", id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProfileId(data.id);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setCoverUrl(data.coverimage);
        setData(data);
        setFavs(data.favs);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
    coverimage,
  }: any) {
    try {
      setLoading(true);

      // const updates = {
      //   id: user.id,
      //   username,
      //   website,
      //   description,
      //   avatar_url,
      //   updated_at: new Date().toISOString(),
      // };

      await supabase.auth.updateUser({
        data: {
          // full_name: 'John',
          // username: username,
          avatar_url: avatar_url,
          coverimage: coverimage,
        },
      });

      await supabase
        .from("profiles")
        .update({
          avatar_url: avatar_url,
          coverimage: coverimage,
          updated_at: new Date().toISOString(),
        })
        .eq("id", data?.id);
      await supabase.auth.refreshSession();
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full  overflow-hidden profile">
      <div>
        <div className="relative">
          <img
            className="h-[420px] w-full object-cover bg-center"
            src={coverUrl || ""}
            alt="test"
          />
          {user?.user_metadata.username === username && (
            <div>
              <label
                className=" block absolute top-[1rem] right-3  max-w-fit"
                htmlFor="single"
              >
                <span className="py-2 px-3.5 bg-red-600 rounded-sm text-gray-200 font-bold cursor-pointer hover:bg-red-700">
                  Edit Cover
                </span>

                {/* <AiOutlineUpload size={24} strokeWidth={2.5} /> */}
              </label>
              <input
                style={{
                  visibility: "hidden",
                  position: "absolute",
                }}
                type="file"
                id="single"
                accept="image/*"
                onChange={handleFileCoverChange}
                // disabled={uploading}
              />
            </div>
          )}
        </div>{" "}
        
        <div className="h-[4rem] w-full relative flex justify-center bg-[#0e0e0e] items-start">
          <div className=" grid grid-cols-3  lg:max-w-[85%] xl:max-w-[75%] ">
            {navbar.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setActiveItem(item.name);
                }}
                // onClick={() => setCurrentNav(item.name)}
                className={`flex py-2.5 px-3.5 flex-col gap-[4px] items-center text-sm cursor-pointer `}
              >
                {item.icon}
                <h1 className="text-gray-300">{item.name}</h1>
              </div>
            ))}
            <hr
              className={`hidden lg:block h-0.5 w-full transition-all duration-500 ${
                activeIndex === 1
                  ? "ml-[100%]"
                  : activeIndex === 2
                  ? "ml-[200%]"
                  : "ml-0"
              } bg-white`}
            />
          </div>
        </div>
      </div>

      <div className="absolute w-full flex  justify-between -mt-[10rem] items-center gap-1">
          <div className="flex items-end gap-0.5 relative z-[1] ml-2 md:ml-14 w-fit">
            <img
              src={`${avatar_url}`}
              className="rounded-full h-[80px] md:h-[120px] "
              alt="Selected Image"
            />

            {user?.user_metadata.username === username && (
              <div className="relative">
                <label
                  className=" block absolute top-[-6rem] lg:top-[-8rem] right-0 max-w-fit text-white"
                  htmlFor="avatar"
                >
                  {uploading ? (
                    <AiOutlineLoading3Quarters
                      className="animate-spin"
                      size={24}
                      strokeWidth={2.5}
                    />
                  ) : (
                    <AiOutlineUpload size={24} strokeWidth={2.5} />
                  )}
                </label>
                <input
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                  }}
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleFileAvatarChange}
                  // disabled={uploading}
                />
              </div>
            )}
                      <small className=" text-xl text-neutral-300">{username}</small>

          </div>
          <div className="text-white flex items-center absolute right-3 top-0 h-full">
            {user?.user_metadata.username === username && (
              <span
                onClick={() => setIsEdit(true)}
                className="bg-red-600 py-2 px-3.5 rounded-sm cursor-pointer hover:-translate-y-[1px]"
              >
                Edit Channel
              </span>
            )}
          </div>
        </div>
      <div className="flex flex-col lg:flex-row gap-5 py-6 px-2 lg:px-8 mb-12 relative text-gray-50">
        <div
          style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          className=" py-1 px-2  w-full h-fit lg:w-[340px] rounded-lg bg-[#0e0e0e] lg:border-[1px] border-neutral-900"
        >
          <div className="p-2 border-b-[1px] border-neutral-900">
            <h1 className="text-2xl text-center">Overview</h1>
          </div>
          <div className="p-3">
            <div className="flex gap-2 items-center">
              <BsInfoLg />
              <h1 className="italic">DESCRIPTION</h1>
            </div>

            <p className="text-gray-400 text-md text-center p-2">
              {data?.description || "Nothing Here Yet"}
            </p>
          </div>
          <div className="p-3">
            <div className="flex gap-2 items-center">
              <IoShareSocial />
              <h1 className="italic">SOCIAL</h1>
            </div>

            <p className="text-gray-400 text-md text-center p-2">
              {data?.description || "Nothing Here Yet"}
            </p>
          </div>
          <div className="p-3">
            <div className="flex gap-2 items-center">
              <IoShareSocial />
              <h1 className="italic">WEBSITE</h1>
            </div>

            <p className="text-gray-400 text-md text-center p-2">
              {data?.website || "Nothing Here Yet"}
            </p>
          </div>
        </div>

        <div className="w-full">
          {/* <div className=" w-full bg-[#1116]">
            <div className="flex gap-2">
              {navbar.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentNav(item.name)}
                  className={`flex py-2.5 px-3.5 flex-col gap-[4px] items-center text-sm cursor-pointer ${
                    currentNav === item.name && "border-b-2 border-red-500"
                  }`}
                >
                  {item.icon}
                  <h1 className="text-gray-300">{item.name}</h1>
                </div>
              ))}
            </div>
          </div> */}
          <div className="overflow-hidden w-full">
            {activeItem === "FAVORITES" && (
              <div className="overflow-hidden w-full xl:px-16">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-2 mt-4">
                  {favs?.map((anime: any, index: number) => (
                    <div key={index}>
                      <ListCard
                        title={`${anime?.title}`}
                        image_url={anime?.image_url}
                        heading={"UserList"}
                        id={anime?.id}
                        refresh={() => setRefresh(!refresh)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className=" w-full lg:px-5">
            {activeItem === "WATCHLIST" && (
              <div className="mt-2 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 lg:p-3">
                {watchList?.map((a: any, i: number) => (
                  <WatchCard
                    key={i}
                    refresh={() => setRefresh(true)}
                    {...a}
                    heading={"WatchList"}
                  />
                ))}
                {watchList?.length > 0 ? (
                  <div />
                ) : (
                  // <Emessage message={"Watch Your Favourites Animes"} />
                  <div />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div>
        {session && (

      <Account session={session}/>
        )}
      </div> */}

      {/* {isEdit && (
        <Backdrop onClick={() => setIsEdit(false)}>
          <Account session={user}  web_site={data?.website} desc={data?.description}/>
        </Backdrop>
      )}  */}
    </div>
  );
}

export default Profile;
