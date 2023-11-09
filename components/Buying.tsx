import React from 'react'
import { BuyingList } from '@mb/components/BuyingList'
import { Typography } from '@mb/components/layout/Typography'

export const Buying: React.FC = () => {
  return (
    <>
      <div className="grid grid-col-1 mt-3">
        <div className="border-slate-300 border m-1">
          <Typography
            className="grid justify-center text-yellow-700 font-extralight"
            variant="h2"
          >
            We&apos;re Buying
          </Typography>

          <Typography
            className="grid justify-center m-1 text-slate-700"
            variant="body"
          >
            We are actively seeking new acquisitions of Fine Jewelry, Paintings,
            Silver, Bronze, Crystal, Porcelain, China, Stemware, Chandeliers and
            Furniture. To view a full buying list please click the link below.
          </Typography>

          {/*how can i fix placement of popover panel?*/}
          <div className="grid justify-center mt-2 mb-3">
            <BuyingList />
          </div>
        </div>
      </div>
    </>
  )
}
