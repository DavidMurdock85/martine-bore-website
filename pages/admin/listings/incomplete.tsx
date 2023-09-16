import { AdminWrapper } from '@mb/components/AdminWrapper'
import Link from 'next/link'
//import { useAuth } from '@mb/providers/AuthProvider'
import { get } from '@mb/services/FetchService'
import { Product } from '@mb/types/types'
import React, { useEffect, useState } from 'react'
import { Typography } from '@mb/components/layout/Typography'

const Incomplete: React.FC = () => {
  
  //const auth: any = useAuth()
  const [incompleteListings, setIncompleteListings] = useState<Product[]>([])

  useEffect(() => {
    ;(async () => {
      setIncompleteListings(await get<Product[]>('/products/incomplete'))
    })()
  }, [])
  return (
    <AdminWrapper>
      <div className="flex flex-col">
        <Typography variant="h2">Incomplete Listings</Typography>
        <div className="flex flex-col mt-2">
          {incompleteListings.map((listing) => {
            return (
              <Link
                key={listing.id}
                className="mt-1"
                href={`/admin/listings/${listing.route}`}
              >
                <div>Product #: {listing.id}</div>
                <div className="ml-2">Title: {listing.title}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </AdminWrapper>
  )
}

export default Incomplete
