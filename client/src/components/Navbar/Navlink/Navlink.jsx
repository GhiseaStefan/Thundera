import React from 'react'
import { Container, Anchor } from './NavlinkStyles'
import { useLocation } from 'react-router-dom';

const Navlink = ({ name, path }) => {
    const location = useLocation();
    const $isActive = location.pathname === path;

    return (
        <Container $isActive={$isActive}>
            <Anchor $isActive={$isActive} href={path}>
                {name}
            </Anchor>
        </Container>
    )
}

export default Navlink