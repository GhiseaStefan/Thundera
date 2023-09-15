import styled from 'styled-components';
import { white, green } from '../../../styleVariables';

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 150px;

div {
    border: 10px solid ${green};
    border-radius: 50%;
    background-color: ${green};
}

svg {
    color: ${white};
    font-size: 120px;
}

h2 {
    font-size: 36px;
    margin-top: 40px;
}
`