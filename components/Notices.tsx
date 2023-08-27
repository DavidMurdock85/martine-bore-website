import React from 'react'
import { Typography } from '@mb/components/layout/Typography'

export const Notices: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-1/2 mt-3 border-yellow-500 border">
        <div className="ml-5 mr-5 mb-5 mt-5  ">
          <div className="flex flex-col">
            <div className="">
              <Typography
                className="flex justify-center font-extralight"
                variant="h2"
              >
                Message Board
              </Typography>

              <Typography className="flex justify-center m-2" variant="body">
                The Fall Season is upon us. Were thinking about rich hues of
                gold and the smell of old antique furniture. What inspirations
                do you get from the fall season?
              </Typography>
            </div>

            {/*

            <div className="m-2">
              <h3 className="flex flex-row justify-center  m-3">Its Curated</h3>
              <p className="flex-row ml-3 mr-2">
                Look for the new tags in our gallery that give a curated
                perspective on our unique items.
              </p>
            </div>

            <div className="m-2">
              <h3 className="flex flex-row justify-center  m-3">
                How to avoid being scammed
              </h3>
              <p className="flex-row ml-3 mr-2">
                Recently Martine Bore Antiques LTD. has been the victim of
                fraud. Job postings with our name and copied logo have been
                appearing on a number of job and social media sites. These are
                entirely fake and we are not currently hiring. If you see any of
                these posting we kindly ask you to report them to your local
                police or local anti fraud. Authorities are aware of their
                activities.
              </p>
            </div>

*/}
          </div>
        </div>
      </div>
    </>
  )
}
