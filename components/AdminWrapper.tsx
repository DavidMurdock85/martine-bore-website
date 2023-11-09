import NextHead from "next/head";
import Link from "next/link";
import { Footer } from "@mb/components/Footer";

interface AdminWrapperProps {
  children: React.ReactNode;
}

export const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {

  return (
    <>
      <NextHead>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <h1 className="">Admin Tools</h1>
      <ul className="flex flex-col">
        <li className="flex flex-row">
          <Link href="/admin">Back to Admin Landing</Link>
        </li>
        <li className="flex flex-row">
          <Link href="/" className="">
            Back to Homepage
          </Link>
        </li>
      </ul>
      <div>{children}</div>
      <Footer />
    </>
  );
};
