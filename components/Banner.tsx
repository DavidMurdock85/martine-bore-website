import React from 'react'
import { Logo } from '@mb/components/Logo'
import { Typography } from '@mb/components/layout/Typography'
import Link from 'next/link'
import { Navbar } from '@mb/components/Navigation'

export const Banner: React.FC = () => {
  return (
    <>
      <Link href="/">
        <div className="flex flex-row justify-center mt-1 mb-2 mr-16">
          <div className="flex flex-col justify-center mr-2 mt-3">
            <Logo />
          </div>
          <div className="flex flex-col justify-center">
            <Typography
              className="text-yellow-500 font-extralight"
              variant="banner-title"
            >
              Martine Boré Antiques
            </Typography>
            <hr className="border-slate-300" />
            <Typography
              className="flex flex-row justify-center text-yellow-500 font-extralight"
              variant="banner-sub"
            >
              West Vancouver
            </Typography>
          </div>
        </div>
      </Link>
      < Navbar />
    </>
  )
}
