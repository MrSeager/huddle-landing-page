import React, { FC } from 'react';
//Bootstrap
import { Navbar, Image, Button } from 'react-bootstrap';

type NavBarFixedProps = {
    ImgLogo: string;
}

const NavBarFixed: FC<NavBarFixedProps> = ( {ImgLogo} ) => {
    return (
        <Navbar data-aos="fade-down" fixed="top" className='px-5 mt-5 justify-content-between align-items-center'>
            <Navbar.Brand href='#home'>
                <Image fluid src={ImgLogo} alt='logo' className='w-75' />
            </Navbar.Brand>
            <Button className='rounded-pill px-5 py-2 shadow bg-white border-0 cs-tc cs-fw-700 cs-btn-nav'>Try It Free</Button>
        </Navbar>
    );
}

export default NavBarFixed;