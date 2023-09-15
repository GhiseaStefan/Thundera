import styled from 'styled-components';
import { normalBlue, lightBlue2, black, boxShadow5 } from '../../../styleVariables';

export const DropdownContainer = styled.div`
position: absolute;
top: 30px;
left: 10px;
width: 288px;
padding: 10px 0;
border-top-left-radius: .5rem;
border-bottom-left-radius: .5rem;
line-height: 24px;
display: none;
background-color: ${lightBlue2};
z-index: 999;
box-shadow: ${boxShadow5};
`

export const Container = styled.li`
position: relative;
&:hover ${DropdownContainer} {
    display: block;
  }
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

export const CategoryList = styled.ul`
list-style-type: none;
margin-top: 10px;
`
