import { Base } from "@mb/components/layout";
import React from "react";

export const About: React.FC = () => {
  return (
    <Base className="about-parent">
      <Base className="about-title" tag="h2" mt={3} mb={1}>
        <Base>Our Story</Base>
      </Base>

      <Base className="about-text" tag="h5" mb={2} ml={5} mr={5}>
        <Base>
          Martine Boré Antiques Ltd. is a second generation antique business
          located in the heart of Ambelside West Vancouver. The Boré family has
          been a part of the West Vancouver Community since the 1980s when
          Carmen Boré opened at 1867 Marine Dr. West Vancouver. In the 1990s
          Carmens Daughter Martine began learning the trade from her mother
          joining her on buying trips to Europe, England, and France. They
          visited antique markets, grand estates and the multiudes of antique
          dealers in Paris, London and the South of France. Much of their time
          was spent in the Southwest of France where the Boré Family roots go
          back to the 18th century. After spending a decade living in Europe
          herself, Martine returned to Canada and continued the family business
          in West Vancouver in the 2000s.
        </Base>
      </Base>

      <Base className="about-title" tag="h2" mt={3} mb={1}>
        <Base>Our Philosophy</Base>
      </Base>

      <Base className="about-text" tag="h5" mb={2} ml={5} mr={5}>
        <Base>
          Our philosophy here at Martine Boré Antiques has always been about
          bringing clients unique artistic works that are thoughfully sourced
          and thoroughly curated. We search locally and the world over for
          special pieces that defy a category and can work with a variety of
          interiors and styles. We specialize in 19th and early 20th century
          French and English Antiques as well as estate jewelry. We also carry a
          wide variety of antiques from all over the world from many periods and
          styles. Whether your new to collecting or have lifelong passion, let
          us treat you to the unique experience that characterizes a visit to
          our gallery.
        </Base>
      </Base>
    </Base>
  );
};
