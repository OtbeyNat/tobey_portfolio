import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { Button } from "./ui/MovingBorders";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[50px]" id="contact"> 
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
              <span className="text-purple">Thank You</span>
            </h1>
            <p className="text-white-200 my-5 text-center">
                Reach out to me today <span className="text-purple">tctan317@gmail.com</span> and let&apos;s discuss how I can help you
                achieve your goals.
            </p>
            <Button duration={10100} borderRadius={`calc(1.75rem* 0.96)`} className="border-neutral-200 dark:border-slate-800">
            <img src="Tobey_2024.jpg" alt="tobey" className="h-[10rem] lg:h-[20rem]"/>
            </Button>
            <a href="mailto:tctan317@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
            />
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Tobey Tan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
              href={info.link}
              target={"_blank"}
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer