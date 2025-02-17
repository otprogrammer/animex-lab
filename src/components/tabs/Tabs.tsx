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

type HomeContainerTabs = {
  Latest: any[];
  Trending: any[];
  MyList: any;
};

export default function Tabs({ Latest, Trending }: HomeContainerTabs) {
  let [categories] = useState({
    Latest: Latest,
    Trending: Trending,
    MyList: [],
    History: [],
    Schedule: [],
  });
  const [refresh, setRefresh] = useState(false);

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
    <div className="w-full px-2 mt-9  sm:px-0">
      <Tab.Group>
        <Tab.List className=" grid grid-cols-5 w-full lg:max-w-[85%] divide-x-[1px] divide-neutral-800 xl:max-w-[75%] text-[12px] md:text-[16px] mx-auto place-self-center">
          {Object.keys(categories).map((category, index) => (
            
            
            
              
            <Tab

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
              
            >

              {category}
              
            </Tab>
          ))}
          <hr
            className="hidden md:block  h-0.5 w-full bg-white"
            style={hrStyles}
          />
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
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
                {idx < 2 ? (
                  <GridContainer
                    data={posts}
                    heading={idx == 0 ? "Latest" : "Trending"}
                  />
                ) : idx == 2 ? (
                  // <MyList />
                  <GridContainer
                    data={getAnimeList()}
                    heading="MyList"
                    refresh={() => setRefresh((t) => !t)}
                  />
                ) : idx == 3 ? (
                  // <WatchList />
                  <GridContainer
                    data={getWatchList()}
                    heading="WatchList"
                    refresh={() => setRefresh((t) => !t)}
                  />
                ) : (
                  <Airing />
                )}
                {/* <GridContainer data={posts} heading={idx == 0 ? "Latest" : idx === 1 ? "Trending" : "List"}/> */}
              </Transition>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
