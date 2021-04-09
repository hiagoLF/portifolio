// Node Modules
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

// Image Modules
import backgroundImage from '../../images/background-contact.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-height: 651px){
        height: 651px;
    }
`;

export const ContactBox = styled.div`
    width: 1000px;
    height: 480px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    /* background-color: #453; */

    @media(max-width: 1022px){
        width: 97%;
    }
    @media(max-width: 342px){
        height: 400px;
    }
`;

export const ContactHeaderText = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeIn",
    duration: 0.5,
    initiallyVisible: false,
    animateOnce: true,
})`
    font-size: 50px;
`;

export const ContactInvitation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    /* background-color: #457; */

`;

export const InvitationParagraphText = styled.p`
    font-size: 36px;
    color: #A4FFE3;

    @media(max-width: 849px){
        font-size: 28px;
    }
    @media(max-width: 657px){
        font-size: 25px;
    }
`;

export const ContactInformations = styled.div`
    width: 674px;
    height: 185px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* background-color: #454; */

    @media(max-width: 700px){
        width: 100%;
    }

    @media(max-width: 390px){
        height: 130px;
    }
    @media(max-width: 342px){
        height: 100px;
    }
`;

export const WatsappBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    animation-name: appearByLeft;
    animation-duration: 0.5s;
`;

export const InstagramBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    justify-content: flex-end;
    align-items: center;

    animation-name: appearByRight;
    animation-duration: 0.5s;
    animation-delay: 0.6s;
    animation-fill-mode: backwards;
`;

export const Icon = styled.img`
    height: 80px;
    margin: 0 10px;

    @media(max-width: 390px){
        height: 60px;
    }
    @media(max-width: 342px){
        height: 40px;
    }
`;

export const ContactInfoText = styled.p`
    font-size: 35px;

    @media(max-width: 390px){
        font-size: 30px;
    }
    @media(max-width: 342px){
        font-size: 25px;
    }
`;
