import React from 'react'
import type { NextPage } from 'next'
import { ImageMain } from '@mb/components/main/ImageMain'
import { NewArrivals } from '@mb/components/main/NewArrivals'
import { About } from '@mb/components/main/about/About'
import { Buying } from '@mb/components/main/buying/Buying'
import { Contact } from '@mb/components/main/contact/Contact'
import { PageWrapper } from '@mb/components/PageWrapper'

const Home: NextPage = () => {
  return (
    <PageWrapper
      title="Martine Boré Antiques Ltd."
      description="A second generation antique dealer in the heart of West Vancouver Ambleside District"
    >
      <ImageMain />
      <NewArrivals />
      <Buying />
      <About />
      <Contact />
    </PageWrapper>
  )
}

export default Home
