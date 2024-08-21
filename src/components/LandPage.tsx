import React from 'react';
//Components
import '../components/LandPage.css';
import NavBarFixed from './NavBarFixed.tsx';
import Section1 from './Section1.tsx';
import Section2 from './Section2.tsx';
import Section3 from './Section3.tsx';
import SectionFooter from './SectionFooter.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgLogo from '../images/logo.svg';
import ImgSec_1 from '../images/illustration-mockups.svg';
import ImgSec_2_1 from '../images/illustration-grow-together.svg';
import ImgSec_2_2 from '../images/illustration-flowing-conversation.svg';
import ImgSec_2_3 from '../images/illustration-your-users.svg';

interface lineProps {
    head_1: string;
    par_1: string;
    btn_line_1: string;

    head_2: string;
    par_2: string;

    head_3: string;
    par_3: string;

    head_4: string;
    par_4: string;

    head_5: string;
    btn_line_2: string;

    par_5: string;
    par_6: string;
    par_7: string;
    par_8: string;
}

const LandPage = () => {
    const lineProps: lineProps = {
        head_1: 'Build The Community Your Fans Will Love',
        par_1: 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.',
        btn_line_1: 'Get Started For Free',

        head_2: 'Grow Together',
        par_2: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
        
        head_3: 'Flowing Conversations',
        par_3: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        
        head_4: 'Your Users',
        par_4: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    
        head_5: 'Ready To Build Your Community?',
        btn_line_2: 'Get Started For Free',

        par_5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        par_6: '+1-543-123-4567',
        par_7: 'example@huddle.com',
        par_8: 'Copyright 2018 Huddle. All rights reserved.',
    };

    AOS.init();

    return (
        <Container fluid className='p-0'>
            <NavBarFixed ImgLogo={ImgLogo} />
            <Section1
                ImgSec={ImgSec_1} 
                head={lineProps.head_1} 
                par={lineProps.par_1}
                btn_line={lineProps.btn_line_1} />
            <Section2
                ImgSec1={ImgSec_2_1}
                head1={lineProps.head_2}
                par1={lineProps.par_2}
                ImgSec2={ImgSec_2_2}
                head2={lineProps.head_3}
                par2={lineProps.par_3}
                ImgSec3={ImgSec_2_3}
                head3={lineProps.head_4}
                par3={lineProps.par_4} />
            <Section3 
                head={lineProps.head_5} 
                btn_line={lineProps.btn_line_2} />
            <SectionFooter
                ImgLogo={ImgLogo}
                par_1={lineProps.par_5} 
                phone_number={lineProps.par_6} 
                email={lineProps.par_7} 
                par_2={lineProps.par_8} />
        </Container>
    );
}

export default LandPage;