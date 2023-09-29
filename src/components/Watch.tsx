
"use client"
import React,{useEffect,useState,useRef} from 'react'
import Player, { PlayerEvent, isMobile } from "@oplayer/core";
import ui from "@oplayer/ui";
import hls from "@oplayer/hls";
//@ts-ignore
import ReactPlayer from "@oplayer/react";

const plugins = [
  ui({
    pictureInPicture: true,
    slideToSeek: 'always',
    screenshot: true,
    keyboard: { global: true }
  }),
  hls()
]
type WatchProps = {

  slug:string[];

  }

export default function WatchContainer(props:WatchProps) {
  const [source,setSource] =useState<string>("")
    const player = useRef<Player>(null);



    useEffect(() => {
       
    
        
        player?.current
          ?.changeSource(
             fetch(
                  `https://aniscraper.up.railway.app/anime/gogoanime/watch/${props.slug?.[0]}-episode-${props.slug?.[1]}`
                )
                  .then((res) => res.json())
                  .then((res) => {
                    
                    return {
                      src: res.sources?.filter(
                        (s: any) => s.quality === "default"
                      )?.[0].url,
                      title:"Title",
                      poster: ""
                    };
                  })
             
          ) 
          
      }, [props.slug]);


  return (
    <div>


<ReactPlayer

        plugins={plugins}
        ref={player}
        source={source}
        autoplay={true}

        onEvent={() => {}}
      />
        
    </div>
  )
}
