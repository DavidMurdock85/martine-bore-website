import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
//import { act } from "react-dom/test-utils";
import { NewArrivals } from "./NewArrivals";
import { get } from "@mb/services/FetchService" 

jest.mock("@mb/services/FetchService", () => ({
  get: jest.fn().mockResolvedValue([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ]),
}));

it("fetches and displays products correctly", async () => {
  render(<NewArrivals />);
  await waitFor(() => screen.getByText("New Arrivals"));

  const productItems = screen.getAllByTestId("product-item");

  expect(productItems).toHaveLength(4);

  const mockedProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];

  mockedProducts.forEach((product, index) => {
    expect(productItems[index]).toHaveTextContent(product.name);
  });
});

/*
describe("NewArrivals", () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });


it("fetches and displays products correctly", async () => {
  render(<NewArrivals />);
  await waitFor(() => screen.getByText("New Arrivals"));

  const productItems = screen.getAllByTestId("product-item");

  expect(productItems).toHaveLength(4);

  const mockedProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];

  mockedProducts.forEach((product, index) => {
    expect(productItems[index]).toHaveTextContent(product.name);
  });
});

  it("renders the new arrivals section", async () => {
    await act(async () => {
      render(<NewArrivals />);
    });

    expect(screen.getByText("New Arrivals")).toBeInTheDocument();
  });

  it("renders product items after fetching products", async () => {
    await act(async () => {
      render(<NewArrivals />);
    });

    expect(await screen.findAllByTestId("product-item")).toHaveLength(4);
  });
});

*/
