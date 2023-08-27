import React from 'react'
import Image from 'next/image'
import { Wrapper } from './layout/Wrapper'
import { Heading } from './layout/Heading'
import { Visual } from './layout/Visual'
import { Title } from './layout/Title'
import { Text } from './layout/Text'

export const TestSection: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Heading>This is a Heading</Heading>
       
        <Visual>
          <Image
            src="/about-image.jpeg"
            alt="second gallery at martine boré antiques"
            width={1220}
            height={1080}
          />
        </Visual> 
        <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 m-2">
        <Title>This is Title</Title>
        <Text>
          Martine Boré Antiques Ltd. is a second generation antique business
          located in Ambleside West Vancouver. The Boré family antique business
          has been West Vancouvers source of antiques and fine art since the mid
          1980s. The Bore family business continues to bring a European
          sensibility to the the Vancouver collecting community offering a wide
          range of antiques and fine art sourced directly from Europe as well as
          many locally esteemed collections built with love over generations by
          collectors who share their passion fine European antiques and art.
        </Text>
        </div>
      </Wrapper>
    </>
  )
}
