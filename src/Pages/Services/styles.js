import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: #642; */
`;

export const ServicesComponents = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ServicesHeaderText = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeIn",
    duration: 0.5,
    initiallyVisible: false,
    duration: 1,
    animateOnce: true,
})`
    font-size: 50px;
    margin-bottom: 15px;
`;

export const ServicesCards = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
`;

export const ServiceCardContainer = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeInUp",
    initiallyVisible: false,
    duration: 0.3,
    animateOnce: true,
})`
    width: 350px;
    padding: 20px 0;
    border-radius: 10px;
    background-color: #03506F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    &:hover{
        box-shadow: 0 0 10px #ABE2F8;
    }
`;

export const ServiceTitleText = styled.p`
    font-size: 25px;
    text-align: center;
`;

export const ServiceImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 16px 0;
`;

export const ServiceImage = styled.img`
    width: 42px;
    height: 42px;
`;

export const ServiceDescription = styled.p`
    font-size: 16px;
    text-align: center;
    font-weight: 400;
    margin: 0 15px;
`;
