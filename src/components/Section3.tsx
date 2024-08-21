import React, { FC } from 'react';
//Bootstrap
import { Container, Button } from 'react-bootstrap';

type Section3Props = {
    head: string;
    btn_line: string;
}

const Section3: FC<Section3Props> = ({ head, btn_line}) => {
    return (
        <Container fluid className='cs-bg-grad py-4'>
            <Container fluid className='shadow bg-white rounded-3 cs-w p-5 d-flex flex-column align-items-center gap-3'>
                <h3 className='cs-font-poppins text-center cs-tc h2'>{head}</h3>
                <Button className='cs-btn cs-fw-700 cs-bg-pink border-0 rounded-pill px-5 py-2 shadow'>{btn_line}</Button>
            </Container>
        </Container>
    );
}

export default Section3;