// Node Modules
import React from 'react';

// Local Modules
import {
    Container,
    AboutItens,
    AboutTextContainer,
    AboutHeaderText,
    AboutTitleText,
    AboutText,
    ImageContainer,
    ProfileImage,
} from './styles';
import about from '../../data/about.json'

// Image Modules
import profileImage from '../../images/profile.png'

const {aboutTitle, aboutText} = about

const About = () => {
    return (
        <Container>
            <AboutItens>
                <AboutTextContainer>
                    <AboutHeaderText>Sobre</AboutHeaderText>
                    <AboutTitleText>{aboutTitle}</AboutTitleText>
                    <AboutText>{aboutText}</AboutText>
                </AboutTextContainer>

                <ImageContainer>
                    <ProfileImage
                        src={profileImage}
                    />
                </ImageContainer>
            </AboutItens>
        </Container>
    )
}

export default About;