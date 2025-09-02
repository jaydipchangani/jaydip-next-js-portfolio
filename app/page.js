"use client";
import { motion } from "framer-motion"; import Image from "next/image";
import Header from "./_components/header";
import NavBar from "./_components/navBar";
import Info from "./_components/info";
import ScrollingText from "./_components/scrollingText";
import ProjectCard from "./_components/projectCard";
//use popins
export default function Home() {
  return (
    <>
      <div>


        <motion.div
          className="min-h-screen m-5 rounded-4xl"
          animate={{
            backgroundColor: ["#ADBAE8", "#ECE1ED", "#e6dbdbff"],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Header />
          <div className="flex items-center justify-center p-60">


            <div >
              <p className="text-lg leading-loose text-light">Hi, I&#39;m Jaydip, a design-driven</p>
              <p className=" text-7xl font-medium">full-stack </p><br />
              <p className=" text-8xl font-normal"> developer</p>
              <div className="text flex items-end justify-end text-light p-2">


                <h3 className="text-lg leading-loose">  Craft. Refine. Innovate. Solve. </h3>
              </div>
            </div>

          </div>
        </motion.div>
        <div className="pt-[3rem]">
          <div className="grid grid-cols-8  pt-[2rem]">

            <div className="col-span-1"></div>

            {/* First Middle Column (5 rows) */}
            <div className="col-span-3 grid grid-rows-2 gap-4 p-4 ">
              
              <div className="p-4 rounded h-fit">
                <div className="text-white h-[15rem]">
                <h1 className="text-[3rem]">My Work</h1>
                <p>A selection of a few projects I personally, or together with others, have worked on.</p>
              </div>
                <ProjectCard
                  imgUrl="/petAdoptionWebsite.png"
                  heading="Find loving homes for pets and bring joy to families through easy and trusted adoptions"
                  subheading="PERSONAL PROJECT"
                  link="https://pethouse-lake.vercel.app/"
                  bottomBgColor="bg-blue-200"
                />
              </div>
              <div className=" p-4 rounded h-fit">
                <ProjectCard
                  imgUrl="/portfolio.png"
                  heading="A personal portfolio website showcasing my projects, skills, and achievements."
                  subheading="PORTFOLIO"
                  link="https://jaydip-portfolio.netlify.app/"
                  bottomBgColor="bg-red-200"
                />
              </div>
              
            </div>

            {/* Second Middle Column (4 rows) */}
            <div className="col-span-3 grid gap-4 p-4 h-fit ">
              <div className=" p-4 rounded justify-end h-fit ">
                <ProjectCard
                  imgUrl="https://ultida.com/wp-content/uploads/2021/05/consultix-bookkeeping-website-template.jpg"
                  heading="Seamlessly connect and sync your data with Xero and QuickBooks for smarter, automated accounting."
                  subheading="INTERNSHIP WORK"
                  link="https://github.com/jaydipchangani/AccountingSoftwareIntegration"
                  bottomBgColor="bg-red-200"
                />
              </div>
              <div className=" p-4 rounded justify-end h-fit">
                <ProjectCard
                  imgUrl="/hostelmgmt.png"
                  heading="Hostel Management System for room allocation and fee tracking."
                  subheading="PERSONAL PROJECT"
                  link="https://hostel-managment-dusky.vercel.app/"
                  bottomBgColor="bg-blue-200"
                />
              </div>
              
            </div>

            {/* Right Empty Column */}
            <div className="col-span-1"></div>
          </div>
        </div>
        <Info />

        <NavBar />
      </div>
    </>

  );
}
