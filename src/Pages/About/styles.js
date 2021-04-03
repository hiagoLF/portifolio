import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AboutItens = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    width: 1100px;
    height: 580px;
    position: relative;
    /* background-color: #534; */
`;

export const AboutTextContainer = styled(ScrollAnimation).attrs({
    animateIn: "animate__bounceInLeft",
    duration: 1,
    initiallyVisible: false,
    animateOnce: true,
})`
    width: 707px;
    position: absolute;
    left: 0;
    z-index: 2;
`;

export const AboutHeaderText = styled.p`
    font-size: 50px;
    margin-bottom: 30px;
`;

export const AboutTitleText = styled.p`
    font-size: 42px;
    margin-bottom: 15px;
`;

export const AboutText = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;
`;

export const ImageContainer = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeInUp",
    duration: 0.5,
    initiallyVisible: false,
    animateOnce: true,
})`
    position: absolute;
    right: 0;
`;

export const ProfileImage = styled.img`
    /* width: 806px; */
    height: 580px;
`;
