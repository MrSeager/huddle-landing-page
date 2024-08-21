import React, { FC } from 'react';
//Bootstrap
import { Container, Image, Row, Col, ListGroup, Button } from 'react-bootstrap';
//Icons
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { PiCopyright } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type SectionFooterProps = {
    ImgLogo: string;
    par_1: string;
    phone_number: string;
    email: string;
    par_2: string;
}

const SectionFooter: FC<SectionFooterProps> = ({ ImgLogo, par_1, phone_number, email, par_2 }) => {
    return (
        <Container fluid className='cs-bg-footer px-2 px-lg-5 py-4'>
            <Image src={ImgLogo} alt='logo' className='cs-img mx-5' />
            <Row className='mt-4 mx-5'>
                <Col xs={12} lg={4} className='text-white pe-5'>
                    <p><MdLocationOn /> {par_1}</p>
                    <p><FaPhoneVolume /> {phone_number}</p>
                    <p><IoMdMail /> {email}</p>
                </Col>
                <ListGroup as={Col} xs={12} lg={2} className='gap-3'>
                    <ListGroup.Item action href='#' className='text-white py-0 cs-link border-0 bg-transparent'>
                        About Us
                    </ListGroup.Item>
                    <ListGroup.Item action href='#' className='text-white py-0 cs-link border-0 bg-transparent'>
                        What We Do
                    </ListGroup.Item>
                    <ListGroup.Item action href='#' className='text-white py-0 cs-link border-0 bg-transparent'>
                        FAQ
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup as={Col} xs={12} lg={2} className='gap-3 mt-3 mt-lg-0'>
                    <ListGroup.Item action href='#' className='text-white py-0 cs-link border-0 bg-transparent'>
                        Career
                    </ListGroup.Item>
                    <ListGroup.Item action href='#' className='text-white py-0 cs-link border-0 bg-transparent'>
                        Blog
                    </ListGroup.Item>
                    <ListGroup.Item action href='#' className='text-white py-0 cs-link border-0 bg-transparent'>
                        Contact Us
                    </ListGroup.Item>
                </ListGroup>
                <Col xs={12} lg={4} className='text-white d-flex flex-column justify-content-between py-5 py-lg-0 gap-5'>
                    <Container className='p-0 d-flex flex-row gap-2 justify-content-center justify-content-lg-start'>
                        <Button className='d-flex align-items-center border-white px-2 py-0 rounded-circle cs-social bg-transparent'><FaFacebookF /></Button>
                        <Button className='d-flex align-items-center border-white px-2 py-0 rounded-circle cs-social bg-transparent'><FaTwitter /></Button>
                        <Button className='d-flex align-items-center border-white px-2 py-0 rounded-circle cs-social bg-transparent'><FaInstagram  /></Button>
                    </Container>
                    <p className='d-flex flex-row align-items-center justify-content-center justify-content-lg-start'><PiCopyright className='me-1' />{par_2}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionFooter;