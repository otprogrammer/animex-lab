"use client"
import { plugins } from '@/components/player/plugins';
import { Player, PlayerEvent } from '@oplayer/core';
import React, { useCallback, useRef, useState, useEffect } from 'react'
import supabase from '../../../utils/supabase';
import { Button, Input } from '@nextui-org/react';
import ReactPlayer from "@oplayer/react";
import Chat from '../chat/page';

export default function Live() {
    const [dt,setDt] = useState("")
  const [val,setVal] = useState("")
    const player = useRef<Player>(null);
    const myChannelRef = useRef(null);
    const [duration,setDuration] = useState(0)

    useEffect(() => {
        player.current!.seek(duration)
    },[duration])
  // Improved initialization and cleanup of the Supabase channel
  useEffect(() => {
    // Initialize the channel
    const myChannel = supabase.channel("room-3", {
      config: {
        broadcast: { ack: true },
      },
    });

    myChannelRef.current = myChannel; // Assign the channel to the ref for later access

    myChannel.subscribe(async (status) => {
      if (status !== "SUBSCRIBED") {
        return;
      }

      const serverResponse = await myChannel.send({
        type: "broadcast",
        event: "acknowledge",
        payload: {},
      });

      console.log("Server response:", serverResponse);
    });

    myChannel.on('broadcast', { event: 'test' }, (payload) => {
      const message = payload.payload.message;
      console.log(message); // For debugging

      if (player.current) {
        if (message === "pause") player.current.pause();
        if (message === "play") player.current.play();
        if (message === "playing") player.current.play();

        if (message === "seek" && payload.payload.time !== undefined) {
            // player.current.seek(payload.payload.time);
            setDuration(payload.payload.time)
            console.log(`Seeking to ${payload.payload.time}`);
        }
      }
    });

    // Cleanup function to remove the channel when the component unmounts
    return () => {
      supabase.removeChannel(myChannel);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


      
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

    const onEvent = useCallback((payload: PlayerEvent) => {
        console.log(payload); // Debugging
    
        const myChannel = myChannelRef.current;
        if (!myChannel) return;
    
        if (payload.type === "pause" || payload.type === "play" || payload.type === "playing") {
          // Handle play and pause events
          myChannel.send({
            type: "broadcast",
            event: "test",
            payload: { message: payload.type },
          }).then((resp) => console.log(resp));
        } else if (payload.type === "seeking") {
          // Handle seeked event
          const currentTime = player.current?.currentTime || 0; // Fallback to 0 if undefined
          myChannel.send({
            type: "broadcast",
            event: "test",
            payload: { message: 'seek', time: currentTime },
          }).then((resp) => console.log(resp));
        }
    }, []);

  return (
    <div>

<Button onClick={() => setDuration(550)}>CLICK</Button>
      <Input onChange={(e) => setVal(e.target.value)} />

        <ReactPlayer
                  plugins={plugins}
                  ref={player}
                  aspectRatio={0}
                  source={{src:"https://www084.vipanicdn.net/streamhls/a80af13ae85820b664b87e68fa55f4c8/ep.1.1703910332.m3u8"}}
                  onEvent={onEvent}
                 
                  // autoplay={true}
                />

                <Chat />
    </div>
  )
}
