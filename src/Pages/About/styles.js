import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: #349; */

    @media(max-height: 702px){
        height: auto;
    }



`;

export const AboutItens = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    width: 1100px;
    height: 580px;
    position: relative;

    /* background-color: #342; */

    @media(max-width: 1176px){
        width: 95%;
    }
    
    @media(max-width: 854px){
        height: auto;
        flex-direction: column;
        margin: 40px 0;
    }

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

    /* background-color: #253; */

    @media(max-width: 1104px){
        width: 60%;
    }

    @media(max-width: 957px){
        width: 55%;
    }

    @media(max-width: 854px){
        width: 62%;
    }

    @media(max-width: 819px){
        width: 55%;
    }
    @media(max-width: 702px){
        position: relative;
        width: 98%;
    }

`;

export const AboutHeaderText = styled.p`
    font-size: 50px;
    margin-bottom: 30px;


    @media(max-height: 509px){
        margin-bottom: 5px;
    }
    @media(max-height: 396px){
        font-size: 40px;
        margin-bottom: 2px;
    }
    
    @media(max-width: 854px){
        font-size: 40px;
        margin-bottom: 10px;
    }
    @media(max-width: 702px){
        margin-top: 40px;
    }
`;

export const AboutTitleText = styled.p`
    font-size: 42px;
    margin-bottom: 15px;

    @media(max-height: 509px){
        margin-bottom: 3px;
    }
    @media(max-height: 396px){
        font-size: 30px;
        margin-bottom: 1px;
    }

    @media(max-width: 854px){
        font-size: 35px;
        margin-bottom: 10px;
    }
    @media(max-width: 448px){
        font-size: 30px;
    }
    @media(max-width: 289px){
        font-size: 25px;
    }
`;

export const AboutText = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;

    @media(max-height: 509px){
        line-height: 25px;
    }
    @media(max-height: 396px){
        font-size: 15px;
        line-height: 20px;
    }

    @media(max-width: 854px){
        font-size: 18px;
    }
    @media(max-width: 819px){
        line-height: 25px;
    }
    @media(max-width: 819px){
        font-size: 16px;
    }

`;

export const ImageContainer = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeInUp",
    duration: 0.5,
    initiallyVisible: false,
    animateOnce: true,
})`
    position: absolute;
    right: 0;

    @media(max-width: 702px){
        position: relative;
        margin-top: -70px;
    }

`;

export const ProfileImage = styled.img`
    /* width: 806px; */
    height: 580px;
    /* background-color: #123; */

    @media(max-height: 565px){
        height: 450px;
    }
    @media(max-height: 466px){
        height: 350px;
    }
    @media(max-height: 396px){
        height: 280px;
    }

    @media(max-width: 854px){
        height: 480px;
    }
    @media(max-width: 448px){
        width: 100%;
        height: auto;
    }
`;
