import styled from 'styled-components';
import { lightBlue, normalBlue, darkBlue, white, boxShadow2, normalBlue2, boxShadow1, lightGrey2, black } from '../../styleVariables';

export const Container = styled.div`
display: grid;
grid-template-columns: 50% 50%;
margin-top: 20px;
`

export const CartContainer = styled.div`
margin-left: 20%;
width: 500px;
`

export const Bar = styled.div`
background-color: ${normalBlue};
color: ${white};
padding: 4px 10px;
font-weight: bold;
font-size: 20px;
`

export const CheckoutContainer = styled.div`
width: 500px;
margin-left: auto;
margin-right: 20%;
background-color: ${lightBlue};
border-radius: 10px;
position: relative;
padding-bottom: 20px;

p {
    font-size: 18px;
    margin-top: 20px;
    margin-left: 40px;
}

h2 {
    font-size: 22px;
    margin-top: 20px;
    margin-left: 40px;
}
`

export const TotalPrice = styled.h2`
    margin-top: 5px !important;
`

export const Button = styled.a`
text-align: center;
background-color: ${white};
display: inline-block;
text-decoration: none;
color: ${normalBlue};
border: 1px solid ${normalBlue};
border-bottom-left-radius: .375rem;
border-top-right-radius: .375rem;
font-size: 1rem;
padding: 12px;
width: 70%;
cursor: pointer;
margin-left: 40px;
margin-top: 40px;
transition: all .2s ease-in-out;

&:hover {
    background-color: ${normalBlue};
    color: ${white};
}
`

export const Label = styled.label`
display: block;
margin-left: 40px;
margin-top: 20px;
font-size: 18px;
`

export const InputText = styled.input`
margin-left: 40px;
margin-top: 5px;
width: 70%;
border: 1px solid ${lightGrey2};
border-radius: 4px;
outline: none;
padding: 12px;
height: 47px;
box-shadow: ${boxShadow1};
transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;

&:focus {
    box-shadow: ${boxShadow2};
    border-color: ${normalBlue2};
}
`
