import React from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'

export const Navigation: React.FC = () => {
  return (
    <Popover as="nav" className="relative ml-4">
      <Popover.Button
        as="button"
        role="button"
        aria-label={'menu'}
        className=" text-black hover:text-black m-0.5 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-white ml-1 mt-4 w-32 rounded">
        <ul className="">
          <li className=" flex flex-row justify-center  text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link
              role="link"
              aria-label={'Paintings'}
              as="a"
              href="/categories/paintings"
              data-testid="paintings"
            >
              Paintings
            </Link>
          </li>
          <li className=" flex flex-row justify-center   text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/glass" data-testid="glass">
              Glass
            </Link>
          </li>
          <li className=" flex flex-row justify-center   text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/jewelry" data-testid="jewelry">
              Jewelry
            </Link>
          </li>
          <li className=" flex flex-row justify-center   text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/sculptures" data-testid="sculptures">
              Sculptures
            </Link>
          </li>
          <li className=" flex flex-row justify-center  text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/furniture" data-testid="furniture">
              Furniture
            </Link>
          </li>
          <li className=" flex flex-row justify-center  text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link
              as="a"
              href="/categories/objet-d-art"
              data-testid="objet-d-art"
            >
              Objet d&apos;art
            </Link>
          </li>
          <li className=" flex flex-row justify-center  text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/ceramics" data-testid="ceramics">
              Ceramics
            </Link>
          </li>
          <li className=" flex flex-row justify-center  text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/porcelain" data-testid="porcelain">
              Porcelain
            </Link>
          </li>
          <li className=" flex flex-row justify-center  text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/silver" data-testid="silver">
              Silver
            </Link>
          </li>
          <li className=" flex flex-row justify-center  text-blue-500 hover:text-blue-700 hover:bg-slate-200 m-1">
            <Link as="a" href="/categories/clocks" data-testid="clocks">
              Clocks
            </Link>
          </li>
        </ul>
      </Popover.Panel>
    </Popover>
  )
}
