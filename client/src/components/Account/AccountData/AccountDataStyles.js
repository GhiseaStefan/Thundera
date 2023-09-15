import styled from 'styled-components';
import { normalBlue, darkBlue, greyBlue, lightRed, white, black } from '../../../styleVariables';

export const Container = styled.div`
display: flex;
justify-content: center;

form {
    h2 {
        font-size: 24px;
        font-weight: normal;
        margin-top: 20px;
        margin-bottom: 10px;
    }
}
`

export const PairContainer = styled.div`
display: flex;

div:nth-child(2n) {
    margin-left: 20px;
}
`

export const LabelInputContainer = styled.div`
margin-bottom: 20px;

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 220px;
    padding: 8px;
    outline: none;
    border: 1px solid ${greyBlue};
    border-radius: 4px;
    color: ${greyBlue};

    &:focus {
        color: ${black};
        border-color: ${normalBlue};
    }
}
`

export const SubmitButton = styled.input`
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
width: 220px;

&:hover {
    background-color: ${darkBlue};
}
`

export const Error = styled.div`
position: absolute;
font-size: 12px;
margin-top: 2px;
color: ${lightRed};
`