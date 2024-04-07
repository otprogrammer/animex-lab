"use client";
import SettingsDropdown from "../SettingsDropdown";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useSort } from "../../../store/store";
import { LuArrowDownUp } from "react-icons/lu";
import { isMobile } from "@oplayer/core";
import { Select, SelectItem } from "@nextui-org/react";

export default function EpisodesController({
  isZoro,
  setIsZoro,
  animeData,
  fetchSub,
  setIsSub,
  fetchDub,
  setShowEpisodes,
  epId,
}) {
  const { isSort, enableIsSort, disableIsSort } = useSort();

  return (
    <div
      className={`w-full  rounded-md px-3 flex
              
             justify-end items-center  gap-2 py-1.5 `}
    >
      <Select
        // labelPlacement={placement}
        defaultSelectedKeys={["server1"]}
        className="p-0 w-[120px]"
      >
        <SelectItem onClick={() => {
              setIsZoro(false);
              // setIframe(false);
            }} key={"server1"} value="Server 1">
          Server 1
        </SelectItem>

        {animeData?.zoroepisodes?.length > 0 && (
          <SelectItem
            key={"server2"}
            value="Server 2"
            onClick={() => setIsZoro(true)}
          >
            Server 2
          </SelectItem>
        )}
      </Select>
      
      <label className="swap">
        <input type="checkbox" />

        <div
          className={`${
            epId && epId?.includes("dub") ? "swap-off" : "swap-on"
          } txt-primary`}
          onClick={() => {
            fetchDub();
            setIsSub(false);
          }}
        >
          DUB
        </div>
        <div
          className={`${
            epId && !epId?.includes("dub") ? "swap-off" : "swap-on"
          } txt-primary`}
          onClick={fetchSub}
        >
          SUB
        </div>
      </label>
      <div
        title="Sort Episodes"
        onClick={isSort ? disableIsSort : enableIsSort}
        aria-label="Sort Episodes"
        className=" relative cursor-pointer text-white hover:txt-primary self-center"
      >
        <LuArrowDownUp size={22} />
      </div>

      {/* <div
        title="Show/Hide Eps"
        onClick={() => setShowEpisodes((t) => !t)}
        className="relative  cursor-pointer text-white hover:txt-primary"
        aria-label="Show/Hide Eps"
      >
        <Icon icon="system-uicons:episodes" width={25} strokeWidth={1.5} />
      </div> */}
      <SettingsDropdown />
    </div>
  );
}
