"use client";
import { motion } from "framer-motion";
import Header from "./_components/header";
import NavBar from "./_components/navBar";
import Info from "./_components/info";
import ProjectCard from "./_components/projectCard";

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

          <div
            className={`
        flex
        flex-col
        items-center
        justify-center
        px-4 py-16
        sm:py-32 md:py-40 lg:p-60
        text-center sm:text-left
        min-h-[calc(100vh-80px)] sm:min-h-0
      `}
          >
            <div>
              <p className="text-base sm:text-lg leading-loose text-light">
                Hi, I&#39;m Jaydip, a design-driven
              </p>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
                full-stack
              </p>
              <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal">
                developer
              </p>

              <div className="flex items-center sm:items-end justify-center sm:justify-end text-light p-2">
                <h3 className="text-base sm:text-lg leading-loose">
                  Craft. Refine. Innovate. Solve.
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pt-12 px-4 sm:px-6 md:px-10 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-y-8 pt-8">

            <div className="hidden lg:block lg:col-span-1"></div>

            <div className="lg:col-span-3 grid gap-4 p-4 ">
              <div className="p-4 rounded  lg:h-fit sm:h-[10rem]">
                <div className="text-white  pb-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem]">
                    My Work
                  </h1>
                  <p className="text-sm sm:text-base">
                    A selection of a few projects I personally, or together with
                    others, have worked on.
                  </p>
                </div>

                <ProjectCard
                  imgUrl="/petAdoptionWebsite.png"
                  heading="Find loving homes for pets and bring joy to families through easy and trusted adoptions"
                  subheading="PERSONAL PROJECT"
                  link="https://pethouse-lake.vercel.app/"
                  bottomBgColor="bg-blue-200"
                />
              </div>

              <div className="p-4 rounded h-fit">
                <ProjectCard
                  imgUrl="/portfolio.png"
                  heading="A personal portfolio website showcasing my projects, skills, and achievements."
                  subheading="PORTFOLIO"
                  link="https://jaydip-portfolio.netlify.app/"
                  bottomBgColor="bg-red-200"
                />
              </div>
            </div>

            <div className="lg:col-span-3 grid gap-4 p-4 h-fit">
              <div className="p-4 rounded justify-end h-fit">
                <ProjectCard
                  imgUrl="https://ultida.com/wp-content/uploads/2021/05/consultix-bookkeeping-website-template.jpg"
                  heading="Seamlessly connect and sync your data with Xero and QuickBooks for smarter, automated accounting."
                  subheading="INTERNSHIP WORK"
                  link="https://github.com/jaydipchangani/AccountingSoftwareIntegration"
                  bottomBgColor="bg-red-200"
                />
              </div>

              <div className="p-4 rounded justify-end h-fit">
                <ProjectCard
                  imgUrl="/hostelmgmt.png"
                  heading="Hostel Management System for room allocation and fee tracking."
                  subheading="PERSONAL PROJECT"
                  link="https://hostel-managment-dusky.vercel.app/"
                  bottomBgColor="bg-blue-200"
                />
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1"></div>
          </div>
        </div>

        <Info />
        <NavBar />
      </div>
    </>
  );
}
