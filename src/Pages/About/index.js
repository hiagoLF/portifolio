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

// Image Modules
import profileImage from '../../images/profile.png'

const aboutTitle = 'Hiago Leão Ferreira'
const aboutText = 'Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.'

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