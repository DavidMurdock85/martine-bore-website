import React from 'react'
import { render, screen } from '@testing-library/react'
import { Buying } from './Buying'

describe('Buying component', () => {
  it('renders the component', () => {
    render(<Buying />)

    // Test the presence of specific text content
    const heading = screen.getByText("We're Buying")
    const paragraph = screen.getByText(/We are actively looking/i)
    const subHeading = screen.getByText('How To Get In Touch')
    const contactInfo = screen.getByText(/If you have a work/i)

    // Assert the elements are present in the component
    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(subHeading).toBeInTheDocument()
    expect(contactInfo).toBeInTheDocument()
  })
})
