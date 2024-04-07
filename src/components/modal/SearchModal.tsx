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
import { useSearchModal } from "../../../store/store";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import cheerio from "cheerio";
export default function SearchModal({ children }) {
  //   const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { isOpen, closeModal } = useSearchModal();

  const router = useRouter();
  const [val, setVal] = useState("");
  const [content, setContent] = useState([]);
  

  //   const handleSearch = async (e:any) => {
  //     setVal(e.target.value)
  //     const {data} :any = await supabase.from("anime").select("*").gte("title",val).like("title_english",`%${val}%`).range(0,9)
  //     setContent(data);
  //     console.log(data)
  //     console.log(val)

  //   }

  const handleSearch = async (e) => {
    setVal(e.target.value);
    let d = await axios.get(
      "https://ajax.gogocdn.net/site/loadAjaxSearch?keyword=" + val
    );
    d = d.data.content.replaceAll("category/", "/anime/");
    var myList = [];
    var $ = cheerio.load(d);
    $("a").each(function (index, element) {
      let result = {};
      let title = $(this).text();
      let link = $(this).attr().href;
      let image = $(this)
        .children("div")
        .attr()
        .style.slice(15)
        .replace(/[("")]/g, "");
      result = { title, link, image };
      myList.push(result);
    });

    setContent(myList);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${val}/1`);
    setContent([]);
    setVal("");
  };
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={closeModal}
        className="w-full max-w-3xl   bg-transparent rounded-sm "
        classNames={{
            backdrop: "bg-gradient-to-t from-black/80 to-black/10 backdrop-opacity-20",
            wrapper : '!items-start py-10'
          }}
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
              <div className="flex items-center gap-2 p-2.5 bg-neutral-800/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <input
                  value={val}
                  autoComplete={"off"}
                  onChange={handleSearch}
                  className={`text-gray-200 bg-transparent p-2 w-full border-none outline-none  ease-in-out transition-all duration-700`}
                  placeholder="Search for anime..."
                />
              </div>
              {content?.length > 0 && (
                <form
                  className={` bg-black/80 z-50  cursor-pointer rounded-sm mt-3  `}
                  onSubmit={handleSubmit}
                >
                  <div
                    className={`   lg:w-full   rounded-sm  flex items-center  md:p-4 shadow-2xl relative right-0`}
                  >
                    <div className="w-full max-h-[600px] overflow-y-scroll">
                      <div
                        className={`  divide-y-[4px] divide-neutral-500   px-1 py-0 transition-all duration-200 rounded-sm  w-full `}
                      >
                        {content?.map((Item, index) => (
                          <Link onClick={closeModal} href={(Item.link)} key={index}>
                            <div
                              className={`flex  gap-3.5 border-b-[1px] border-default-100 w-full bg-neutral-900 hover:bg-black/80 first-letter:text-default-500 hover:text-red-600 cursor-pointer p-1 rounded-sm my-[2px] text-right `}
                              onClick={() => setContent([])}
                            >
                              <div className="">
                                <img
                                  src={Item.image}
                                  className="w-10 h-10 lg:w-12 lg:h-14 object-cover rounded-md"
                                />
                              </div>
                              <span className="">
                                {Item.title}
                              </span>
                            </div>
                          </Link>
                        ))}
                        {/* <button
                          type="submit"
                          onSubmit={handleSubmit}
                          className={`h-10 w-full p-1 mb-[2px] text-center rounded-sm text-gray-200 bg-[#111] flex justify-center items-center hover:bg-blue-700 cursor-pointer`}
                        >
                          View All Results
                        </button> */}
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
