import React from "react";
import { render } from "@testing-library/react";
import { SecondGallery } from "../../components/SecondGallery";

describe("PrivateGallery component", () => {
  it("renders the gallery title", () => {
    const { getByText } = render(<SecondGallery />);
    const titleElement = getByText("Second Gallery");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the gallery description", () => {
    const { getByText } = render(<SecondGallery />);
    const descriptionElement = getByText(
      "Make an appointment to see our second gallery. Showing our larger works of European Painting, sculpture, furniture and a unique assortment of design. contact us at 604-912-0292."
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the gallery image with the correct dimensions", () => {
    const { getByAltText } = render(<SecondGallery />);
    const imageElement = getByAltText("second gallery at martine boré antiques");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("width", "1220");
    expect(imageElement).toHaveAttribute("height", "1080");
  });
});
