"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useDetailsModal } from "../../../store/store";
import DetailsTabs from "../tabs/DetailsTabs";
import Overview from "../details/Overview";
import { useRouter } from "next/navigation";
import supabase from "../../../utils/supabase";
import { appendMissingEpisodes } from "../../../lib/appendeps";
import DetailsModalTab from "../tabs/DetailsModalTab";
import { toast } from "react-toastify";
import { handleAddAnime, handleDeleteAnime } from "../../../lib/bookmark";
import { saveAnimeToDb } from "../../../lib/animetodatabase";
import { useAuth } from "../hooks/Auth";


const Msg = ({ title, message }: MsgProps) => {
  return (
    <div className="flex flex-col">
      <span>
        <span className="font-bold text-gray-200">{title}</span> {message}
      </span>

      <span className="text-blue-800 text-xl "></span>
    </div>
  );
};

export default function DetailsModal({
  gogoData,
  
  currentEpisode,
}) {
  const { isOpen, closeModal, getAnilistData, id, clearId, anilistData } =
    useDetailsModal();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [animeData, setAnimeData] = useState<any>();
  const [showTrailer, setShowTrailer] = useState(false);
const {user} = useAuth()
  const [click, setClick] = useState(false);
  const [episodesList, setEpisodesList] = useState<any[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData();
    getAnilistData();

  }, [id]);

  const handleEpisodeRoute = (epId: any, epNumber: number) => {
    router.push(`/anime/${id}?id=${epId?.split("-episode")[0]}&ep=${epNumber}`);
  };

  
  useEffect(() => {
    fetchGogoData();

  }, [animeData?.anime_id]);
  

  useEffect(() => {
    const storedAnimeList =
      typeof window !== "undefined" && localStorage.getItem("animeList");
    const animeList = storedAnimeList ? JSON.parse(storedAnimeList) : [];

    const current = animeList.filter(
      (item: any) =>
        item.anime_id == animeData?.anime_id || item.mal_id == animeData?.mal_id
    );
    current.length > 0 ? setClick(true) : setClick(false);
  }, [loading]);

  const fetchGogoData = async () => {
    if (animeData?.anime_id) {
      let url = `https://animexgogoanimeapi.vercel.app/gogoanime/info/${animeData?.anime_id}`;
      let req = await fetch(url);
      let res = await req.json();
      // setGogoData(res);
      if (animeData?.episodeslist?.length < 1) {
        setEpisodesList(res.episodes !== null && res.episodes);
      }
      if (animeData?.episodeslist?.length != res.episodes?.length) {
        setEpisodesList(appendMissingEpisodes(episodesList, res.episodes));
      }
    }
  };

  const fetchData = async () => {
    const { data }: any = await supabase
      .from("anime")
      .select("*")
      .or(`anime_id.eq.${id},mal_id.eq.${id},anilistid.eq.${id}`);

    // let url = `https://ottoex.vercel.app/api/anime/${id}`;
    // let req = await fetch(url);
    // let res = await req.json();
    setAnimeData(data?.filter((a: any) => !a.title.includes("(Dub)"))[0]);
    setEpisodesList(
      data?.filter((a: any) => !a.title.includes("(Dub)"))[0]?.episodeslist
    );
    setLoading(false);
  };


  function handleClick() {
    if (click) {
      setClick(false);
      toast.error(
        <Msg
          title={animeData?.title}
          message="Was Removed From Your List"
        />,
        { theme: "dark" }
      );
      handleDeleteAnime(animeData);
    } else {
      handleAddAnime(animeData);
      if (user?.id) {
        saveAnimeToDb(user?.id, animeData || gogoData);
      }
      setClick(true);
      toast.success(
        <Msg
          title={animeData?.title }
          message="Was Added To Your List"
        />,
        { theme: "dark" }
      );
    }
  }
  const handleOnClose = () => {
    closeModal();
    clearId();
  };
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={handleOnClose}
        className="w-full h-fit max-w-7xl"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <DetailsModalTab
                Overview={
                  <Overview
                    animeData={animeData}
                    gogoData={gogoData as any}
                    handleClick={handleClick}
                    click={click}
                    handlePlay={() => {


                      router.push(
                        `/anime/${animeData?.anime_id}?id=${
                          episodesList?.[0]?.id?.split("-episode")[0]
                        }&ep=1
                    
                  `
                      )
                      closeModal()
                    }
                    }
                  />
                }
                Characters={anilistData?.characterPreview}
                Similar={anilistData?.recommendations}
                OP={animeData?.opening_themes}
                ED={animeData?.ending_themes}
                Relations={anilistData?.relations}
                Trailer={animeData?.trailer_url}
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
