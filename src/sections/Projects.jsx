import React from "react";
import Image from "next/image";
import work1 from "../../public/work1.png";
import { motion } from "framer-motion";
import { RxArrowBottomRight } from "react-icons/rx";
import { navVariants } from "@/utils/motion";

const Projects = () => {
  return (
    <section className="h-[100vh] max-w-[1536px] mx-auto p-[25px] mt-[30px]">
      <div className="flex flex-col justify-between ">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="w-[100px]"
        >
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            our work
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </motion.div>

        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex justify-between"
        >
          <h2 className="font-raleway text-[96px] font-[800] leading-[50px] flex basis-1/3 mt-5">
            projects
          </h2>
          <p className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3">
            Here you can explore some of the amazing web design and development
            projects we have completed for our clients.
            <br />
            <br />
            We take pride in our ability to craft beautiful and functional
            websites that are tailored to our clients' unique needs. Our team of
            experienced designers and developers work together to create custom
            solutions that help businesses stand out in the digital world.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex gap-0 mt-[50px] relative"
      >
        <div className="flex max-h-[700px]">
          <Image src={work1} className="object-cover saturate-100" />
        </div>

        <RxArrowBottomRight className="bg-white text-black h-[80px] w-[80px] p-5 absolute left-[65%] bottom-[20%] rounded-full" />

        <div className="flex basis-2/4 flex-col flex-grow p-[25px] justify-between bg-[#686868]">
          <div className="flex flex-col gap-5">
            <span className="font-raleway text-[40px] text-[#F4F4EE] font-[200]">
              project name
            </span>
            <hr className="border-[#F4F4EE]" />
            <p className="font-raleway text-[16px] font-[200] text-[#F4F4EE]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              luctus felis sit amet diam interdum rutrum. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Sed tincidunt cursus est, rutrum malesuada mi mollis vel. Morbi
              nec risus sit amet nisi scelerisque tristique nec nec lorem. Nunc
              quis quam lectus. Nunc tempor neque nibh.
            </p>
          </div>

          <div className="text-[16px] text-[#F4F4EE] font-[200] text-justify leading-[19px] mt-[30px] flex justify-between">
            <span className="font-raleway">dec.05.21</span>
            <span className="font-raleway">03</span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between mt-[25px]">
        <p className="font-raleway text-[#686868] text-[26px] font-[200] cursor-pointer px-5 py-2 transition-all duration-150 ease-in-out hover:bg-[#686868] hover:text-[#F4F4EE]">
          prev
        </p>
        <p className="font-raleway text-[#686868] text-[26px] font-[200] cursor-pointer px-5 py-2 transition-all duration-150 ease-in-out hover:bg-[#686868] hover:text-[#F4F4EE]">
          next
        </p>
      </div>
    </section>
  );
};

export default Projects;