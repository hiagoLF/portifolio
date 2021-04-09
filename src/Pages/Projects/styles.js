import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 49px;

    /* background-color: #234; */

    @media(max-width: 441px){
        justify-content:flex-start;
    }
    @media(max-height: 602px){
        height: auto;
    }
`;

export const ProjectsHeader = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeIn",
    duration: 0.5,
    initiallyVisible: false,
    duration: 1,
    animateOnce: true,
})`
    font-size: 50px;

    @media(max-height: 602px){
        margin-top: 60px;
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* background-color: #342; */

    @media(max-width: 441px){
        position: relative;
        height: 500px;
        width: 100%;
    }
`;

export const ProjectsList = styled.div`
    width: 350px;
    height: 480px;
    position: relative;
    /* background-color: #234; */

    @media(max-width: 896px){
        width: 300px;
    }
    @media(max-width: 788px){
        width: 250px;
    }
    @media(max-width: 628px){
        width: 180px;
    }
    @media(max-width: 441px){
        position: absolute;
        height: 100%;
    }
`;

export const ProjectCard = styled(ScrollAnimation).attrs({
    duration: 1,
    delay: 700,
    initiallyVisible: false,
    animateOnce: true,
})`
    position: absolute;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
`;

export const ProjectImage = styled.img`
    width: 100%;
    margin-bottom: ${(props) => props.marginBottom};

    @media(max-width: 628px){
        margin-bottom: ${(props) => props.marginBottom && -20}px;
    }
`;

export const ProjectNameText = styled.p`
    font-size: 26px;
    text-align: center;
    font-weight: 400;

    @media(max-width: 628px){
        font-size: 20px;
    }
`;

