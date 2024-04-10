"use client"
import React, { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, Pagination } from "@nextui-org/react";
import { Transition } from "@headlessui/react";
import CardContainer from "../container/CardContainer";
import { useRouter } from "next/navigation";
import ListCard from "../card/ListCard";
import WatchCard from "../card/WatchCard";
import LatestContainer from "../container/LatestContainer";
import { isMobile } from "@oplayer/core";

type HomeContainerTabs = {
  Favorites: any[];
  WatchList: any[];
  PlayList: any;
  refresh:any
};

export default function UserTab({
  Favorites,
  WatchList,
  PlayList,
  refresh
}: HomeContainerTabs) {
  const [selected, setSelected] = React.useState("Favorites");
  let [categories] = useState({
    Favorites: Favorites,
    WatchList: WatchList,
    PlayList: PlayList,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [animesPerPage] = useState(20);
  const router = useRouter()


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    

  };

  const slicedFavs = Favorites?.slice(
    (currentPage - 1) * animesPerPage,
    currentPage * animesPerPage
  );
  useEffect(() => {
console.log(Favorites)
  },[Favorites])

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        radius="sm"
        variant="bordered"
      >
          

          <Tab
            title="Favorites"
            
          >
            <Transition
              appear={true}
              as={"div"}
              show={true}
              enter="transform transition duration-[500ms]"
              enterFrom="opacity-0 scale-[0.90]"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              
                <div className="overflow-hidden w-full ">
                <Pagination
      size={isMobile ? "sm" : "lg"}
        isCompact
        showShadow
        showControls
        total={Math.ceil(Favorites?.length / animesPerPage)}
        initialPage={currentPage}
        onChange={handlePageChange}
        className="w-fit flex justify-center"
        classNames={{
          wrapper: "divide-x-2 divide-black",
          prev: "!border-transparent",
          cursor: "bg-red-600 text-white font-bold",
        }}
      />
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-1 mt-4">
                  {slicedFavs?.map((anime: any, index: number) => (
                    <div key={index}>
                      <ListCard
                        title={`${anime?.title}`}
                        image_url={anime?.image_url}
                        heading={"UserList"}
                        id={anime?.anime_id}
                        refresh={refresh}
                      />
                    </div>
                  ))}
                </div>
              </div>
               
              

              {/* <GridContainer data={posts} heading={idx == 0 ? "Latest" : idx === 1 ? "Trending" : "List"}/> */}
            </Transition>
          </Tab>

          <Tab
            title="History"
            className="md:p-2"
            
          >
            <Transition
              appear={true}
              as={"div"}
              show={true}
              enter="transform transition duration-[500ms]"
              enterFrom="opacity-0 scale-[0.90]"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >

              
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-2 lg:p-3 lg:mx-6">
                {WatchList?.map((a: any, i: number) => (
                  <WatchCard
                    key={i}
                    refresh={refresh}
                    {...a}
                    heading={"User WatchList"}
                  />
                ))}
                {WatchList?.length > 0 ? (
                  <div />
                ) : (
                  // <Emessage message={"Watch Your Favourites Animes"} />
                  <div />
                )}
              </div>
               

              {/* <GridContainer data={posts} heading={idx == 0 ? "Latest" : idx === 1 ? "Trending" : "List"}/> */}
            </Transition>
          </Tab>

          <Tab
            title="Playlist"
           
          >
            <Transition
              appear={true}
              as={"div"}
              show={true}
              enter="transform transition duration-[500ms]"
              enterFrom="opacity-0 scale-[0.90]"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <Card>
                <CardBody>
                {/* <CardContainer
                    data={Favorites}
                    heading="Favorites"
                    refresh={refresh}
                  /> */}
                </CardBody>
              </Card>

              {/* <GridContainer data={posts} heading={idx == 0 ? "Latest" : idx === 1 ? "Trending" : "List"}/> */}
            </Transition>
          </Tab>
      
      </Tabs>
    </div>
  );
}
