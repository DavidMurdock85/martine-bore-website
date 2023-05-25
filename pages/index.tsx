import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { NewArrivals } from '@mb/components/NewArrivals'
import { About } from '@mb/components/About'
import { PrivateGallery } from '@mb/components/PrivateGallery'
import { Buying } from '@mb/components/Buying'
import { ContactForm } from '@mb/components/ContactForm'
import { Notices } from '@mb/components/Notices'
import { PageWrapper } from '@mb/components/PageWrapper'

const Home: NextPage = () => {
  return (
    <PageWrapper
      title="Martine Boré Antiques Ltd."
      description="A second generation antique dealer in the heart of West Vancouver Ambleside District"
    >
      <div className="flex flex-col ml-4 mt-2.5 mr-4 mb-4">
        <Image
          src={`/main-image.jpeg`}
          alt="A photo of the Martine Boré Antiques Gallery in Ambleside West Vancouver."
          width={2000}
          height={1500}
        />
        <NewArrivals />
        <About />
        <Buying />
        <PrivateGallery />
        <ContactForm />
        <Notices />
      </div>
    </PageWrapper>
  )
}

export default Home
