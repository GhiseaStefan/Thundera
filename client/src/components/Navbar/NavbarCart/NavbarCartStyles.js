import styled from 'styled-components';
import { normalBlue, darkBlue, white } from '../../../styleVariables';

export const Bar = styled.div`
font-size: 20px;
font-weight: bold;
color: ${white};
background-color: ${normalBlue};
border-top-left-radius: 10px;
border-top-right-radius: 10px;
padding: 4px 8px;
`

export const ProductList = styled.div`
overflow-y: auto;
`

export const Product = styled.div`
margin-top: 20px;
display: flex;
padding: 4px 8px;
`

export const ImageContainer = styled.div`
max-width: 100px;
max-height: 100px;
margin-right: 10px;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

export const UtilContainer = styled.div`

p {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`

export const ViewCart = styled.a`
display: block;
outline: none;
text-decoration: none;
text-align: center;
background-color: ${normalBlue};
color: ${white};
border: 1px solid ${normalBlue};
border-bottom-left-radius: .375rem;
border-top-right-radius: .375rem;
font-size: 1rem;
margin: 10px 0;
padding: 12px;
cursor: pointer;
width: 50%;
align-self: center;

&:hover {
    background-color: ${darkBlue};
}
`