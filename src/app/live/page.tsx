"use client"
import { plugins } from '@/components/player/plugins';
import { Player, PlayerEvent } from '@oplayer/core';
import React, { useCallback, useRef, useState, useEffect } from 'react'
import supabase from '../../../utils/supabase';
import { Button, Input } from '@nextui-org/react';
import ReactPlayer from "@oplayer/react";

export default function Live() {
    const [dt,setDt] = useState("")
  const [val,setVal] = useState("")
    const player = useRef<Player>(null);
    const myChannel = supabase.channel("room-3", {
        config: {
          broadcast: { ack: true },
        },
      });
    
      myChannel.subscribe(async (status) => {
        if (status !== "SUBSCRIBED") {
          return;
        }
    
        const serverResponse = await myChannel.send({
          type: "broadcast",
          event: "acknowledge",
          payload: {},
        });
    
        console.log("serverResponse", serverResponse);
      });
    

      useEffect(() => {

        myChannel.on(
            'broadcast',
            { event: 'test' },
            (payload) => {
                if (payload.payload.message == "pause") {
                    player?.current?.pause()
                }
                if (payload.payload.message == "play") {
                    player?.current?.play()
                }
    
                if (payload.payload.message == "seek") {
                    player?.current?.seek(payload.payload.time)
                    console.log(payload.payload.message.time)
                }
                console.log(payload.payload.message)
                
        
            } 
          )

      },[supabase])

      
    //   const send = () => {
    //     myChannel
    //       .send({
    //         type: "broadcast",
    //         event: "test",
    //         payload: { message: 'pause' },
    //       })
    //       .then((resp) => setDt(resp.payload.message));
    
    //     // Remember to clean up the channel
    
    //     supabase.removeChannel(myChannel);
    //   };

      const onEvent = useCallback(
        (payload: PlayerEvent) => {
            console.log(payload)
          if (payload.type == "pause") {
            
            myChannel
            .send({
              type: "broadcast",
              event: "test",
              payload: { message: 'pause' },
            })
            .then((resp) => console.log(resp));
      
          // Remember to clean up the channel
      
          supabase.removeChannel(myChannel);
          
          console.log('possed')
        }
        
        if (payload.type == "play") {
            
            myChannel
            .send({
              type: "broadcast",
              event: "test",
              payload: { message: 'play' },
            })
            .then((resp) => console.log(resp));
      
          // Remember to clean up the channel
      
          supabase.removeChannel(myChannel);
          
          console.log('possed')
        }
        // if (payload.type == "seeked") {
            
        //     myChannel
        //     .send({
        //       type: "broadcast",
        //       event: "test",
        //       payload: { message: 'seek',time:player?.current?.currentTime },
        //     })
        //     .then((resp) => console.log(resp));
      
        //   // Remember to clean up the channel
      
        //   supabase.removeChannel(myChannel);
          
        //   console.log('seeked',player?.current?.currentTime)
        // }
    },
        []
      );

  return (
    <div>

{/* <Button onClick={send}>CLICK</Button> */}
      <Input onChange={(e) => setVal(e.target.value)} />

        <ReactPlayer
                  plugins={plugins}
                  ref={player}
                  aspectRatio={0}
                  source={{src:"https://www110.anicdnstream.info/videos/hls/ElpdaHzE5XJ_YAClrNrsMw/1712803534/223460/053189c337f6799792c485c08ed11764/ep.1.1712571450.m3u8"}}
                  onEvent={onEvent}
                 
                  // autoplay={true}
                />
    </div>
  )
}
