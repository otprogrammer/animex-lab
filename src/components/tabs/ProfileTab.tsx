"use client";
import { useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import GridContainer from "../container/GridContainer";
// import { watchList } from '../watchlist/WatchList'
import WatchList from "../watchlist/WatchList";
import MyList from "../watchlist/MyList";
import Airing from "../schedule/Schedule";
import { getWatchList } from "../watchlist/getWatchList";
import { getAnimeList } from "../watchlist/getAnimeList";
import { Button } from "@nextui-org/react";
import CardContainer from "../container/CardContainer";
import ListCard from "../card/ListCard";

type HomeContainerTabs = {
    Favorites: any[];
    WatchList: any[];
    PlayList: any;
    refresh:any
};

export default function ProfileTab({ Favorites, WatchList,PlayList,refresh }: HomeContainerTabs) {
  let [categories] = useState({
    Favorites: Favorites,
    WatchList: WatchList,
    PlayList:PlayList
    
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number, itemName: string) => {
    setActiveIndex(index);
    // Do something with the itemName, if needed
  };
  const hrStyles = {
    marginLeft: `${activeIndex * 100}%`,
    transition: "margin-left 0.3s ease-in-out",
  };
  return (
    <div className="w-full px-2  sm:px-0">
      <Tab.Group>
        <Tab.List className=" grid grid-cols-3 w-full lg:max-w-[85%] divide-x-[1px] divide-neutral-800 xl:max-w-[75%] text-[12px] md:text-[16px] mx-auto place-self-center">
          {Object.keys(categories).map((category, index) => (
            <Button 
            className={`
              focus:outline-none focus:border-none w-full
              text-white
              ${
                activeIndex === index
                  ? "text-red-600 bg-black  hover:text-white"
                  : "hover:txt-primary bg-black/25"
              } text-center  cursor-pointer font-bold`}
            key={index}
            onClick={() => handleItemClick(index, category)}
            radius="none">

            
            <Tab
               className="w-full focus:outline-none focus:border-none p-2 mx-[1px] "
              
            >
              

              {category}
              
            </Tab>
            </Button>
          ))}
          <hr
            className="hidden md:block  h-0.5 w-full bg-white"
            style={hrStyles}
          />
        </Tab.List>
        <Tab.Panels className="mt-2">
          {/* {Object.values(categories).map((posts, idx) => ( */}
            <Tab.Panel >
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
          
                  <CardContainer
                    data={Favorites}
                    heading="Favourites"
                    refresh={refresh}
                  />
                
                {/* <GridContainer data={posts} heading={idx == 0 ? "Latest" : idx === 1 ? "Trending" : "List"}/> */}
              </Transition>
            </Tab.Panel>

            
            <Tab.Panel >
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
          
          <div className="overflow-hidden w-full xl:px-16">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-2 mt-4">
                  {Favorites?.map((anime: any, index: number) => (
                    <div key={index}>
                      <ListCard
                        title={`${anime?.title}`}
                        image_url={anime?.image_url}
                        heading={"UserList"}
                        id={anime?.id}
                        refresh={refresh}
                      />
                    </div>
                  ))}
                </div>
              </div>
                
                {/* <GridContainer data={posts} heading={idx == 0 ? "Latest" : idx === 1 ? "Trending" : "List"}/> */}
              </Transition>
            </Tab.Panel>

            
          {/* ))} */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
