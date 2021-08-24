import "./Services.scss";
import React from "react";
import { Base, Split, Row, Col } from "../components/layout";

export const Services = () => {
  return (
    <Col>
      <Base className="services">
        <Row>
          <Base className="">
            <Base tag="h2" pb={1} pt={3}>
              Services
            </Base>
            <Base tag="h3" pl={2}>
              Estates
            </Base>
            <Base tag="p" pl={5} pr={2}>
              We are always interested in quality items to purchase. We buy
              single items and entire estates. If you would like us to view
              items or an estate in person we can arrange house visits by
              appointment in the Metro Vancouver Area as well as the lower
              mainland. We may make some exceptions if you are located on
              Vancouver Island or The Sunshine Coast if you have an item we are
              particularly interested in however we may ask for an additional
              travel fee.
              <Base tag="h5" pl={1} pt={2}>
                What were looking to purchase
              </Base>
              <Base tag="p" pl={3} pr={2}>
                We're actively looking for fine quality Jewelry, Paintings,
                Works on paper, Gold, Sterling silver, Bronze, Crystal,
                Porcelain, China, Crystal stemware, Chandeliers and Furniture.
                We are particularly interested in works by Lalique, Moorcroft,
                Meissen, Herend, Royal Worcester, Royal Crown Derby, Birks,
                Tiffanys, Waterford, Baccarat, Cartier, as well as fine Chinese
                and Japanese art. We are also interested in aquiring Canadian
                Art by well known artists. 
              </Base>
              <Base pt={1} pb={1}>
                Please contact us for more details either by phone at
                604-912-0292 or email at info@martineboreantiques.com.
              </Base>
            </Base>
          </Base>
          <Base>
            <Base tag="h3" pl={2}>
              Consignments
            </Base>
            <Base tag="p" pl={5} pr={2}>
              We are always interested in representing clients for the sale of
              premium or unique art items though consignments. Consignments
              offer an alternative to the uncertainty of the auction process and
              commissions can be negotiated on a per item basis. If you have
              estate jewelry, Rare Art pieces or inheriated items you would like
              us to take a look at please feel free to contact us at
              604-912-0292 or email us at info@martineboreantiques.com with
              pictures.
            </Base>
          </Base>
          <Base>
            <Base tag="h3" pl={2}>
              Appraisals
            </Base>
            <Base tag="p" pl={5} pr={2}>
              We offer professional appraisal services of single items or entire
              estates for an hourly fee. We can arrange to visit your home
              within Metro Vancouver and the Lower Mainland. We can also do walk
              in appraisals but its best to call in advance to see if were busy.
            </Base>
            <Base tag="h3" pl={2}>
              Delivery
            </Base>
            <Base tag="p" pl={5} pr={2}>
              We offer delivery services for items over $500 free of charge once
              a week in Metro Vancouver and the Lower Mainland with some
              exceptions for very large furniture items which can still be
              shipped but will require an additional fee for the cost of packing
              and moving it. We offer world wide shipping through a trusted
              third party service, please contact us for a quote.
            </Base>
          </Base>
        </Row>
      </Base>
    </Col>
  );
};
