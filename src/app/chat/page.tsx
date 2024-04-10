"use client";
import React, { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";
import { Button, Input } from "@nextui-org/react";
import { useAuth } from "@/components/hooks/Auth";

export default function Chat() {
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const [dt,setDt] = useState("")
  const [val,setVal] = useState("")

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

  const send = () => {
    myChannel
      .send({
        type: "broadcast",
        event: "test",
        payload: { message: val },
      })
      .then((resp) => setDt(resp.payload.message));

    // Remember to clean up the channel

    supabase.removeChannel(myChannel);
  };

  useEffect(() => {
    getData();
  }, []);



  myChannel.on(
    'broadcast',
    { event: 'test' },
    (payload) => {
        setDt(payload.payload.message)
        

    } 
  )

//   useEffect(() => {
//     const channel =   supabase.channel("*").on("broadcast",{event:"test"},(payload) => {
//         console.log(payload)
//       })
    
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, [supabase]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const newMessage = payload.new as Message;

          if (!content.find((message) => message.id === newMessage.id)) {
            setContent([...content, newMessage]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, content, setContent]);

  console.log(dt)
  const getData = async () => {
    const { data } = await supabase.from("messages").select("*");
    console.log(data);
    setContent(data);
  };

  const handleSendMessage = async () => {
    await supabase.from("messages").insert({
      content: message,
      user: {
        id: user?.id,
        username: user?.user_metadata?.username,
        avatar: user?.user_metadata?.avatar_url,
      },
    });
  };
  return (
    <div className="p-10">
      <Button onClick={send}>CLICK</Button>
      <Input onChange={(e) => setVal(e.target.value)} />

      <span>data : {dt}</span>
      <div className="py-4 px-6 border border-zinc-700 rounded-xl max-w-3xl mx-auto">
        <div className="space-y-2">
          {content?.map((msg, idx) => (
            <div key={idx} className="flex gap-3 flex-row-reverse">
              <div className="relative flex-none">
                <span className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-10 h-10 text-tiny bg-default text-default-foreground rounded-full">
                  <img
                    src={msg?.user?.avatar}
                    className="flex object-cover w-full h-full transition-opacity !duration-500 "
                    alt="avatar"
                  />
                </span>
              </div>
              <div className="flex w-full flex-col gap-4">
                <div className="relative w-full rounded-medium bg-content2 px-4 py-3 text-default-600">
                  <div className="flex">
                    <div className="w-full text-small font-semibold text-default-foreground">
                      {msg?.user?.username}
                    </div>
                    <div className="flex-end text-small text-default-400">
                      16:45
                    </div>
                  </div>
                  <div className="mt-2 text-small text-default-900">
                    {msg?.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-1.5 items-center">
          <Input
            variant="bordered"
            placeholder="Send Message"
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />
          <Button className="my-1" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
        bB
      ss</div>
    </div>
  );
}
