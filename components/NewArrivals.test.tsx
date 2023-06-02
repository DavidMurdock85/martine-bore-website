import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { NewArrivals } from './NewArrivals';
import { Product, Category, ProductImage } from "@mb/services/types";
import * as FetchService from '../services/FetchService';

jest.mock('../services/FetchService');

describe('NewArrivals', () => {
  it('renders the new arrivals section correctly', async () => {
    // Arrange
    const mockedCategory: Category = {
      id: 1,
      metaTitle: 'Test Category',
      metaDescription: 'This is a test category',
      route: '/test-category',
      title: 'Test Category',
      breadcrumbs: [],
      list: ['item1', 'item2', 'item3'],
    };

    const mockedProductImage: ProductImage = {
      id: 1,
      original: 'https://example.com/image1.jpg',
      thumbnail: 'https://example.com/image1-thumb.jpg',
    };

    const mockedProducts: Product[] = [
      { 
        id: 1, 
        title: 'Product 1', 
        price: '1', 
        category: mockedCategory, 
        images: [mockedProductImage] 
      },
      { 
        id: 2, 
        title: 'Product 2', 
        price: '2', 
        category: mockedCategory, 
        images: [mockedProductImage] 
      },
      { 
        id: 3, 
        title: 'Product 3', 
        price: '3', 
        category: mockedCategory, 
        images: [mockedProductImage] 
      },
      { 
        id: 4, 
        title: 'Product 4', 
        price: '4', 
        category: mockedCategory, 
        images: [mockedProductImage] 
      },
    ];

    (FetchService.get as jest.Mock).mockResolvedValue({
      data: mockedProducts
    });

    // Act

    console.log()

    render(<NewArrivals />);

    // Assert
    await waitFor(() => {
      const headingElement = screen.getByText('New Arrivals');
      const productElements = screen.getAllByTestId('new-arrivals-product-items');
      const linkElement = screen.getByRole('link', { name: /click for a full list/i });

      expect(headingElement).toBeInTheDocument();
      expect(productElements).toHaveLength(4);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
