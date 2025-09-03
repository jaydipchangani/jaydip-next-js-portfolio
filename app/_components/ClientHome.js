"use client";
import { motion } from "framer-motion";
import Header from "./header";
import NavBar from "./navBar";
import Info from "./info";
import ProjectCard from "./projectCard";



const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ClientHome() {

    return (
        <div>
        <motion.div
          className="min-h-screen m-5 rounded-4xl"
          animate={{
            backgroundColor: ["#ADBAE8", "#ECE1ED", "#e6dbdbff"],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >

          <motion.div {...fadeUp}>
            <Header />
          </motion.div>

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

            <motion.div {...fadeUp}>
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
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="pt-12 px-4 sm:px-6 md:px-10 lg:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-y-8 pt-8">
            <div className="hidden lg:block lg:col-span-1"></div>

            <div className="lg:col-span-3 grid gap-4 p-4 ">
              <motion.div
                className="p-4 rounded  lg:h-fit sm:h-[10rem]"
                {...fadeUp}
              >
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
              </motion.div>

              <motion.div className="p-4 rounded h-fit" {...fadeUp}>
                <ProjectCard
                  imgUrl="/portfolio.png"
                  heading="A personal portfolio website showcasing my projects, skills, and achievements."
                  subheading="PORTFOLIO"
                  link="https://jaydip-portfolio.netlify.app/"
                  bottomBgColor="bg-red-200"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-3 grid gap-4 p-4 h-fit">
              <motion.div className="p-4 rounded justify-end h-fit" {...fadeUp}>
                <ProjectCard
                  imgUrl="https://ultida.com/wp-content/uploads/2021/05/consultix-bookkeeping-website-template.jpg"
                  heading="Seamlessly connect and sync your data with Xero and QuickBooks for smarter, automated accounting."
                  subheading="INTERNSHIP WORK"
                  link="https://github.com/jaydipchangani/AccountingSoftwareIntegration"
                  bottomBgColor="bg-red-200"
                />
              </motion.div>

              <motion.div className="p-4 rounded justify-end h-fit" {...fadeUp}>
                <ProjectCard
                  imgUrl="/hostelmgmt.png"
                  heading="Hostel Management System for room allocation and fee tracking."
                  subheading="PERSONAL PROJECT"
                  link="https://hostel-managment-dusky.vercel.app/"
                  bottomBgColor="bg-blue-200"
                />
              </motion.div>
            </div>

            <div className="hidden lg:block lg:col-span-1"></div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <Info />
        </motion.div>

        <motion.div {...fadeUp}>
          <NavBar />
        </motion.div>
      </div>
    )
}
