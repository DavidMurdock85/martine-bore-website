import { Flex, Row, Col } from "@mb/components/layout";
import React from "react";

export const Info: React.FC = () => {
  return (
    <Flex flexDirection="row" className="info-parent" tag="h6">
      <Col>
        <Row tag="h2" className="info-title" justifyContent="center" m={1}>
          Notice
        </Row>
        <Row tag="p" className="info-text" ml={3} mr={2}>
          Recently Martine Bore Antiques LTD. has been the victim of fraud. Job
          postings with our name and copied logo have been appearing on a number
          of job and social media sites. These are entirely fake and we are not
          currently hiring. If you see any of these posting we kindly ask you to
          report them to your local police or local anti fraud. Authorities are
          aware of their activities.
        </Row>
      </Col>
    </Flex>
  );
};
