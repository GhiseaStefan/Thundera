import styled from 'styled-components';
import { normalBlue2, white } from '../../../../styleVariables';

export const Container = styled.div`
margin-left: 15%;
margin-right: 20px;
`

export const MainImageContainer = styled.div`
width: 500px;
height: 500px;
overflow: hidden;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform .5s ease-in-out;

    &:hover {
        transform:scale(1.05);
    }
}
`

export const PrevImages = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;

:last-child {
    margin-right: 0px;
}
`

export const PrevImageContainer = styled.div`
width: 100px;
height: 100px;
margin-right: 10px;
padding: 4px;
border: ${props => (props.$activeImage ? `4px solid ${normalBlue2}` : `4px solid ${white}`)};
border-radius: 4px;
cursor: pointer;
overflow: hidden;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform .5s ease-in-out;
    
    &:hover {
        transform:scale(1.1);
    }
}
`