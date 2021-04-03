import styled from 'styled-components'
import backgroundImage from '../../images/background-home.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: 100% 100%;
    background-color: #0A043C;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextContainer = styled.div`
    height: 360px;
    width: 1050px;
    /* background-color: #255234; */
`;

export const HomeTitle = styled.p`
    font-size: 80px;
    color: #FFE3DE;

    animation-name: appearByBottom;
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
    animation-timing-function: ease;
`;

export const DescriptionContainer = styled.div`
    margin-top: 70px;

    animation-name: emerge;
    animation-duration: 0.5s;
    animation-delay: 1s;
    animation-fill-mode: backwards;
`;

export const DescriptionText = styled.p`
    font-size: 40px;
    color: #A4FFE3
`;
