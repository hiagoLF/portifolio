import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';


export const Container = styled(ScrollAnimation).attrs({
    animateIn: "animate__fadeIn",
    duration: 0.5,
    initiallyVisible: false,
    duration: 1,
    delay: 500,
    animateOnce: true
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #FFE3DE;
    opacity: ${({appear = true}) => appear ? 1 : 0};
    margin: -1px;
`;

export const VerticalLine = styled.div`
    height: 120px;
    width: 3px;
    background-color: #FFE3DE;
`;

export const SkeletonItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TopPiece = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const HorizontalLine = styled.div`
    width: 60px;
    height: 5px;
    background-color: #FFE3DE;
    opacity: ${({appear = true}) => appear ? 1 : 0};
`;
