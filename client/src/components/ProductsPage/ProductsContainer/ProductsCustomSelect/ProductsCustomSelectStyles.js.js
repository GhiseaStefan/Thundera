import styled from 'styled-components';
import { normalBlue, lightGrey, white, black } from '../../../../styleVariables';

export const Container = styled.div`
position: relative;
width: 292px;
`

export const Header = styled.div`
background-color: ${white};
border: 1px solid ${lightGrey};
border-radius: 10px;
color: ${black};
cursor: pointer;
padding: 6px 30px 6px 10px;
position: relative;
z-index: 1;
height: 40px;
display: flex;
align-items: center;

&::after {
    border: 6px solid transparent;
    border-top-color: ${black};
    content: '';
    height: 0;
    position: absolute;
    right: 10px;
    top: 55%;
    transform: translateY(-50%);
    width: 0;
    z-index: -1;
}
`

export const Options = styled.ul`
background-color: ${white};
border: 1px solid ${lightGrey};
display: ${(props) => props.$isOpen ? 'block' : 'none'};
list-style: none;
margin: 0;
max-height: 150px;
overflow-y: auto;
padding: 0;
position: absolute;
top: 100%;
width: 100%;
z-index: 1;
`

export const Option = styled.li`
color: ${black};
cursor: pointer;
padding: 0 10px;
height: 40px;
display: flex;
align-items: center;

&:hover {
    background-color: ${normalBlue};
    color: ${white};
}
`