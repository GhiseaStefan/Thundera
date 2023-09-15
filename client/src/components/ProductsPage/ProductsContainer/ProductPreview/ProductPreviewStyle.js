import styled from 'styled-components';
import { normalBlue, darkBlue, lightGrey, white, black } from '../../../../styleVariables';

export const Container = styled.a`
width: 250px;
height: 520px;
border: 1px solid ${lightGrey};
border-radius: 10px;
padding: 10px;
display: block;
text-decoration: none;
color: ${black};
cursor: pointer;

p {
    margin-top: 20px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 60px;
}

h2 {
    margin-top: 20px;
    font-size: 18px;
    color: ${normalBlue};
}

button {
    outline: none;
    margin-top: 50px;
    text-align: center;
    background-color: ${normalBlue};
    color: ${white};
    border: 1px solid ${normalBlue};
    border-bottom-left-radius: .375rem;
    border-top-right-radius: .375rem;
    width: 100%;
    font-size: 1rem;
    padding: 4px 0;
    cursor: pointer;

    &:hover {
        background-color: ${darkBlue};
    }
}
`

export const ImageContainer = styled.div`
height: 50%;
margin-top: 10px;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`