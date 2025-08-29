"use client";
import { motion } from "framer-motion";import Image from "next/image";

//use popins
export default function Home() {
  return (
    <>
    <div>
      
      <motion.div
      className="min-h-screen flex items-center justify-center m-5 rounded-lg font-sans"
      animate={{
        backgroundColor: ["#ADBAE8", "#ECE1ED" ,"#e6dbdbff"],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
    >
      <div>
<p className="text-2xl ">Hi, I'm Jaydip, a design-driven</p>
      <h1 className=" text-8xl ">full-stack </h1><br/>
      <h1 className=" text-9xl"> developer</h1>
      <div className="text-1xl flex items-end justify-end">

      
      <h3 className="text-2xl">  Craft. Refine. Innovate. Solve. </h3>
</div>
      </div>
      
    </motion.div>
    </div>
    </>
     
  );
}
