import React from 'react'
import { Logo } from '@mb/components/header/Logo'
import Link from 'next/link'
import { Navbar } from '@mb/components/header/navigation/Navbar'

export const Banner: React.FC = () => {
  return (
    <>
      <Link href="/">
        <div className="flex flex-row justify-center pt-2 pb-2 bg-white">
          <Logo />
        </div>
      </Link>
      <Navbar />
    </>
  )
}
