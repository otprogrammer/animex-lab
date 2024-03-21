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
import Account from "@/components/account/Account";
import { Profiler, useEffect, useState } from "react";
import Profile from "@/components/account/Profile";



function ProfilePage() {
  //   const supabase = useSupabaseClient();


    
  // const session = useSession();
  // const { user } = useAuth();

  // const user_id: any = useUser();
  // const router = useRouter();
  // const { id } = useParams();
  // const [currentNav, setCurrentNav] = useState("FAVORITES");
  // const [uploading, setUploading] = useState(false);
  // const { watchList } = useSelector((state) => state);
  // const [watchList, setWatchList] = useState([]);
  // const sortedList = watchList.sort((a:any,b:any) => b?.time - a?.time);
  // const [refresh, setRefresh] = useState(false);
  // const [file, setFile] = useState(null);
  // const [avatarFile, setAvatarFile] = useState(null);

  // const {user} :any = useAuth()
  // const [coverFile, setCoverFile] = useState(null);
  // const [coverUrl, setCoverUrl] = useState(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [activeItem, setActiveItem] = useState("FAVORITES");

  // const { watchList } = useSelector((state) => state);

  // useEffect(() => {
  //   getUserWatchList();
  //   // updateProfile({avatar_url:"test"})

  //   getProfile();
  // }, [session, id, watchList?.length, refresh]);
  
  const removeAnimeFromWatchlist = async (anime_id: any) => {
    await supabase.rpc("delete_watchlist_id", {
      user_id: "c3a476e3-2a01-4430-b2db-7718a4eb5ac2",
      anime_id: anime_id,
    });
  };
  // const handleFileCoverChange = (e: any) => {
  //   const selectedFile = e.target.files[0];
  //   const reader: any = new FileReader();
  //   reader.readAsDataURL(selectedFile);
  //   reader.onloadend = () => {
  //     setCoverFile(selectedFile);
  //     setCoverUrl(reader.result);
  //     handleCoverUpload(selectedFile);
  //   };
  // };

  // const handleFileAvatarChange = (e: any) => {
  //   const sFile = e.target.files[0];
  //   console.log(e.target.files);
  //   const rd: any = new FileReader();
  //   rd.readAsDataURL(sFile);
  //   rd.onloadend = () => {
  //     setAvatarFile(sFile);
  //     setAvatarUrl(rd.result);
  //     handleUpload(sFile);
  //   };
  // };

  // const handleUpload = (avatarF: any) => {
  //   setUploading(true);

  //   const clientId = "2cbdd925473cd2a";
  //   const formData = new FormData();
  //   formData.append("image", avatarF);

  //   axios
  //     .post("https://api.imgur.com/3/image", formData, {
  //       headers: {
  //         Authorization: `Client-ID ${clientId}`,
  //       },
  //     })
  //     .then((response) => {
  //       const imageLink = response.data.data.link;
  //       const imageId = response.data.data.id;
  //       setUploading(false);

  //       setAvatarUrl(imageLink);
  //       updateProfile({ avatar_url: imageLink } as any);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleCoverUpload = (coverF: any) => {
  //   setUploading(true);

  //   const clientId = "2cbdd925473cd2a";
  //   const formData = new FormData();
  //   formData.append("image", coverF);

  //   axios
  //     .post("https://api.imgur.com/3/image", formData, {
  //       headers: {
  //         Authorization: `Client-ID ${clientId}`,
  //       },
  //     })
  //     .then((response) => {
  //       const imageLink = response.data.data.link;
  //       const imageId = response.data.data.id;
  //       setUploading(false);
  //       setCoverUrl(imageLink);
  //       updateProfile({ coverimage: imageLink } as any);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const getUserWatchList = async () => {
  //   const { data }: any = await supabase
  //     .from("profiles")
  //     .select("watchlist")
  //     .eq("username", id);
  //   setWatchList(data[0].watchlist);
  //   await supabase.from("auth").select("*");
  // };

 

  

  return (
 <Profile /> 
  )
}

export default ProfilePage;
