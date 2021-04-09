import styled from 'styled-components'
import backgroundImage from '../../images/background-home.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-color: #0A043C;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextContainer = styled.div`
    height: 360px;
    width: 1050px;
    /* background-color: #255234; */

    @media(max-width: 1124px){
        width: 900px;
    }

    @media(max-width: 978px){
        width: 800px;
    }

    @media(max-width: 879px){
        width: 700px;
    }

    @media(max-width: 744px){
        width: 600px;
    }

    @media(max-width: 642px){
        width: 540px;
    }

    @media(max-width: 581px){
        width: 450px;
    }

    @media(max-width: 487px){
        width: 360px;
    }

    @media(max-width: 379px){
        width: 290px;
    }

    @media(max-width: 305px){
        width: 250px;
    }

    @media(max-height: 554px){
        height: 500px;
    }

    @media(max-height: 525px){
        height: 400px;
    }

`;

export const HomeTitle = styled.p`
    font-size: 80px;
    color: #FFE3DE;

    animation-name: appearByBottom;
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
    animation-timing-function: ease;

    @media(max-width: 879px){
        font-size: 60px;
        margin-top: 60px;
    }

    @media(max-width: 581px){
        font-size: 50px;
        margin-top: 90px;
    }

    @media(max-width: 487px){
        font-size: 40px;
    }

    @media(max-width: 379px){
        font-size: 32px;
    }

    @media(max-width: 305px){
        font-size: 28px;
    }

    @media(max-height: 554px){
        margin-top: 80px;
    }

`;

export const DescriptionContainer = styled.div`
    margin-top: 70px;

    animation-name: emerge;
    animation-duration: 0.5s;
    animation-delay: 1s;
    animation-fill-mode: backwards;

    /* background-color: #654; */

    @media(max-width: 879px){
        margin-top: 40px;
    }

    @media(max-height: 554px){
        margin-top: 25px;
    }

`;

export const DescriptionText = styled.p`
    font-size: 40px;
    color: #A4FFE3;

    @media(max-width: 879px){
        font-size: 30px;
    }

    @media(max-width: 581px){
        font-size: 25px;
    }

    @media(max-width: 379px){
        font-size: 20px;
    }


`;
