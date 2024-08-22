import React, { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

type Section1Props = {
    ImgSec: string;
    head: string;
    par: string;
    btn_line: string;
}

const Section1: FC<Section1Props> = ( {ImgSec, head, par, btn_line } ) => {


    return (
        <Container fluid className='cs-bg-image py-5 overflow-hidden'>
            <Row className='my-5 pt-5'>
                <Col data-aos="fade-right" xs={12} lg={5} className='d-flex flex-column justify-content-center align-items-center text-center text-lg-start align-items-lg-start px-5'>
                    <h1 className='cs-font-poppins pb-3 cs-tc'>{head}</h1>
                    <p className='pb-3 cs-tc'>{par}</p>
                    <Button className='cs-btn cs-fw-700 cs-bg-pink border-0 rounded-pill px-5 py-2 shadow'>{btn_line}</Button>
                </Col>
                <Col data-aos="fade-left" xs={12} lg={7} className='pt-5 px-5'>
                    <Image fluid src={ImgSec} alt='illustration mockups' />
                </Col>
            </Row>
        </Container>
    );
}

export default Section1;