import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import { About } from './About'

describe('About', () => {
  it('renders the About section with correct content', () => {
    const { getByText, getByAltText } = render(<About />)
    const image = getByAltText('second gallery at martine boré antiques')
    const heading = getByText('About Us')
    const subheading = getByText('A Family Tradition')
    const description = getByText(
      /Martine Boré Antiques Ltd. is a second generation antique business/
    )

    expect(image).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(subheading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
