import React from "react";
import Image from "next/image";

export const PrivateGallery: React.FC = () => {
  return (
    <>
      <div className="flex flex-col  bg-slate-100 shadow-lg border-solid border-2 border-slate-200 rounded">
        <h2 className="flex flex-row justify-center mt-6 mb-6">Second Gallery</h2>

        <div className="flex flex-row">
         
        <div className="flex flex-col">
            <h3 className="flex flex-row justify-center m-2">
              Visit Our Second Gallery
            </h3>
            <p className="flex flex-row ml-4 mt-3">
              Make an appointment to see our second gallery. Showing our larger
              works of European Painting, sculpture, furniture and a unique
              assortment of design. contact us at 604-912-0292.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-center">
              <Image
                src="/private-gallery.jpeg"
                alt="second gallery at martine boré antiques"
               // width={1620}
               // height={1220}
               width={1220}
              height={1080}
              />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
