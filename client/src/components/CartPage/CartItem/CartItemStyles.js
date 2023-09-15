import styled from 'styled-components';
import { normalBlue, black } from '../../../styleVariables';

export const Container = styled.div`
display: flex;
margin-top: 20px;
border-top: 1px solid ${normalBlue};
position: relative;

svg {
    font-size: 24px;
    position: absolute;
    right: 0px;
    cursor: pointer;
    margin-top: 5px;
}
`

export const ItemImage = styled.div`
max-width: 120px;
max-height: 120px;
margin-top: 5px;
margin-right: 20px;
margin-left: 10px;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

export const ItemInfo = styled.div`
margin-top: 5px;
padding-right: 15%;
display: grid;
grid-template-rows: auto auto auto;

p {
    color: ${black};
    opacity: 0.8;
}

p:nth-child(2) {
    font-size: 14px;
}
`