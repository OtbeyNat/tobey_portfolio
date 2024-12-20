"use client";

import { gallery } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
        <h1 className="heading">
            Check Out My
            <span className="text-purple"> Gallery</span>
        </h1>
        <p className="text-center text-white-100 mt-2">Screenshots of Applications I Worked On</p>

        <div className="flex flex-col items-center mt-5">
            <InfiniteMovingCards
            items={gallery}
            direction="left"
            speed="extra-slow"
            />
            {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
                <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                    <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-10 w-5"
                    />
                    <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                    />
                </div>
                </React.Fragment>
            ))}
            </div> */}
      </div>
    </section>
  );
};

export default Gallery;