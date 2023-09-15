import styled from 'styled-components';
import { lightBlue, normalBlue, darkBlue, greyBlue, lightGrey, white, black } from '../../styleVariables';

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
margin: 100px 0;
`

export const Section1 = styled.div`
width: 25%;
`

export const ImageContainer = styled.a`
cursor: pointer;

img {
    max-width: 240px;
}
`

export const Desc = styled.p`
margin-top: 20px;
font-size: 16px;
color: ${greyBlue};
`

export const Section2 = styled.div`
width: 25%;

h2 {
    font-size: 18px;
    margin-bottom: 20px;
}
`

export const MailInput = styled.input`
height: 54px;
background-color: ${lightBlue};
border: 1px solid ${lightGrey};
border-radius: 8px;
padding: 12px;
font-size: 18px;
outline: none;
width: 100%;
margin-bottom: 20px;
`

export const SubmitInput = styled.input`
color: ${white};
text-align: center;
background-color: ${normalBlue};
border: 1px solid ${normalBlue};
border-radius: 8px;
padding: 14px 18px;;
font-weight: bold;
font-size: 18px;
cursor: pointer;
transition: background-color .3s ease;

&:hover {
    background-color: ${darkBlue};
}
`

export const Section3 = styled.div`
border: 1px solid ${lightGrey};
max-height: 120px;
border-radius: 4px;
padding: 10px;
background-color: ${lightBlue};
width: 15%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const MediaContainer = styled.div`
display: flex;
justify-content: center;

a {
    font-size: 25px;
    margin-right: 16px;
    color: ${black};
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: color .3s ease;

    &:hover {
        color: ${normalBlue};
    }
}

a:nth-child(2) {
    margin-top: 2px;
}

a:nth-child(3) {
    margin-top: 4px;
}
`

export const HlinksContainer = styled.div`
ul {
    list-style-type: none;
}

a {
    font-size: 16px;
    color: ${normalBlue};
    display: inline-block;
    margin-top: 10px;
    transition: color .3s ease;
    text-decoration: none;

    &:hover {
        color: ${darkBlue};
    }
}
`