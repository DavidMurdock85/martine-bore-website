import React from "react";

export const Notices: React.FC = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-100 shadow-lg rounded border-solid border-2 border-slate-200">
        <h2 className="flex flex-row justify-center  m-1">Notices</h2>

        <h3 className="flex flex-row justify-center  m-3">Spring Sale</h3>

        <p className="flex-row ml-3 mr-2">
          Our Spring Sale is currently on. Find selected antiques, jewelry and
          fine art at up to 30% off our original asking price. Look for the red
          tags.
        </p>

        <h3 className="flex flex-row justify-center  m-3">Its Curated</h3>

        <p className="flex-row ml-3 mr-2">
          Look for the new tags in our gallery that give a curated perspective
          on our unique items.
        </p>

        <h3 className="flex flex-row justify-center  m-3">
          How to avoid being scammed
        </h3>

        <p className="flex-row ml-3 mr-2">
          Recently Martine Bore Antiques LTD. has been the victim of fraud. Job
          postings with our name and copied logo have been appearing on a number
          of job and social media sites. These are entirely fake and we are not
          currently hiring. If you see any of these posting we kindly ask you to
          report them to your local police or local anti fraud. Authorities are
          aware of their activities.
        </p>
      </div>
    </>
  );
};
