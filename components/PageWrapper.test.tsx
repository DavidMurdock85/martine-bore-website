import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageWrapper } from './PageWrapper';

describe('PageWrapper', () => {
  test('renders the page wrapper with the correct title and description', () => {
    // Arrange
    const title = 'Test Title';
    const description = 'Test Description';

    // Act
    render(
      <PageWrapper title={title} description={description}>
        <div>Test Content</div>
      </PageWrapper>
    );

    // Assert
    const titleElement = screen.queryByText(title);
    const descriptionElement = screen.getByTestId('meta-description');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toHaveAttribute('content', description);
  });

  it('renders the page wrapper without title and description', () => {
    // Arrange

    // Act
    render(
      <PageWrapper>
        <div>Test Content</div>
      </PageWrapper>
    );

    // Assert
    const titleElement = screen.queryByRole('heading');
    const descriptionElement = screen.queryByTestId('meta-description');

    expect(titleElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();
  });
});
