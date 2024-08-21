import React, { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap';

type Section2ItemProps = {
    ImgSec: string;
    head: string;
    par: string;
    order1: number;
    order2: number;
}

const Section2Item: FC<Section2ItemProps> = ( {ImgSec, head, par, order1, order2} ) => {
    
    return (
        <Container fluid className='shadow rounded-4 p-5 p-lg-4 text-center text-lg-start'>
            <Row>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 8, order: order1 }} className='px-5 d-flex flex-column justify-content-center'>
                    <h2 className='cs-font-poppins cs-tc mb-4'>{head}</h2>
                    <p className='cs-tc'>{par}</p>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 4, order: order2 }} className='mb-5 mb-lg-0'>
                    <Image fluid src={ImgSec} alt='section image' />
                </Col>
            </Row>
        </Container>
    );
}

export default Section2Item;