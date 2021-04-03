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
`;

export const ProjectsHeader = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeIn",
    duration: 0.5,
    initiallyVisible: false,
    duration: 1,
    animateOnce: true,
})`
    font-size: 50px;
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ProjectsList = styled.div`
    width: 350px;
    height: 480px;
    position: relative;
    /* background-color: #234126; */
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
    height: 350px;
    width: 350px;
    margin-bottom: ${(props) => props.marginBottom};
`;

export const ProjectNameText = styled.p`
    font-size: 26px;
    text-align: center;
    font-weight: 400;
`;

