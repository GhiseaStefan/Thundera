import styled from 'styled-components';
import { normalBlue, darkBlue, white, lightGrey, lightGrey2, greyBlue } from '../../../styleVariables';

export const Container = styled.div`
margin: 100px 0;

h2 {
    font-weight: normal;
    font-size: 26px;
    line-height: 36px;
    margin-bottom: 20px;
    margin-left: 15%;
    margin-right: 15%;
    display: inline-block;
}
`

export const MainContainer = styled.div`
display: flex;
`

export const UtilContainer = styled.div`
height: 500px;
width: 35%;
margin-left: auto;
margin-right: 15%;
`

export const Text = styled.h3`
color: ${normalBlue};
font-size: 26px;
line-height: 36px;
margin-top: 20px;
`

export const Description = styled.div`
font-size: 18px;
color: ${greyBlue};
line-height: 150%;

p {
    margin-bottom: 24px;
}

li {
    padding-bottom: 8px;
    padding-left: 4px;
    margin-left: 14px;
}
`

export const AddButton = styled.button`
outline: none;
margin-top: 30px;
text-align: center;
background-color: ${white};
color: ${normalBlue};
border: 1px solid ${normalBlue};
border-bottom-left-radius: .375rem;
border-top-right-radius: .375rem;
font-size: 1rem;
padding: 12px 48px;
cursor: pointer;

transition: all .2s ease-in-out;

&:hover {
    background-color: ${normalBlue};
    color: ${white}
}
`
