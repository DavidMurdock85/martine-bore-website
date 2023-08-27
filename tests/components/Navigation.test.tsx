import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navigation } from '../../components/Navigation'

describe('Navigation', () => {
  it('should display the navigation menu when clicked', () => {
    render(<Navigation />)

    const menuButton = screen.getByRole('button', { name: 'menu' })

    act(() => {
      userEvent.click(menuButton)
    })

    expect(menuButton).toBeInTheDocument()

    const paintingsLink = screen.getByRole('link', { name: 'Paintings' })
    const glassLink = screen.getByRole('link', { name: 'Glass' })
    const jewelryLink = screen.getByRole('link', { name: 'Jewelry' })
    const sculpturesLink = screen.getByRole('link', { name: 'Sculptures' })
    const furnitureLink = screen.getByRole('link', { name: 'Furniture' })
    /*
    const objetdartLink = screen.getByRole('link', {
      name: ' Objet d&apos;art',
    })
    */
    const ceramicsLink = screen.getByRole('link', { name: 'Ceramics' })
    const porcelainLink = screen.getByRole('link', { name: 'Porcelain' })
    const silverLink = screen.getByRole('link', { name: 'Silver' })
    const clocksLink = screen.getByRole('link', { name: 'Clocks' })

    expect(paintingsLink).toBeInTheDocument()
    expect(glassLink).toBeInTheDocument()
    expect(jewelryLink).toBeInTheDocument()
    expect(sculpturesLink).toBeInTheDocument()
    expect(furnitureLink).toBeInTheDocument()
    // expect(objetdartLink).toBeInTheDocument()
    expect(ceramicsLink).toBeInTheDocument()
    expect(porcelainLink).toBeInTheDocument()
    expect(silverLink).toBeInTheDocument()
    expect(clocksLink).toBeInTheDocument()
  })

  it('should navigate to the correct category when a link is clicked', () => {
    // Mock the next/link component to prevent actual navigation
    jest.mock(
      'next/link',
      () =>
        ({ children }: any) =>
          children
    )

    render(<Navigation />)

    const menuButton = screen.getByRole('button', { name: 'menu' })
    act(() => {
      userEvent.click(menuButton)
    })
    expect(menuButton) //.toBeCalled?

    const paintingsLink = screen.getByRole('link', { name: 'Paintings' })
    act(() => {
      userEvent.click(paintingsLink)
    })
    expect(paintingsLink).toBeInTheDocument()

    const glassLink = screen.getByRole('link', { name: 'Glass' })
    act(() => {
      userEvent.click(glassLink)
    })
    expect(glassLink).toBeInTheDocument()

    const jewelryLink = screen.getByRole('link', { name: 'Jewelry' })
    act(() => {
      userEvent.click(jewelryLink)
    })
    expect(jewelryLink).toBeInTheDocument()

    const sculpturesLink = screen.getByRole('link', { name: 'Sculptures' })
    act(() => {
      userEvent.click(sculpturesLink)
    })
    expect(sculpturesLink).toBeInTheDocument()

    const furnitureLink = screen.getByRole('link', { name: 'Furniture' })
    act(() => {
      userEvent.click(furnitureLink)
    })
    expect(furnitureLink).toBeInTheDocument()

    /*
    const objetdartLink = screen.getByRole('link', {
      name: ' Objet d&apos;art',
    })
    act(() => {
      userEvent.click(objetdartLink)
    })
    expect(objetdartLink).toBeInTheDocument()
*/

    const ceramicsLink = screen.getByRole('link', { name: 'Ceramics' })
    act(() => {
      userEvent.click(ceramicsLink)
    })
    expect(ceramicsLink).toBeInTheDocument()

    const porcelainLink = screen.getByRole('link', { name: 'Porcelain' })
    act(() => {
      userEvent.click(porcelainLink)
    })
    expect(porcelainLink).toBeInTheDocument()

    const silverLink = screen.getByRole('link', { name: 'Silver' })
    act(() => {
      userEvent.click(silverLink)
    })
    expect(silverLink).toBeInTheDocument()
    const clocksLink = screen.getByRole('link', { name: 'Clocks' })
    act(() => {
      userEvent.click(clocksLink)
    })
    expect(clocksLink).toBeInTheDocument()
  })
})
