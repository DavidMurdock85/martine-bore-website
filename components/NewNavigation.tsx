import React from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'

export const NewNavigation: React.FC = () => {
  return (
    <Menu as="nav" className="ml-4" data-headlessui-state="">
      {({ open }) => (
        <>
          <Menu.Button
            as="button"
            role="button"
            name="menu"
            className=" text-black hover:text-blue-500 m-0.5"
          >
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
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items as="ul" className="flex flex-col m-1 ">
              <Menu.Item
                as="li"
                className=" flex flex-row  text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/paintings">Paintings</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row  text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/glass">Glass</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row  text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/jewelry">Jewelry</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/sculptures">Sculptures</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/furniture">Furniture</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/objet-d-art">Objet d&apos;art</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/ceramics">Ceramics</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/porcelain">Porcelain</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/silver">Silver</Link>
              </Menu.Item>

              <Menu.Item
                as="li"
                className="flex flex-row text-blue-500 hover:text-blue-700 m-0.5"
              >
                <Link href="/categories/clocks">Clocks</Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
