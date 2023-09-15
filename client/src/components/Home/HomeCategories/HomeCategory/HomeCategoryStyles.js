import styled from 'styled-components';
import { normalBlue, greyBlue, lightGrey } from '../../../../styleVariables';

export const Container = styled.div`
min-width: 392px;
height: 476px;
background-color: ${lightGrey};
border-radius: 24px;
position: relative;
overflow: hidden;
margin-left: 24px;
transform: translateX(calc(${props => -props.$currentIndex * 100}% - ${props => props.$currentIndex * 24}px));
transition: transform .3s ease-in-out;

&:first-child {
    margin-left: 0;
}
`

export const TextContainer = styled.div`
margin: 8% 5% 0 5%;
`

export const Title = styled.h2`
font-size: 23px;
line-height: 130%;
margin: 12px 0;
`

export const Desc = styled.p`
color: ${greyBlue};
font-size: 18px;
line-height: 150%;
margin-bottom: 12px;
`

export const HLink = styled.a`
display: inline-flex;
align-items: center;
color: ${normalBlue};
font-weight: bold;
font-size: 18px;
text-decoration: none;

svg {
    margin-top: 4px;
}
`

export const ImageContainer = styled.div`
width: 220px;
height: 220px;
position: absolute;
bottom: 0px;
right: 0px;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`