import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { NewArrivals } from '../../components/main/NewArrivals'
import { Product } from '@mb/types/types'
import * as FetchService from '../../services/FetchService'

jest.mock('../../services/FetchService')

describe('NewArrivals', () => {
  it.only('renders the new arrivals section correctly', async () => {
    // Arrange
    const mockedProducts: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: '1',
        category: {
          id: 1,
          metaTitle: 'Test Category',
          metaDescription: 'This is a test category',
          route: '/test-category',
          title: 'Test Category',
          breadcrumbs: [],
          list: ['item1', 'item2', 'item3'],
        },
        images: [
          {
            id: 1,
            original: 'https://example.com/image1.jpg',
            thumbnail: 'https://example.com/image1-thumb.jpg',
          },
        ],
      },
      {
        id: 2,
        title: 'Product 2',
        price: '2',
        category: {
          id: 1,
          metaTitle: 'Test Category',
          metaDescription: 'This is a test category',
          route: '/test-category',
          title: 'Test Category',
          breadcrumbs: [],
          list: ['item1', 'item2', 'item3'],
        },
        images: [
          {
            id: 1,
            original: 'https://example.com/image1.jpg',
            thumbnail: 'https://example.com/image1-thumb.jpg',
          },
        ],
      },
      {
        id: 3,
        title: 'Product 3',
        price: '3',
        category: {
          id: 1,
          metaTitle: 'Test Category',
          metaDescription: 'This is a test category',
          route: '/test-category',
          title: 'Test Category',
          breadcrumbs: [],
          list: ['item1', 'item2', 'item3'],
        },
        images: [
          {
            id: 1,
            original: 'https://example.com/image1.jpg',
            thumbnail: 'https://example.com/image1-thumb.jpg',
          },
        ],
      },
      {
        id: 4,
        title: 'Product 4',
        price: '4',
        category: {
          id: 1,
          metaTitle: 'Test Category',
          metaDescription: 'This is a test category',
          route: '/test-category',
          title: 'Test Category',
          breadcrumbs: [],
          list: ['item1', 'item2', 'item3'],
        },
        images: [
          {
            id: 1,
            original: 'https://example.com/image1.jpg',
            thumbnail: 'https://example.com/image1-thumb.jpg',
          },
        ],
      },
    ]

    ;(FetchService.get as jest.Mock).mockResolvedValue({
      data: mockedProducts,
    })

    // Act
    render(<NewArrivals />)

    // Assert
    await waitFor(() => {
      const headingElement = screen.getByText('New Arrivals')
      const productElements = screen.getAllByRole('listitem')
      const linkElement = screen.getByRole('link', {
        name: /click for a full list/i,
      })

      expect(headingElement).toBeInTheDocument()
      expect(productElements).toHaveLength(4)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
