import styled, { keyframes } from 'styled-components';
import { normalBlue, darkBlue, darkBlue2, white, lightGrey2, lightRed, boxShadow1, boxShadow2, boxShadow3, normalBlue2 } from '../../../styleVariables';

export const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`

export const UtilPayWrapper = styled.div`
display: flex;
`

export const UtilContainer = styled.div`
width: 400px;
`

export const LabelInputContainer = styled.div`
margin-bottom: .35rem;

label {
    display: block;
    margin-bottom: .25rem;
    font-size: 0.93rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input {
    width: 80%;
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
}
`

export const PaymentContainer = styled.div`
margin-left: 50px;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button`
margin-top: 40px;
background-color: ${props => (props.$isLoading ? `${darkBlue2}` : `${normalBlue}`)};
border: none;
color: ${white};
font-weight: bold;
width: 100%;
padding: 8px;
border-radius: 16px;
cursor: pointer;
transition: background-color .15s ease;
cursor: ${props => (props.$isLoading ? 'not-allowed' : 'pointer')};
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    background-color: ${props => (props.$isLoading ? `${darkBlue2}` : `${darkBlue}`)};
}
`

export const Spinner = styled.div`
width: 20px;
height: 20px;
border: 2px solid rgba(255, 255, 255, 0.3);
border-top: 2px solid ${white};
border-radius: 50%;
animation: ${rotate} 1s linear infinite;
display: ${props => (props.$isLoading ? 'block' : 'none')};
margin-right: 5px;
`

const slideIn = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

export const Error = styled.div`
position: fixed;
bottom: 20px;
left: 20px;
background: ${lightRed};
color: ${white};
padding: 10px 20px;
border-radius: 5px;
box-shadow: ${boxShadow3};
animation: ${slideIn} 0.3s ease;
`

export const LoadingBar = styled.div`
width: ${props => (props.$messageProgress)}%;
height: 2px;
background-color: ${normalBlue};
position: absolute;
bottom: 0;
left: 0;
transition: width 0.1s ease;
`