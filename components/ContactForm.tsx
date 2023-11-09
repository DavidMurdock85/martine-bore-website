import React from 'react'
import Link from 'next/link'
import { Typography } from '@mb/components/layout/Typography'

export const ContactForm: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-1/2 mt-3">
        <div className="m-1">
          <Typography
            className="flex justify-center text-yellow-700 font-extralight"
            variant="h2"
          >
            Contact Us
          </Typography>

          <Typography
            className="flex justify-center ml-2 mr-2 mb-2"
            variant="body"
          >
            Let us know if we can answer any questions about one of our items.
            Do you have an item you would like to sell? We offer worldwide
            shipping.
          </Typography>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="flex justify-center  text-blue-500 hover:text-blue-700  hover:bg-slate-200 m-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 fill-none stroke-current stroke-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
