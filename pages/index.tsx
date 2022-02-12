import { Base } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import Image from "next/image";
import React from "react";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageWrapper
      description="A second generation antique dealer in the hear tof West Vancouver Ambleside District"
      title="Martine Boré Antiques Ltd."
    >
      <Base className="home-image">
        <Image src="/images/homepage-images/homepage-image.jpeg" alt="A photo of the Martine Boré Antiques Gallery in Ambleside West Vancouver." width="2000px" height="1500px" />
      </Base>
    </PageWrapper>
  )
}

export default Home