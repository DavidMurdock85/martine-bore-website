import { Base } from "@mb/components/layout";
import React from "react";

export const Services: React.FC = () => {
  return (
    <Base className="buying-parent">
        
      <Base className="services-title" tag="h2" mt={3} mb={1}>
        <Base>Services</Base>
      </Base>

      <Base>
        <Base className="services-title" tag="h3" mt={3} mb={1}>
          <Base>Estates</Base>
        </Base>
        <Base className="services-text" tag="h5" mb={2} ml={5} mr={5}>
          <Base>
            {" "}
            We are always interested in quality items to purchase. We buy single
            items and entire estates. If you would like us to view items or an
            estate in person we can arrange house visits by appointment in the
            Metro Vancouver Area as well as the lower mainland. We may make some
            exceptions if you are located on Vancouver Island or The Sunshine
            Coast if you have an item we are particularly interested in however
            we may ask for an additional travel fee.
          </Base>
        </Base>
      </Base>

      <Base>
        <Base className="services-title" tag="h3" mt={3} mb={1}>
          <Base>Appraisals</Base>
        </Base>
        <Base className="services-text" tag="h5" mb={2} ml={5} mr={5}>
          <Base>
            We offer professional appraisal services of single items or entire
            estates for an hourly fee. We can arrange to visit your home within
            Metro Vancouver and the Lower Mainland. We can also do walk in
            appraisals but its best to call in advance to see if were busy.
          </Base>
        </Base>
      </Base>

      <Base>
        <Base className="services-title" tag="h3" mt={3} mb={1}>
          <Base>Consignments</Base>
        </Base>
        <Base className="services-text" tag="h5" mb={2} ml={5} mr={5}>
          <Base>
            We are always interested in representing clients for the sale of
            premium or unique art items though consignments. Consignments offer
            an alternative to the uncertainty of the auction process and
            commissions can be negotiated on a per item basis. If you have
            estate jewelry, Rare Art pieces or inheriated items you would like
            us to take a look at please feel free to contact us at 604-912-0292
            or email us at info@martineboreantiques.com with pictures.
          </Base>
        </Base>
      </Base>

      <Base>
        <Base className="services-title" tag="h3" mt={3} mb={1}>
          <Base>Delivery Services</Base>
        </Base>
        <Base className="services-text" tag="h5" mb={2} ml={5} mr={5}>
          <Base>
            We offer delivery services for items over $500 free of charge once a
            week in Metro Vancouver and the Lower Mainland with some exceptions
            for very large furniture items which can still be shipped but will
            require an additional fee for the cost of packing and moving it. We
            offer world wide shipping through a trusted third party service,
            please contact us for a quote.
          </Base>
        </Base>
      </Base>

    </Base>
  );
};
