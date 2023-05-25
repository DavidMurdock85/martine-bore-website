import React from "react";
import Image from "next/image";
import { Navigation } from "@mb/components/Navigation";
import Link from "next/link";

export const Banner: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Link href="/">
        <div className="flex justify-center">
          <Image
            src="/martine-logo.png"
            alt="martine bore antiques logo"
            width={160}
            height={140}
          />
        </div>
      </Link>
      <div className="flex justify-start">
        <Navigation />
      </div>
    </div>
  );
};
