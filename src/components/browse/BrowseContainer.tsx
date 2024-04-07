"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import {
  genrelist,
  years,
  origin,
  seasons,
  rating,
  status,
  animeTypes,
  sort,
} from "./BrowseVars";
import { Select, SelectItem, Spinner } from "@nextui-org/react";

import axios from "axios";
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";
import Card from "@/components/card/Card";

import GridContainer from "../container/GridContainer";
import CustomDropdown from "./DropDown";
import Pagination from "../pagination/Pagination";
import { Pagination as PG } from "@nextui-org/react";

interface Filter {
  value: Set<string> | string;
  content: string[];
  label: string;
  placeholder: string;
}
export default function BrowserContainer() {
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState<any>([]);

  const initialState: { [key: string]: Filter } = {
    selectedYears: {
      value: new Set([]),
      content: years,
      label: "Year",
      placeholder: "Year",
    },
    selectedSeasons: {
      value: new Set([]),
      content: seasons,
      label: "Season",
      placeholder: "Season",
    },
    selectedTypes: {
      value: new Set([]),
      content: animeTypes,
      label: "Type",
      placeholder: "Type",
    },
    selectedRatings: {
      value: new Set([]),
      content: rating,
      label: "Rating",
      placeholder: "Rating",
    },
    selectedStatus: {
      value: new Set([]),
      content: status,
      label: "Status",
      placeholder: "Status",
    },
    selectedOrigins: {
      value: new Set([]),
      content: origin,
      label: "Origin",
      placeholder: "Origin",
    },
    
  };

  const [filters, setFilters] = useState<typeof initialState>(initialState);

  const [selectedSort, setSelectedSort] = useState("score");

  const [selectedYears, setSelectedYears] = useState(new Set([]));
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleSelect = (selectedOptions: any) => {
    fetchData();
    setPage(1);
  };

  const handleRefresh = () => {
    setRefresh(true);
  };

  const handlePageChange = (page: any) => {
    setPage(page);
    // Perform any additional logic or data fetching based on the selected page
  };
  const handleCheckboxChange = (event: any) => {
    setIsChecked(!isChecked);
    localStorage.setItem("isAutoNext", isChecked as any);
  };
  useEffect(() => {
    setRefresh(false);
    setLoading(true);
    fetchData();
  }, [page, refresh, filters,selectedSort]);

  // useEffect(() => {
  //     setSelectedStatusContext(selectedStatus);
  //   }, [selectedStatus]);
  const handleFilterChange = (filterName: string, newValues: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: { ...prevFilters[filterName], value: new Set(newValues) },
    }));
  };
  const fetchData = async () => {
    let url = `https://ottoex.vercel.app/api/browse?status=${Array.from(
      filters.selectedStatus.value
    ).join(",")}&season=${Array.from(filters.selectedSeasons.value).join(
      ","
    )}&year=${Array.from(filters.selectedYears.value).join(
      ","
    )}&type=${Array.from(filters.selectedTypes.value).join(
      ","
    )}&countryoforigin=${Array.from(filters.selectedOrigins.value).join(
      ","
    )}&rating=${Array.from(filters.selectedRatings.value).join(",")}&sort=${
      selectedSort
    }&page=${page}`;

    let req = await axios.get(url);
    let res = req.data;

    setData(res);
    setLoading(false);
  };


 
  return (
    <div className="p-1 home_container w-full">
      <div className="py-2">
        <div className="md:max-w-[80%] mx-auto lg:grid flex flex-wrap justify-center lg:grid-cols-5 gap-1 mb-3">
          {Object.entries(filters).map(
            ([
              filterName,
              { value: selectedValues, content, label, placeholder },
            ]) => (
              <Select
                key={filterName}
                selectionMode="multiple"
                placeholder={placeholder}
                // label={label}
                aria-label={label}
                // selectedKeys={Array.from(selectedValues)}
                className="w-[160px] lg:w-full"
                classNames={{listbox : label == "Year" &&"[&>*]:lg:grid [&>*]:lg:grid-cols-3"}}

                onSelectionChange={(newValues) =>
                  handleFilterChange(filterName, newValues)
                }
              >
                {content?.map((option) => (
                  <SelectItem  key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </Select>
            )
          )}
          <Select
            items={sort}
            // label="animeTypes"
            aria-label={"Sort"}

            value={selectedSort}
            onSelectionChange={(newValues) =>
              setSelectedSort((Array.from(newValues)[0].toLowerCase()))
            }
            placeholder="Sort By"
            className="w-[160px] lg:w-full"
            >
            {sort.map((a) => (
              <SelectItem key={a} value={a}>{a}</SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex w-full justify-center">
        {/* <Pagination
        currentPage={page}
        totalPages={data?.total_pages}
        handlePageChange={handlePageChange}
      /> */}
        <PG
          isCompact
          showControls
          total={data?.total_pages}
          initialPage={page}
          onChange={handlePageChange}
          color="danger"
        />
      </div>

      {loading ? (
            <Spinner className="w-full flex justify-center items-center min-h-[50vh]" size="lg" color="danger"/>

      ) : data?.data?.length < 1 ? (
        "<NotFound />"
      ) : (
        <GridContainer data={data.data} heading={"Browse"} />
      )}

      {/* <BrowserContainer /> */}
    </div>
  );
}
