import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render Back to Top link", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Back to Top")).toBeInTheDocument();
  });

  it("should render Home link", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Home")).toBeInTheDocument();
  });

  it("should render Plan Your Visit heading", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Plan Your Visit")).toBeInTheDocument();
  });

  it("should render Location heading", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Location")).toBeInTheDocument();
  });

  it("should render Hours heading", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Hours")).toBeInTheDocument();
  });

  it("should render Parking Available text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Parking Available in the Back")).toBeInTheDocument();
  });

  it("should render Follow Us On Instagram heading", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Follow Us On Instagram")).toBeInTheDocument();
  });

  it("should render Admin Tools link", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Admin Tools")).toBeInTheDocument();
  });
});
