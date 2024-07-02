import React from 'react'
import Link from 'next/link'

export const BackToTopLinks: React.FC = () => {
  return (
    <>
      <div className="grid grid-rows-2">
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
      </div>
    </>
  )
}
