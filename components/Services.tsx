import { Link } from "@mb/components/elements";
import { Center, Col, Flex, Row } from "@mb/components/layout";
import React from "react";

export const Services: React.FC = () => {
  return (
    <Flex flexDirection="column" className="services-parent">
      {/*services parent tag*/}

      <Flex flexDirection="row" justifyContent="center" tag="h2" m={2}>
        Our Services
      </Flex>

      <Row flexDirection="row" className="services-section-parent" m={2}>
        {/*service section - estates*/}

        <Col
          xs={12}
          md={6}
          lg={3}
          flexDirection="column"
          className="services-section-child"
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-title"
            tag="h3"
            m={1}
          >
            Estates
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-text"
            tag="p"
            m={1}
          >
            We seek quality antiques and art for purchase.
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-link"
            m={1}
          >
            {/*<Link href="">click for more info</Link>*/}
          </Flex>
        </Col>

        {/*service section - appraisals*/}

        <Col
          xs={12}
          md={6}
          lg={3}
          flexDirection="column"
          className="services-section-child"
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-title"
            tag="h3"
            m={1}
          >
            Appraisals
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-text"
            tag="p"
            m={1}
          >
            We offer professional appraisal services.
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-link"
            m={1}
          >
            {/*<Link href="">click for more info</Link>*/}
          </Flex>
        </Col>

        {/*service section - consignmentss*/}

        <Col
          xs={12}
          md={6}
          lg={3}
          flexDirection="column"
          className="services-section-child"
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-title"
            tag="h3"
            m={1}
          >
            Consignments
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-text"
            tag="p"
            m={1}
          >
            We seek quality antiques and art for consignment.
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-link"
            m={1}
          >
            {/*<Link href="">click for more info</Link>*/}
          </Flex>
        </Col>

        {/*service section - delivery*/}

        <Col
          xs={12}
          md={6}
          lg={3}
          flexDirection="column"
          className="services-section-child"
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-title"
            tag="h3"
            m={1}
          >
            Delivery
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-text"
            tag="p"
            m={1}
          >
            We offer delivery services.
          </Flex>

          <Flex
            flexDirection="row"
            justifyContent="center"
            className="services-link"
            m={1}
          >
            {/*<Link href="">click for more info</Link>*/}
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};
