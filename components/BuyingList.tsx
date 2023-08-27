import React from 'react'
import { Popover } from '@headlessui/react'

export const BuyingList: React.FC = () => {
  return (
    <Popover>
      <>
        <Popover.Button
          as="button"
          role="button"
          aria-label={'menu'}
          className="text-blue-500 hover:text-blue-700  hover:bg-slate-200 "
        >
          click for a full buying list
        </Popover.Button>
        <Popover.Overlay className="fixed inset-0 bg-black opacity-40" />
        <Popover.Panel className="absolute z-10 mt-4 shadow-lg bg-slate-100 border border-slate-300">
          <div className="ml-5 mr-5 mb-5 mt-5 border  border-yellow-500">
            <div className="grid grid-cols-1 m-2">
              <h2 className="font-bold grid justify-center mt-4 mb-2 text-yellow-500 text-lg">
                Complete Buying List
              </h2>

              <div>
                <h3 className="font-bold grid justify-center">Jewelry</h3>
                <p className="grid justify-center m-1">
                  Fine Jewelry, Antique Jewelry
                </p>
              </div>

              <h3 className="font-bold grid justify-center m-1">Fine Art</h3>
              <p className="grid justify-center m-1">
                European paintings particularly French,
                English and Dutch works. However other quality european works
                will also be considered.
              </p>

              <h3 className="font-bold grid justify-center m-1">
                Canadian Art
              </h3>
              <p className="grid justify-center m-1">
                Canadian art by well established artists.
              </p>

              <h3 className="font-bold grid justify-center m-1">Furniture</h3>
              <p className="grid justify-center m-1">
                European smaller side furniture pre-1900 but will consider Deco Period, Chinese furniture, works
                from the georgians period. We generally cant take larger pieces
                but in some rare cases if they are exceptional we will consider
                them.
              </p>

              <h3 className="font-bold grid justify-center m-1">Silver</h3>
              <p className="grid justify-center m-1">
                European and North American sterling silver
              </p>

              <h3 className="font-bold grid justify-center m-1">Crystal</h3>
              <p className="grid justify-center m-1">Were Looking for old pre-1900 European cut crystal.</p>
            </div>
          </div>
        </Popover.Panel>
      </>
    </Popover>
  )
}
