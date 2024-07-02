import React from 'react'
import { BuyingList } from './BuyingList'
import { Typography } from '@mb/components/layout/Typography'

export const Buying: React.FC = () => {
  return (
    <div className="bg-slate-100 p-5">
      <div className="">
        <Typography
          className="flex justify-center text-yellow-700 font-extralight"
          variant="h2"
        >
          We&apos;re Buying
        </Typography>

        <Typography
          className="flex justify-center m-1 text-slate-700"
          variant="body"
        >
          We are actively seeking new acquisitions of Fine Jewelry, Paintings,
          Silver, Bronze, Crystal, Porcelain, China, Stemware, Chandeliers and
          Furniture. To view a full buying list please click the link below.
        </Typography>
        <div className="grid justify-center mt-2">
          <BuyingList />
        </div>
      </div>
    </div>
  )
}
