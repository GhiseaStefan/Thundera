import styled from 'styled-components';
import { black } from '../../../styleVariables';

export const Container = styled.div`
margin: 100px 0 100px 15%;
overflow: hidden;
position: relative;
`

export const TopSection = styled.div`
margin-bottom: 24px;
display: flex;
`

export const Header = styled.h2`
font-size: 39px;
`

export const ButtonsContainer = styled.div`
position: absolute;
right: 25%;
`

export const Button = styled.button`
width: 54px;
height: 54px;
font-size: 24px;
border-radius: 100%;
border: 1px solid ${black};
background-color: transparent;
cursor: pointer;

&:first-child {
    margin-right: 25px;
}

svg {
    margin-top: 6px;
}
`

export const BottomSection = styled.div`
display: flex;
`