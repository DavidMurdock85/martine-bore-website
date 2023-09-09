import { AdminWrapper } from '@mb/components/AdminWrapper'
import Link from 'next/link'

const AdminLanding: React.FC = () => {
  return (
    <AdminWrapper>
      <div className="flex flex-col my-4">
        <Link href="/admin/login">Login</Link>
        <Link href="/admin/listings/new">New Listing</Link>
        <Link href="/admin/listings/incomplete" className="mt-1">
          Incomplete Listings
        </Link>
      </div>
    </AdminWrapper>
  )
}

export default AdminLanding
