import styled from 'styled-components';
import { normalBlue, lightBlue3, black, boxShadow6 } from '../../../../styleVariables';

export const CategoryTitle = styled.span`
margin-bottom: 10px;
padding: 4px 12px;
cursor: pointer;
display: flex;
align-items: center;

svg {
    margin-top: 2px;
    margin-left: auto;
}

&:hover {
    background-color: ${lightBlue3};
}
`

export const SubcategoriesContainer = styled.ul`
list-style-type: none;
position: absolute;
top: 0px;
transform: translateX(50%);
width: 200%;
height: 100%;
padding: 20px 0;
border-top-right-radius: .5rem;
border-bottom-right-radius: .5rem;
background-color: ${lightBlue3};
z-index: 999;
box-shadow: ${boxShadow6};

display: grid;
grid-template-columns: auto auto auto auto;
grid-template-rows: 1fr 1fr 1fr 1fr;
overflow-y: auto;

a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: ${black};
    margin: 0 10px;
    transition: color .2s ease-in-out;

    &:hover {
        color: ${normalBlue};
    }
}
`
