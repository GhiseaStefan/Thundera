import styled from 'styled-components';
import { lightBlue, normalBlue } from '../../../styleVariables';

export const CarouselContainer = styled.div`
display: flex;
overflow: hidden;
height: 880px;
background-color: ${lightBlue};
`;

export const CarouselItem = styled.div`
flex: 0 0 100%;
transition: transform 1s ease-in-out;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
transform: translateX(${props => props.$currentIndex * -100}%);
`;

export const TextContainer = styled.div`
width: 40%;
margin-left: 5%;
`

export const CarouselHeadingText = styled.h1`
font-size: 64px;
opacity: ${props => (props.$showHeadingText ? 1 : 0)};
transform: translateX(${props => (props.$showHeadingText ? '0' : '-10%')});
transition: opacity .3s ease-in-out 800ms, transform .3s ease-in-out 800ms;
`;

export const CarouselDescriptionText = styled.p`
font-size: 18px;
margin-top: 50px;
width: 75%;
color: ${normalBlue};
opacity: ${props => (props.$showDescriptionText ? 1 : 0)};
transform: translateX(${props => (props.$showDescriptionText ? '0' : '-10%')});
transition: opacity .3s ease-in-out 800ms, transform .3s ease-in-out 800ms;
`;

export const ImageContainer = styled.div`
width: 50%;
`;

export const CarouselImage = styled.img`
max-width: 100%;
height: 600px;
opacity: ${props => (props.$showImage ? 1 : 0)};
transition: opacity .3s ease-in-out 800ms;
`;

