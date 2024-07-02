import NextHead from 'next/head'
import Link from 'next/link'
import { Typography } from '../../layout/Typography'

interface AdminWrapperProps {
  children: React.ReactNode
}

export const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  return (
    <>
      <NextHead>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <div className="bg-white">
        <Typography
          className="flex justify-center text-yellow-700"
          variant="h1"
        >
          Admin Tools
        </Typography>
        <div>{children}</div>
        <Link className="flex flex-row justify-center" href="/admin">
          <Typography variant="link" className="text-blue-500">
            Back to Admin Landing
          </Typography>
        </Link>
        <Link href="/" className="flex flex-row justify-center">
          <Typography variant="link" className="text-blue-500">
            Back to Homepage
          </Typography>
        </Link>
      </div>
    </>
  )
}
