import React from "react";
import Link from "next/link";

export const ContactForm: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="flex flex-row justify-center m-1">Contact Us</h2>
        <p className="flex flex-row justify-center m-1 ">
          We would love to hear from you. Let us know if we can answer any
          questions about one of our items. Do you have an item you would like
          to sell? We offer worldwide shipping.
        </p>
        <div className="flex flex-row justify-center mb-2">
          <Link
            href="/contact"
            className="flex flex-row justify-center  text-blue-500 hover:text-blue-700  hover:bg-slate-200 m-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              
         
              className="w-10 h-10 fill-none stroke-current stroke-1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};
