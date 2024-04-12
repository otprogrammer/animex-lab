"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import GridContainer from "../container/GridContainer";
// import { watchList } from '../watchlist/WatchList'
import WatchList from "../watchlist/WatchList";
import MyList from "../watchlist/MyList";
import Airing from "../schedule/Schedule";
import { getWatchList } from "../watchlist/getWatchList";
import { getAnimeList } from "../watchlist/getAnimeList";
import { Button, Chip } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import LatestContainer from "../container/LatestContainer";

type HomeContainerTabs = {
  Latest: any[];
  Trending: any[];
  MyList: any;
};

export default function HomeTabs({ Latest, Trending }: HomeContainerTabs) {
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
  const [selected, setSelected] = React.useState("Favorites");

  const hrStyles = {
    marginLeft: `${activeIndex * 100}%`,
    transition: "margin-left 0.3s ease-in-out",
  };
  return (
    <div className="w-full md:px-2 mt-9  px-0">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        radius="sm"
        variant="underlined"
        color="danger"
        className="!flex w-fit mx-auto"
        classNames={{
          tabList:
            "gap-6 w-full justify-center relative rounded-none p-0 border-b border-divider",
          tab: " lg:w-[120px] px-0 h-12",
        }}
      >
        {Object.values(categories).map((posts, idx) => (
          <Tab
          key={idx}
            title={Object.keys(categories).map((t, id) => (
              <span key={id}>{idx === id && t}</span>
            ))}
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
              {
              idx === 0 ? <LatestContainer data={posts} heading={"Latest Episodes"}/> :
              idx === 1 ? (
                <GridContainer
                  data={posts}
                  heading={"Trending"}
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
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
