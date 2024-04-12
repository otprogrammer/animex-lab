"use client";
import React, { useEffect, useRef, useState } from "react";
import supabase from "../../../utils/supabase";
import {
  Button,
  Input,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalContent,
} from "@nextui-org/react";
import { useAuth } from "@/components/hooks/Auth";
import { FaArrowUp, FaFacebookMessenger } from "react-icons/fa";
import moment from "moment";

interface Message {
  user: {
    avatar: string;
    username: string;
  };
  content: string;
  created_at: string;
}

function formatTimeFromIso(isoString) {
  const date = new Date(isoString);
  // Format hours and minutes with leading zeros
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export default function Chat() {
  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const [dt, setDt] = useState("");
  const [val, setVal] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);
  const formRef = useRef(null);
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

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  myChannel.on("broadcast", { event: "test" }, (payload) => {
    setDt(payload.payload.message);
  });

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on("broadcast", { event: "test" }, (payload) => {
        console.log(payload);
      })

      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

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

  console.log(dt);
  const getData = async () => {
    const { data } = await supabase.from("messages").select("*");
    console.log(data);
    setContent(data);
    scrollToBottom();
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
    formRef?.current?.reset();
    scrollToBottom();
  };
  return (
    user && (
      <Popover
        placement="right-end"
        showArrow
        backdrop="opaque"
        onOpenChange={() => (document.body.style.overflow = "unset")}
        offset={10}
      >
        <PopoverTrigger
          onClick={() => {
            document.body.style.overflow = "hidden";
            scrollToBottom();
          }}
          className="fixed right-2 bottom-2"
        >
          <Button
            variant="shadow"
            className="min-w-[60px] w-[60px] h-[60px] rounded-full hover:bg-danger400"
          >
            <FaFacebookMessenger className="text-3xl" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[350px] h-[420px] ">
          {(titleProps) => (
            <div className="py-4 px-1  flex flex-col justify-between rounded-xl w-full h-full mx-auto">
              <div
                ref={chatRef}
                className="space-y-2 overflow-y-scroll  my-3 pr-3"
              >
                {content?.map((msg: Message, idx) => (
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
                          <div
                            className={`w-full text-small font-semibold ${
                              user?.user_metadata?.username ==
                              msg?.user?.username
                                ? "text-red-600"
                                : "text-default-foreground"
                            }`}
                          >
                            {msg?.user?.username}
                          </div>
                          <div className="flex-end text-small text-default-400">
                            {formatTimeFromIso(msg?.created_at)}
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
              <div className=" mt-4 flex gap-1.5 items-center">
                <form
                  ref={formRef}
                  className="w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (message?.length > 1) {
                      handleSendMessage();
                    }
                  }}
                >
                  <Input
                    variant="underlined"
                    placeholder="Send Message"
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    endContent={
                      <Tooltip content="Send message">
                        <Button
                          className="focus:outline-none min-w-unit-1  h-[30px] bg-white rounded-full"
                          type="submit"
                          // onClick={handleSendMessage}
                        >
                          <FaArrowUp className="text-md text-black pointer-events-none" />
                        </Button>
                      </Tooltip>
                    }
                  />
                </form>
                {/* <Button className="my-1" onClick={handleSendMessage}>
              Send
            </Button> */}
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    )
  );
}
