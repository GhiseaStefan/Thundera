import styled from 'styled-components';
import { greyBlue, normalBlue, white } from '../../../styleVariables';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const UtilContainer = styled.div`
margin-top: 20px;

h1 {
    font-size: 24px;
    font-weight: normal;

    span {
        font-size: 20px;
        color: ${greyBlue};
    }
}
`

export const SelectContainer = styled.div`
display: flex;
align-items: center;
margin-top: 20px;

label {
    margin-right: 20px;
}
`

export const AllProducts = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
width: 50%;
grid-gap: 20px;
margin-top: 20px;
`

export const ScrollTop = styled.div`
width: 40px;
height: 40px;
border-radius: 100%;
background-color: ${normalBlue};
color: ${white};
position: fixed;
bottom: 150px;
right: 50px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

svg {
    font-size: 24px;
}
`