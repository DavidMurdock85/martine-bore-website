import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { Typography } from '@mb/components/layout/Typography'

export function BuyingList() {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={open}
        className="rounded-md py-2 px-4 text-sm font-medium text-blue-500 hover:text-yellow-700 focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <Typography variant="link">click to view complete buying list</Typography> 
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md rounded-xl bg-slate-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <Typography
                className="flex justify-center font-extralight text-yellow-700"
                variant="h3"
              >
                Complete Buying List
              </Typography>
              <Typography
                className="flex justify-center font-extralight text-slate-700"
                variant="body"
              >
                The following is a complete buying list of items that Martine Bore Antiques is actively seeking
              </Typography>
              <div className="mt-4">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
