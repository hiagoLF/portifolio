import styled from 'styled-components'

export const Container = styled.div`
    height: 100px;
    justify-content: space-between;
    align-items: center;
    /* background-color: #765342; */
    background-color: rgba(10, 4, 60, 0.8);
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 4;


    animation-name: emerge;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-delay: 6s;
    animation-fill-mode: backwards;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 92px;
`;

export const LogoImage = styled.img`
    /* width: 48px; */
    height: 76.02px;
`;

export const LogoText = styled.div`
    margin-left: 18px;
`;

export const LogoTitle = styled.p`
    font-weight: 700;
    font-size: 25px;
    color: #FFF;
`;

export const LogoSlogan = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #FFF;
`;

export const OptionsContainer = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 540px;
    justify-content: space-between;
    margin-right: 92px;
`;

export const OptionPressable = styled.a`
    font-weight: 400;
    font-size: 25px;
    color: #FFF;
    align-self: flex-end;
    cursor: pointer;
    transition: 0.2s;
    text-decoration: none;
    border-bottom: ${props => props.selected && '1px solid #fff'};

    &:hover {
        padding-bottom: 5px;
    }
`;
