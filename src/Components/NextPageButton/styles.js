import styled from 'styled-components'

export const Container = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 35px;
    bottom: 35px;
    background-color: #FFE3DE;

    cursor: pointer;
    
    animation-name: emerge;
    animation-duration: 0.3s;
    animation-delay: 11s;
    animation-fill-mode: backwards;

    transition: 0.1s;

    &:hover{
        transform: translate(0, -5px)
    }
    &:active{
        transform: translate(0, 3px)
    }
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`;
