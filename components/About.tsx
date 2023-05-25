import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-100 mt-4 shadow-lg border-solid border-2 border-slate-200 rounded">
      <div>
        <h2 className="flex flex-row justify-center mt-6 mb-6">About Us</h2>
        <div className="flex flex-row m-2">
          <div className="flex flex-row">
            <Image
              src="/about-image.jpeg"
              alt="second gallery at martine boré antiques"
              width={1220}
              height={1080}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="flex flex-row justify-center m-2">
              A Family Tradition
            </h3>
            <p className="flex flex-row ml-4 mt-3 text-base sm:text-sm md:text-md ">
              Martine Boré Antiques Ltd. is a second generation antique business
              located in Ambleside West Vancouver. The Boré family antique
              business has been West Vancouvers source of antiques and fine art
              since the mid 1980s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
