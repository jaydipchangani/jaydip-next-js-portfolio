"use client";
import { motion } from "framer-motion";import Image from "next/image";
import Header from "./_components/header";
import NavBar from "./_components/navBar";
import Info from "./_components/info";
import ScrollingText from "./_components/scrollingText";
//use popins
export default function Home() {
  return (
    <>
    <div>
      
      
      <motion.div
      className="min-h-screen m-5 rounded-lg"
      animate={{
        backgroundColor: ["#ADBAE8", "#ECE1ED" ,"#e6dbdbff"],
      }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
    >
      <Header />
      <div className="flex items-center justify-center p-60"> 


      <div >
<p className="text-lg leading-loose text-light">Hi, I&#39;m Jaydip, a design-driven</p>
      <p className=" text-7xl font-medium">full-stack </p><br/>
      <p className=" text-8xl font-normal"> developer</p>
      <div className="text flex items-end justify-end text-light p-2">

      
      <h3 className="text-lg leading-loose">  Craft. Refine. Innovate. Solve. </h3>
</div>
      </div>
      
      </div>
    </motion.div>
    <div className="pt-[3rem]">
      <div className="grid grid-cols-8 min-h-screen pt-[2rem]">
      
      <div className="col-span-1"></div>

      {/* First Middle Column (5 rows) */}
      <div className="col-span-3 grid grid-rows-5 gap-4 p-4 ">
        <div className="text-white">
          <h1 className="text-[3rem]">My Work</h1>
          <p>A selection of a few projects I personally, or together with others, have worked on.</p>
        </div>
        <div className="bg-blue-300 p-4 rounded">Row 2</div>
        <div className="bg-blue-300 p-4 rounded">Row 3</div>
        <div className="bg-blue-300 p-4 rounded">Row 4</div>
        <div className="bg-blue-300 p-4 rounded">Row 5</div>
      </div>

      {/* Second Middle Column (4 rows) */}
      <div className="col-span-3 grid grid-rows-4 gap-4 p-4 ">
        <div className="bg-green-300 p-4 rounded">Row 1</div>
        <div className="bg-green-300 p-4 rounded">Row 2</div>
        <div className="bg-green-300 p-4 rounded">Row 3</div>
        <div className="bg-green-300 p-4 rounded">Row 4</div>
      </div>

      {/* Right Empty Column */}
      <div className="col-span-1"></div>
    </div>
    </div>
    <Info/>
    
    <NavBar/>
    </div>
    </>
     
  );
}
