"use client";
import { motion } from "framer-motion";import Image from "next/image";
import Header from "./header";
import NavBar from "./navBar";
//use popins
export default function Home() {
  return (
    <>
    <div>
      
      
      <motion.div
      className="min-h-screen m-5 rounded-lg font-sans"
      animate={{
        backgroundColor: ["#ADBAE8", "#ECE1ED" ,"#e6dbdbff"],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
    >
      <Header />
      <div className="flex items-center justify-center p-60"> 


      <div >
<p className="text-lg leading-loose">Hi, I'm Jaydip, a design-driven</p>
      <p className=" text-7xl font-medium">full-stack </p><br/>
      <p className=" text-8xl font-normal"> developer</p>
      <div className="text flex items-end justify-end">

      
      <h3 className="text-lg leading-loose">  Craft. Refine. Innovate. Solve. </h3>
</div>
      </div>
      
      </div>
    </motion.div>
    <NavBar/>
    </div>
    </>
     
  );
}
