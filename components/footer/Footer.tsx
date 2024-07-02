import React from 'react'
import Link from 'next/link'
import { FooterImage } from './FooterImage'
import { Typography } from '@mb/components/layout/Typography'

export const Footer: React.FC = () => {
  return (
    <div className="grid grid-col-1 bg-white p-5">
      <div className="flex justify-center sm:flex-wrap md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ">
        <div className="m-2">
          <FooterImage />
        </div>
        <div className="flex flex-col justify-center m-2 pl-20 pr-20">
          <Typography
            className="flex justify-center text-yellow-700"
            variant="h2"
          >
            Planning Your Visit
          </Typography>
          <Typography
            className="flex justify-center text-yellow-700"
            variant="h4"
          >
            Location
          </Typography>
          <Typography
            className="flex justify-center  text-slate-700"
            variant="h5"
          >
            1462 Marine Dr, West Vancouver, BC
          </Typography>
          <Typography
            className="flex justify-center text-yellow-700"
            variant="h4"
          >
            Contact
          </Typography>
          <Typography
            className="flex justify-center  text-slate-700"
            variant="h5"
          >
            info@martineboreantiques.com
          </Typography>
          <div className="flex justify-center  text-slate-700">
            (604) 912-0292
          </div>
          <Typography
            className="flex justify-center text-yellow-700"
            variant="h4"
          >
            Hours
          </Typography>
          <Typography
            className="flex justify-center  text-slate-700"
            variant="h5"
          >
            Tuesday - Saturday 10:00 to 5:30
          </Typography>
          <Typography
            className="flex justify-center  text-slate-700"
            variant="h5"
          >
            Sunday and Monday by appointment
          </Typography>
          <h4 className="flex justify-center text-yellow-700">Social</h4>
          <h4 className="flex justify-center  text-slate-700">
            Follow Us On Instagram
          </h4>
          <div className="flex justify-center mt-1  text-slate-700">
            <Link href="https://www.instagram.com/martineboreantiques/">
              **social media link**
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              href="/"
              className="flex justify-center text-blue-500 hover:text-blue-700  hover:bg-slate-200 m-0.5"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end pb-1 pr-1 mr-3 text-slate-100 hover:text-blue-700">
        <Link href="/admin">Admin Tools</Link>
      </div>
    </div>
  )
}
