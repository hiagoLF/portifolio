// Node Modules
import React from 'react';
import Typist from 'react-typist';

// Local Modules
import {
    Container,
    TextContainer,
    HomeTitle,
    DescriptionContainer,
    DescriptionText,
} from './styles';
import home from '../../data/home.json'

const {title, descriptions} = home



function Home() {
    return (
        <Container>
            <TextContainer>
                <HomeTitle>{title}</HomeTitle>
                <DescriptionContainer>
                    <Typist
                        cursor={{
                            show: true,
                            blink: true,
                            element: '_____',
                            hideWhenDone: true,
                            hideWhenDoneDelay: 500,
                        }}
                        avgTypingDelay={30}
                        stdTypingDelay={10}
                    >
                        <Typist.Delay ms={1300} />
                        {descriptions.map((description) => (
                                <DescriptionText>
                                    {description}
                                    < Typist.Delay ms={500} />
                                </DescriptionText>
                        ))}
                    </Typist>
                </DescriptionContainer>
            </TextContainer>
        </Container >
    )
}

export default Home;