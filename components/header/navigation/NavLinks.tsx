import { Typography } from '@mb/components/layout/Typography'
import Link from 'next/link'

export const NavLinks: React.FC = () => {
  return (
      <div className="hidden lg:flex space-x-3">
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/paintings"
        >
          <Typography variant="h5">Paintings</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/glass"
        >
          <Typography variant="h5">Glass</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/jewelry"
        >
          <Typography variant="h5">Jewelry</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/sculptures"
        >
          <Typography variant="h5">Sculptures</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/furniture"
        >
          <Typography variant="h5">Furniture</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/objet-d-art"
        >
          <Typography variant="h5">Objet d&apos;art</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/ceramics"
        >
          <Typography variant="h5">Ceramics</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/porcelain"
        >
          <Typography variant="h5">Porcelain</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/silver"
        >
          <Typography variant="h5">Silver</Typography>
        </Link>
        <Link
          className="text-slate-700 hover:text-yellow-700 m-1"
          href="/categories/clocks"
        >
          <Typography variant="h5">Clocks</Typography>
        </Link>
      </div>
  )
}
