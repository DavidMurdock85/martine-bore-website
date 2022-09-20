import React from "react";
import { Base, Flex, Col, Row, Center } from "@mb/components/layout";
import { Link } from "@mb/components/elements";

export const Services: React.FC = () => {
  return (
    <Flex flexDirection="column" className="services-parent">
      {/*services parent tag*/}

      <Center tag="h3" pl={0} pt={2} pr={0} pb={2}>
        Services
      </Center>

      <Flex
        flexDirection="row"
        className="services-section-parent"
        ml={1}
        mt={0}
        mr={1}
        mb={1}
       >
        {/* Sections should resize at different veiws 
          . Phone shows 1 section width
          . tablet shows 2 section width
          . desktop shows 4 section width
          */}

        {/*service section - estates*/}

        <Flex flexDirection="column" className="services-section-child">
          <Flex flexDirection="row" className="services-title" tag="h4">
            Estates
          </Flex>

          <Flex flexDirection="row" className="services-text" tag="p">
            We seek quality antiques and art for purchase.
          </Flex>

          <Flex flexDirection="row" className="services-link">
            <Link href="">click for more info</Link>
          </Flex>
        </Flex>

        {/*service section - appraisals*/}

        <Flex flexDirection="column" className="services-section-child">
          <Flex flexDirection="row" className="services-title" tag="h4">
            Appraisals
          </Flex>

          <Flex flexDirection="row" className="services-text" tag="p">
            We offer professional appraisal services for an hourly fee.
          </Flex>

          <Flex flexDirection="row" className="services-link">
            <Link href="">click for more info</Link>
          </Flex>
        </Flex>

        {/*service section - consignmentss*/}

        <Flex flexDirection="column" className="services-section-child">
          <Flex flexDirection="row" className="services-title" tag="h4">
            Consignments
          </Flex>

          <Flex flexDirection="row" className="services-text" tag="p">
            We seek quality antiques and art for consignment.
          </Flex>

          <Flex flexDirection="row" className="services-link">
            <Link href="">click for more info</Link>
          </Flex>
        </Flex>

        {/*service section - delivery*/}

        <Flex flexDirection="column" className="services-section-child">
          <Flex flexDirection="row" className="services-title" tag="h4">
            Delivery
          </Flex>

          <Flex flexDirection="row" className="services-text" tag="p">
            We offer delivery services.
          </Flex>

          <Flex flexDirection="row" className="services-link">
            <Link href="">click for more info</Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
