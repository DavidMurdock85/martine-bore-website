import "./Contact.scss";
import React from "react";
import { Base, Col, Flex, Row, Split } from "../components/layout";

export const Contact = () => {
    return (
        <Col >
            <Base className="contact">
                <Row>
                    <Base className="">
                        <Base tag="h2" pb={1} pt={3}>Contact Information</Base>
                        
                        <Base tag="h3" pl={2} >Contact Us</Base>
                        
                        <Base tag="p" pl={5} pr={2} > The best way to reach us is by email at info@martineboreantiques.com or by phone at 604 912-0292.  Our store hours are Tuesdays-Saturdays or
                        by appointment on Monday and Sunday.  If you have an inquiry about a particular item or would like to have us do a house call to view items your interested in selling, its 
                        best to email us and we will return your message as soon as possible.  </Base>
                    </Base>
                    <Base>
                        <Base tag="h3" pl={2}>For Buyers</Base>
                        
                        <Base tag="p" pl={5} pr={2}>We have many items in stock and some that may not be listed online. If you have an inquiry or are looking for something specific, please feel free
                        contact us by email at info@martineboreantiques.com or by phone for general inquiries 604 912-0292 We can also provide you with a quote for the cost of shipping if your located
                        outside of canada or in another province.  If your located in Vancouver or the lower mainland in some cases we can deliever for a small fee.
                        </Base>
                    </Base>

                    <Base>
                        <Base tag="h3" pl={2}>For Sellers</Base>
                        
                        <Base tag="p" pl={5} pr={2}>We're always interested in purchasing fine quality art and antiques to add to our growing stock. We look at whole estates as well as single works of art. Its 
                        best to contact us any information about the items you are interested in selling.  We welcome walkins if you have a few items but we would encourage you to make an appointment as the gallery 
                        is frequently busy and we may not be able to give you our full attention.   We can also organize a house visit if you would like us to take a look at a collection or estate. If we are interested 
                        in your items we can purchase them outright on your visit. In some cases we also take items on consignment.  
                        

                        <Base tag="h3" pl={2}>What we buy</Base>

                        <Base tag="p" pl={5} pr={2}>
                        We're generally looking for fine quality Jewelry, Paintings, Works on paper, Gold, Sterling silver, Bronze, Crystal, Porcelain, China, Crystal stemware, Chandeliers and Furniture. We are particularly interested 
                        in works by Lalique, Moorcroft, Meissen, Herend, Royal Worcester, Royal Crown Darby, Birks, Tiffany, Waterford, Baccarat, Cartier, as well as fine Chinese and Japanese art.  We are
                        also interested in aquiring Canadian Art by well known artists. 
                        </Base>

                        <Base tag="h3" pl={2}>Directions</Base>
                        
                        <Base tag="p" pl={5} pr={2}>
                        Were located along the main strip of Ambleside in West Vancouver just past the Park Royal Shopping Centre.  Street parking is widely available and free. 
                        </Base>

                    </Base>
                    </Base>
                </Row>
            </Base>
        </Col>
    );
};
