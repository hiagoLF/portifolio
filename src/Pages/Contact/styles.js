// Node Modules
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

// Image Modules
import backgroundImage from '../../images/background-contact.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: 100vw 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactBox = styled.div`
    width: 1000px;
    height: 480px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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
`;

export const InvitationParagraphText = styled.p`
    font-size: 36px;
    color: #A4FFE3;
`;

export const ContactInformations = styled.div`
    width: 674px;
    height: 185px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 80px;
    height: 80px;
    margin: 0 10px;
`;

export const ContactInfoText = styled.p`
    font-size: 35px;
`;
