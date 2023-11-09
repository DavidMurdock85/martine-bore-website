import { useState } from 'react'
import { Typography } from '@mb/components/layout/Typography'
import Link from 'next/link'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-slate-100 lg:flex justify-center mb-3">
      <div className="">
        <div className="lg:hidden ml-4 m-0.5">
          <button
            onClick={toggleMenu}
            className="text-slate-500 focus:outline-none focus:bg-slate-100 focus:text-slate-500"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex space-x-3">
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/paintings"
          >
            <Typography variant="h5">Paintings</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/glass"
          >
            <Typography variant="h5">Glass</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/jewelry"
          >
            <Typography variant="h5">Jewelry</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/sculptures"
          >
            <Typography variant="h5">Sculptures</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/furniture"
          >
            <Typography variant="h5">Furniture</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/objet-d-art"
          >
            <Typography variant="h5">Objet d&apos;art</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/ceramics"
          >
            <Typography variant="h5">Ceramics</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/porcelain"
          >
            <Typography variant="h5">Porcelain</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/silver"
          >
            <Typography variant="h5">Silver</Typography>
          </Link>
          <Link
            className="text-slate-700 font-extralight hover:text-yellow-700 m-1"
            href="/categories/clocks"
          >
            <Typography variant="h5">Clocks</Typography>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden space-y-3">
          <Link
            className=" flex justify-center  text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/paintings"
          >
            <Typography variant="h3">Paintings</Typography>
          </Link>
          <Link
            className=" flex flex-row justify-center text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/glass"
          >
            <Typography variant="h3">Glass</Typography>
          </Link>
          <Link
            className="flex flex-row justify-center  text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/jewelry"
          >
            <Typography variant="h3">Jewelry</Typography>
          </Link>

          <Link
            className="flex flex-row justify-center text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/sculptures"
          >
            <Typography variant="h3">Sculptures</Typography>
          </Link>

          <Link
            className=" flex flex-row justify-center  text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/furniture"
          >
            <Typography variant="h3">Furniture</Typography>
          </Link>

          <Link
            className=" flex flex-row justify-center  text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/objet-d-art"
          >
            <Typography variant="h3">Objet d&apos;art</Typography>
          </Link>

          <Link
            className=" flex flex-row justify-center   text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/ceramics"
          >
            <Typography variant="h3">Ceramics</Typography>
          </Link>

          <Link
            className="flex flex-row justify-center  text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/porcelain"
          >
            <Typography variant="h3">Porcelain</Typography>
          </Link>
          <Link
            className="flex flex-row justify-center   text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/silver"
          >
            <Typography variant="h3">Silver</Typography>
          </Link>
          <Link
            className=" flex flex-row justify-center  text-slate-500 font-extralight hover:text-blue-700 hover:bg-slate-200 m-1"
            href="/categories/clocks"
          >
            <Typography variant="h3">Clocks</Typography>
          </Link>
        </div>
      )}
    </nav>
  )
}
