"use client"
import { Transition } from '@headlessui/react'
import React, { useEffect, useRef } from 'react'

export default function HoverScreen({backdrop_path,title}:any) {

    const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    if (cardElement) {
      const hasOverflow = cardElement.scrollWidth > cardElement.clientWidth;
      console.log('Overflow detected:', hasOverflow);
    }
  }, []); // Run this effect once after the initial render


  return (
   

    <div ref={cardRef}  className="hoverScreen ">
  <div
    style={{ textDecoration: "none", color: "white" }}
  >
    <img
      src={backdrop_path}
      alt={"title"}
      className="mediaHoverImg"
    />
    <div className="hoverData">
      <div className="hoverHeading">
        <div className="playDiv">
          <div className="playIcon">
            {/* <PlayCircleFilledWhiteOutlinedIcon className="playButton" /> */}
          </div>
          <div className="playtext">Play</div>
        </div>
        <div>
          {/* <AddOutlinedIcon className="addIcon" /> */}
        </div>
      </div>
      <div className="title">
        {title}
      </div>
      <div className="overview">
        qdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs
      </div>
      <div className="footerScreen">
        <div className="runTime">
          3 hours
        </div>
        <div className="releaseYear">
2020            </div>
        <div>
          {/* <ChatBubbleIcon className="messageIcon" /> */}
        </div>
        <div className="rated">{"18+"}</div>
      </div>
    </div>
  </div>
</div>
  )
}
