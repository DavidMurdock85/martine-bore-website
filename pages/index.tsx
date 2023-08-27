import React from 'react'
import type { NextPage } from 'next'
import { ImageMain } from '@mb/components/ImageMain'
import { NewArrivals } from '@mb/components/NewArrivals'
import { About } from '@mb/components/About'
import { Buying } from '@mb/components/Buying'
import { ContactForm } from '@mb/components/ContactForm'
import { Notices } from '@mb/components/Notices'
import { PageWrapper } from '@mb/components/PageWrapper'
import { Shipping } from '@mb/components/Shipping'
//import { TestSection } from '@mb/components/TestSection'

const Home: NextPage = () => {
  return (
    <PageWrapper
      title="Martine Boré Antiques Ltd."
      description="A second generation antique dealer in the heart of West Vancouver Ambleside District"
    >
      <div className="flex flex-col ml-4 mr-4 relative z-0">
        <div className="">
          <ImageMain />
        </div>
        <div className="mt-4 mb-1">
          <NewArrivals />
        </div>
        <div className="mt-4 mb-1">
          <About />
        </div>
        <div className="mt-1 mb-1">
          <Buying />
        </div>
        <div className="flex flex-row mt-1 mb-1">
          <ContactForm />
          <Notices />
        </div>
        <div>
          <Shipping />
        </div>
        {/* <TestSection />*/}
      </div>
    </PageWrapper>
  )
}

export default Home
