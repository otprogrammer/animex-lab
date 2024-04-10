"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/Auth";
import { FaEdit, FaHeart, FaRegEdit, FaUser } from "react-icons/fa";
import { RiHistoryLine, RiPlayList2Line } from "react-icons/ri";
import ProfileTab from "../tabs/ProfileTab";
import { BsInfoLg } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlineLoading3Quarters, AiOutlineUpload } from "react-icons/ai";
import axios from "axios";
import Account from "./Account";
import UserTab from "../tabs/UserTab";
import { useParams } from "next/navigation";
import supabase from "../../../utils/supabase";
import { Button, Tooltip } from "@nextui-org/react";
import { CgUser, CgWebsite } from "react-icons/cg";

const headers = {
  authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
};

const UserData = ({ title, content, icon }) => {
  return (
    <div className="p-2">
      <div className="text-default-500 flex gap-2 items-center">
        {icon}
        <h1>{title}</h1>
      </div>

      <p className="text-gray-100 text-md  p-2">
        {content || "Nothing Here Yet"}
      </p>
    </div>
  );
};

export default function Profile() {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [avatar_url, setAvatarUrl] = useState("");
  const { user } = useAuth();
  // const [refresh,setRefresh] = useState(false)

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

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    let url = `https://tomeleyakujcqfaovrqr.supabase.co/rest/v1/profiles?select=*&username=eq.${id}
    `;

    let req = await fetch(url, {
      method: "GET",
      headers: headers,
      next: { tags: ["collection"] },
    });
    let res = await req.json();
    setData(res[0]);
    setAvatarUrl(res[0]?.avatar_url);
    setCoverUrl(res[0]?.coverimage);
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
        .eq("id", user?.id);
      await supabase.auth.refreshSession();
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
  return (
    <div className="w-full  overflow-hidden profile">
      <div>
        <div className="relative">
          <img
            className="h-[320px] w-full object-cover bg-center"
            src={data?.coverimage || ""}
            alt="test"
          />
          {user?.user_metadata.username === data?.username && (
            <div className="block absolute top-[1rem] right-3  max-w-fit">
              <label className="flex " htmlFor="single">
                <span className="flex gap-3 py-2 px-3.5 bg-red-600 rounded-sm text-gray-200 font-bold cursor-pointer hover:bg-red-700">
                  Edit Cover
                  <AiOutlineUpload size={24} strokeWidth={2.5} />
                  <input
                    style={{
                      visibility: "hidden",
                      position: "absolute",
                    }}
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={handleFileCoverChange}
                    disabled={uploading}
                  />
                </span>
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 py-6 px-2  mb-12 relative text-gray-50">
        <div
          style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          className=" relative py-1 px-2  w-full h-fit lg:w-[340px] rounded-lg bg-black/90 lg:border-[1px] border-neutral-900"
        >
          <div className="text-white   right-1 top-2 absolute ">
            {user?.user_metadata.username === data?.username && (
              <Tooltip
                showArrow
                placement="top"
                content="Edit Profile"
                classNames={{
                  base: [
                    // arrow color
                    "before:bg-neutral-400 dark:before:bg-white",
                  ],
                  content: [
                    "py-2 px-4 shadow-xl",
                    "text-black bg-gradient-to-br from-white to-neutral-400",
                  ],
                }}
              >
                <span
                  onClick={() => setIsEdit(true)}
                  className="  rounded-sm cursor-pointer hover:-translate-y-[1px]"
                >
                  <FaRegEdit size={26} />
                </span>
              </Tooltip>
            )}
          </div>
          <div className=" w-full flex  justify-center  items-center gap-1">
            <div className="flex items-end gap-0.5 relative z-[1]   w-fit">
              <img
                src={`${data?.avatar_url}`}
                className="rounded-full h-[80px] md:h-[120px] -mt-10  mx-auto "
                alt="Selected Image"
              />

              {user?.user_metadata.username === data?.username && (
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
                    disabled={uploading}
                  />
                </div>
              )}
            </div>
          </div>
          {/* <small className=" text-xl text-neutral-300">{data?.username}</small> */}

          <div className="p-2 border-b-[1px] border-neutral-900"></div>
          <div className="divide-y-1 divide-default-100">
            <UserData
              title={"Username"}
              content={data?.username}
              icon={<FaUser size={20} />}
            />

            <UserData
              title={"Description"}
              content={data?.description}
              icon={<BsInfoLg size={20} />}
            />
            <UserData
              title={"Social Media"}
              content={""}
              icon={<IoShareSocial size={20} />}
            />
            <UserData
              title={"Website"}
              content={data?.website}
              icon={<CgWebsite size={20} />}
            />
          </div>
        </div>

        <div className="w-full">
          <UserTab
            WatchList={data?.watchlist?.sort((a, b) => b.time - a.time)}
            Favorites={data?.favs}
            refresh={() => setRefresh(!refresh)}
          />
        </div>
      </div>

      <Account
        refresh={() => setRefresh(!refresh)}
        session={user}
        profileData={data}
        web_site={data?.website}
        isEdit={isEdit}
        onClose={() => setIsEdit(false)}
        desc={data?.description}
      />
    </div>
  );
}
