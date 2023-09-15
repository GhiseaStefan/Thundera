import styled from 'styled-components';
import { lightBlue, normalBlue, lightGrey, lightRed, white } from '../../../styleVariables';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 171px 0;

form {
    padding: 20px 60px 30px 60px;
    background-color: ${lightBlue};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        margin: 10px 0;
    }

    div:last-child {
        align-self: flex-start;
    }
}

label {
    display: block;
}

input[type=email], input[type=password] {
    margin-top: 5px;
    border-radius: 10px;
    border: 1px solid ${lightGrey};
    padding: 8px 8px;
    width: 300px;
    outline: none;
}

input[type=submit] {
    border-radius: 10px;
    border: 1px solid ${normalBlue};
    color: ${white};
    background-color: ${normalBlue};
    padding: 8px 24px;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
}
`

export const Error = styled.div`
align-self: flex-start;
background-color: ${lightRed};
color: ${white};
width: 100%;
max-width: 300px;
padding: 4px 12px;
border-radius: 10px;
word-wrap: break-word;
`;
