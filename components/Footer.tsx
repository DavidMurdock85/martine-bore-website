import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Link
          className="flex flex-row justify-center text-blue-500 hover:text-blue-700  hover:bg-slate-200"
          href="#header"
        >
          Back to Top
        </Link>
        <Link
          href="/"
          className="flex flex-row justify-center text-blue-500 hover:text-blue-700  hover:bg-slate-200 m-0.5"
        >
          Home
        </Link>

        <h2 className="flex flex-row justify-center mt-4 mb-2">
          Plan Your Visit
        </h2>
        <div className="flex flex-row ml-2 mt-1 mr-2 mb-2">
          <div className="flex flex-col p-4 md-6">
            <div className="flex flex-col pb-2">
              <h4 className="flex ">Location</h4>

              <div className="flex flex-col">
                <h6 className="flex flex-row m-1">
                  1462 Marine Dr, West Vancouver, BC
                </h6>
                <h6 className="flex flex-row m-1">
                  info@martineboreantiques.com
                </h6>
                <div className="flex flex-row m-1">(604) 912-0292</div>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="flex flex-row">Hours</h4>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h6 className="flex flex-row">
                    Tuesday - Saturday 10:00 to 5:30
                  </h6>
                  <h6 className="flex flex-row">
                    Sunday and Monday by appointment
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex flex-row">Parking Available in the Back</div>
            <div className="flex flex-col mt-2">
              <h4 className="flex flex-row">Follow Us On Instagram</h4>
              <div className="flex flex-row mt-1">
                <Link href="https://www.instagram.com/martineboreantiques/">
                  **social media link**
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md-6">
            <div className="flex flex-row m-2">
              <Image
                src="/location-image.jpg"
                alt="map of martine bore antiques location"
                width={750}
                height={750}
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end pb-1 pr-1 mr-3   text-blue-500 hover:text-blue-700">
          <Link href="/admin">Admin Tools</Link>
        </div>
      </div>
    </>
  )
}
