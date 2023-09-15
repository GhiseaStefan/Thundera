import styled from 'styled-components';
import { lightBlue, normalBlue, white, black, boxShadow4 } from '../../styleVariables';

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr auto 1fr;
background-color: ${lightBlue};
height: 100px;
`

export const LogoLink = styled.a`
display: flex;
width: 240px;
align-items: center;
cursor: pointer;
margin-left: 15%;
`

export const LogoImage = styled.img`
width: 100%;
`

export const MenuContainer = styled.ul`
list-style-type: none;
display: flex;
align-items: center;
`

export const UtilityContainer = styled.div`
display: flex;
align-items: center;
margin-left: auto;
margin-right: 15%;
`

export const SearchWrapper = styled.div`
cursor: pointer;
font-size: 24px;
margin: 0 20px;
position: relative;

&::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 26px;
    background-color: ${black};
    bottom: 0px;
    right: -20px;
    top: 50%;
    transform:translateY(-50%);
    cursor: default;
}
`

export const UserContainer = styled.div`
position: absolute;
background-color: ${white};
border-radius: 10px;
width: 300px;
padding: 20px;
top: 15px;
left: -250px;
z-index: 2;
cursor: default;
box-shadow: ${boxShadow4};
display: none;

div {
    font-size: 20px;
    background-color: ${normalBlue};
    color: ${white};
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 10px 0;
    cursor: pointer;
    margin: 10px 0;
}

div:last-child {
    background-color: ${black};
    color: ${white};
}
`

export const UserWrapper = styled.div`
cursor: pointer;
font-size: 24px;
margin: 0 20px;
position: relative;

svg {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

&::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 26px;
    background-color: ${black};
    top: 50%;
    transform:translateY(-50%);
    right: -20px;
    cursor: default;
}

&:hover ${UserContainer} {
    display: block;
}
`

export const UserName = styled.p`
font-size: 14px;
`

export const CartContainer = styled.div`
width: 300px;
max-height: 400px;
position: absolute;
left: -270px;
top: 25px;
z-index: 2;
cursor: default;
border-radius: 10px;
background-color: ${white};
box-shadow: ${boxShadow4};
display: none;
flex-direction: column;
`

export const CartWrapper = styled.div`
cursor: pointer;
font-size: 24px;
margin: 0 20px;
position: relative;

&:hover ${CartContainer} {
    display: flex;
}
`

export const Hlink = styled.a`
text-decoration: none;
color: ${black};
`

export const CartCount = styled.div`
position: absolute;
top: 15px;
right: -10px;
width: 16px;
border-radius: 50%;
background-color: ${normalBlue};
display: flex;
justify-content: center;
font-size: 12px;
color: white;
`