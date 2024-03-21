"use client";
import React, { useState, useEffect, useContext } from "react";
// import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import Loader from "../loader/Loader";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
// import CardModal from "./CardModal";
// import Skeleton from "./Skeleton";
import Pagination from "../pagination/Pagination";
// import { LoadingContext } from "@/helper/fetchData";
import { Skeleton } from "@nextui-org/react";
import Card from "../card/Card";
import EpisodeCard from "../card/EpisodeCard";
import ListCard from "../card/ListCard";
import WatchCard from "../card/WatchCard";
import { useRouter } from "next/navigation";

interface CardContainerProps {
  data: any;
  heading?: any;
  goNext?: any;
  goPrev?: any;
  page?: any;
  handlePageChange?: any;
  totalPages?: any;
  refresh: any;
  loading?: any;
  slug?: any;
}
export default function CardContainer(props: CardContainerProps) {
  const [selected, setSelected] = useState(false);
  const [url, setUrl] = useState("");
  //   const loading = useContext(LoadingContext);

  const [p, setPage] = useState<number>(1);
const router = useRouter()
  const handleSelected = () => {
    setSelected(true);
  };
  return (
    <div className="home_container ">
      {/* {props.heading !== "Browse" && props.heading !== "Schedule" && (
        <div className="items-center  text-xs text-white pt-4">
          <Pagination
            currentPage={props.page}
            totalPages={props.totalPages}
            handlePageChange={props.handlePageChange}
            heading={props.heading}
          />
        </div>
      )}
       */}
      <div
        className={`min-w-full  grid ${
          props.heading === "Recently Added"
            ? "grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-9 "
            : props.heading === "WatchList" ||
              props.heading === "User WatchList"
            ? "grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-4 3xl:grid-cols-7"
            : "grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 3xl:grid-cols-8 "
        } gap-1.5 md:gap-2   px-0.5 py-2`}
      >
        {props.data?.map((a: any, i: number) => (
          <div
            onClick={() => {
              setUrl(
                a?.anime?.mappings?.mal ||
                  a.malId ||
                  a.anime_id ||
                  a.id ||
                  a.url
              );
            }}
            key={i}
          >
            {props.heading !== "WatchList" ? (
              <ListCard
                {...a}
                selected={handleSelected}
                heading={props.heading}
                refresh={props.refresh}
              />
            ) : (
              <WatchCard
                {...a}
                selected={handleSelected}
                heading={props.heading}
                refresh={props.refresh}
              />
            )}
          </div>
        ))}
      </div>

      {/* <AnimatePresence>
        {selected && (
          <CardModal
            id={url}
            handleClose={() => {
              setSelected(false);
            }}
          />
        )}
      </AnimatePresence> */}
      {props.heading !== "Browse" && props.heading !== "Schedule" && (
        <div className="items-center  text-xs text-white pt-4">
          <Pagination
            currentPage={props.page}
            totalPages={props.totalPages}
            handlePageChange={props.handlePageChange}
            heading={props.heading}
          />
        </div>
      )}
    </div>
  );
}
