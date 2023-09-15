import React from 'react'
import { Container, ImageContainer, Section1, Desc, Section2, MailInput, SubmitInput, Section3, MediaContainer, HlinksContainer } from './FooterStyles'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <Container>
            <Section1>
                <ImageContainer href='/'>
                    <img src='/images/Logo.png' />
                </ImageContainer>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ullam facilis explicabo fugiat, numquam tenetur quod illo eos nihil obcaecati.
                </Desc>
            </Section1>
            <Section2>
                <h2>Join Our Newsletter!</h2>
                <form>
                    <MailInput type='email' placeholder='Your Email' />
                    <SubmitInput type='submit' value='Subscribe' />
                </form>
            </Section2>
            <Section3>
                <MediaContainer>
                    <a href='/'><BiLogoFacebook /></a>
                    <a href='/'><BiLogoInstagram /></a>
                    <a href='/'><BsYoutube /></a>
                    <a href='/'><BiLogoLinkedin /></a>
                </MediaContainer>
                <HlinksContainer>
                    <ul>
                        <li>
                            <a href='/'>Terms and conditions</a>
                        </li>
                        <li>
                            <a href='/'>Cookies policy</a>
                        </li>
                    </ul>
                </HlinksContainer>
            </Section3>
        </Container>
    )
}

export default Footer