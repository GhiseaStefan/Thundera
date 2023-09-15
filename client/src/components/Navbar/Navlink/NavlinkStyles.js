import styled from 'styled-components';
import { normalBlue, black } from '../../../styleVariables';

export const Container = styled.li`
position: relative;
`;

export const Anchor = styled.a`
color: ${props => (props.$isActive ? `${normalBlue}` : `${black}`)};
text-decoration: none;
transition: color .2s;
margin: 0 20px;
padding-bottom: 10px;
position: relative;

&::after {
    content: '';
    width: ${props => (props.$isActive ? '100%' : '0%')};
    height: 2px;
    background-color: ${normalBlue};
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: width .2s;
}

&:hover {
    color: ${normalBlue};
}

&:hover::after {
    width: 100%;
}
`