import React, { FC } from 'react';
//Bootstrap
import { Container } from 'react-bootstrap';
//Components
import Section2Item from './Section2Item.tsx';

type Section2Props = {
    ImgSec1: string;
    head1: string;
    par1: string;

    ImgSec2: string;
    head2: string;
    par2: string;

    ImgSec3: string;
    head3: string;
    par3: string;
}

const Section2: FC<Section2Props> = ( {ImgSec1, head1, par1, ImgSec2, head2, par2, ImgSec3, head3, par3} ) => {
    return (
        <Container fluid className='p-5 d-flex flex-column gap-5'>
            <Section2Item 
                ImgSec={ImgSec1}
                head={head1}
                par={par1}
                order1={1}
                order2={2} />
            <Section2Item 
                ImgSec={ImgSec2}
                head={head2}
                par={par2}
                order1={2}
                order2={1} />
            <Section2Item 
                ImgSec={ImgSec3}
                head={head3}
                par={par3}
                order1={1}
                order2={2} />
        </Container>
    );
};

export default Section2;