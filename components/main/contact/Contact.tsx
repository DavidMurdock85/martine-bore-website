import React from 'react'
import { Typography } from '@mb/components/layout/Typography'
import { ContactForm } from './ContactForm'

export const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-slate-100 p-5">
        <div className="m-1">
          <Typography
            className="flex justify-center text-yellow-700 font-extralight"
            variant="h2"
          >
            Contact Us
          </Typography>

          <Typography
            className="flex justify-center ml-2 mr-2 mb-2 text-slate-700"
            variant="body"
          >
            Let us know if we can answer any questions about one of our items.
            Do you have an item you would like to sell? We offer worldwide
            shipping.
          </Typography>
          <div className="flex justify-center">
            <ContactForm/>
          </div>
        </div>
      </div>
    </>
  )
}
