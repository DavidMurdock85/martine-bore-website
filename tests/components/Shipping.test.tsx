import React from 'react';
import { render } from '@testing-library/react';
import { Shipping } from '../../components/Shipping';

describe('Shipping', () => {
  test('renders shipping information', () => {
    const { getByText } = render(<Shipping />);
    const shippingInfo = getByText(/we ship worldwide/i);
    expect(shippingInfo).toBeInTheDocument();
  });
});