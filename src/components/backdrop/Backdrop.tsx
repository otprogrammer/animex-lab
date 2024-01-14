import React from "react";
// import { motion } from "framer-motion";



const dropIn = {
  hidden: {
    x: "100vh",
    opacity: 0,
  
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
        duration:0.2,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    x: "-100vh",
    opacity: 0,
    
  },
};

interface BackDropProps {
    children:any;
    onClick:any;
}

function Backdrop(props:BackDropProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] cursor-pointer opacity-[0.97]"
      onClick={props.onClick}
      
    >
      {props.children}
    </div>
  );
}

export default Backdrop;
