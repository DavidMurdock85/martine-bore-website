import { Typography } from '@mb/components/layout/Typography'
import Link from 'next/link'

export const MobileLinks: React.FC = () => {
  return (
      <div className="lg:hidden space-y-3">
        <Link
          className=" flex justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/paintings"
        >
          <Typography variant="h3">Paintings</Typography>
        </Link>
        <Link
          className=" flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/glass"
        >
          <Typography variant="h3">Glass</Typography>
        </Link>
        <Link
          className="flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/jewelry"
        >
          <Typography variant="h3">Jewelry</Typography>
        </Link>
        <Link
          className="flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/sculptures"
        >
          <Typography variant="h3">Sculptures</Typography>
        </Link>
        <Link
          className=" flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/furniture"
        >
          <Typography variant="h3">Furniture</Typography>
        </Link>

        <Link
          className=" flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/objet-d-art"
        >
          <Typography variant="h3">Objet d&apos;art</Typography>
        </Link>
        <Link
          className=" flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/ceramics"
        >
          <Typography variant="h3">Ceramics</Typography>
        </Link>
        <Link
          className="flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/porcelain"
        >
          <Typography variant="h3">Porcelain</Typography>
        </Link>
        <Link
          className="flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/silver"
        >
          <Typography variant="h3">Silver</Typography>
        </Link>
        <Link
          className=" flex flex-row justify-center text-slate-700 hover:text-yellow-700 hover:bg-slate-200 m-1"
          href="/categories/clocks"
        >
          <Typography variant="h3">Clocks</Typography>
        </Link>
      </div>
  )
}
