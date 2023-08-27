import React from 'react'
//import Image from 'next/image'
import { render, screen } from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import { Banner } from '../../components/Banner'

describe('Banner', () => {
  test('renders the logo and navigation correctly', () => {
    render(<Banner />)

    // Assert logo is rendered
    
    const logoImage = screen.getByAltText("martine bore antiques logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/martine-logo.png");
    expect(logoImage).toHaveAttribute("width", "160");
    expect(logoImage).toHaveAttribute("height", "140");


    // Assert navigation component is rendered
    const navigation = screen.getByTestId('navigation')
    expect(navigation).toBeInTheDocument()

    /*
// Simulate click on the logo to navigate to the home page
    userEvent.click(logoImage)
    */

    // Assert that the navigation link is correct

    /*
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
*/
  })
})
