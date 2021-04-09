import styled from 'styled-components'

export const Container = styled.div`
    height: 100px;
    justify-content: space-between;
    align-items: center;
    /* background-color: #765342; */
    background-color: rgba(10, 4, 60, 0.95);
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

    @media(max-width: 394px){
        height: 80px;
    }

    @media(max-height: 630px){
        height: 70px;
    }

    @media(max-height: 378px){
        height: 50px;
    }


`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 92px;

    /* background-color: #453; */

    @media(max-width: 1228px){
        margin-left: 40px;
    }

    @media(max-width: 805px){
        margin-left: 20px;
    }

    @media(max-width: 622px){
        position: absolute;
    }

    @media(max-width: 400px){
        margin-left: 5px;
    }
`;

export const LogoImage = styled.img`
    /* width: 48px; */
    height: 76.02px;

    @media(max-width: 1139px){
        height: 65px;
    }

    @media(max-height: 630px){
        height: 60px;
    }

    @media(max-height: 378px){
        height: 45px;
    }


`;

export const LogoText = styled.div`
    margin-left: 18px;

    @media(max-width: 394px){
        margin-left: 8px;
    }
`;

export const LogoTitle = styled.p`
    font-weight: 700;
    font-size: 30px;
    color: #FFF;

    @media(max-width: 1139px){
        font-size: 22px;
    }

    @media(max-width: 805px){
        font-size: 20px;
    }

    @media(max-width: 621px){
        font-size: 25px;
    }

    @media(max-width: 509px){
        font-size: 30px;
    }

    @media(max-width: 394px){
        font-size: 22px;
    }

    @media(max-height: 378px){
        font-size: 23px;
    }

`;

export const LogoSlogan = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #FFF;

    @media(max-width: 1139px){
        font-size: 18px;
    }

    @media(max-width: 805px){
        font-size: 16px;
    }

    @media(max-width: 621px){
        font-size: 18px;
    }
    @media(max-width: 509px){
        font-size: 20px;
    }

    @media(max-width: 394px){
        font-size: 18px;
    }
    @media(max-width: 335px){
        font-size: 14px;
    }
    @media(max-height: 378px){
        font-size: 14px;
    }


`;

export const OptionsContainer = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 540px;
    justify-content: space-between;
    margin-right: 92px;
    /* background-color: #235432; */

    @media(max-width: 1228px){
        margin-right: 40px;
    }

    @media(max-width: 1139px){
        width: 400px;
    }

    @media(max-width: 805px){
        margin-right: 20px;
    }

    @media(max-width: 805px){
        width: 340px;
    }

    @media(max-width: 692px){
        height: 45px;
        width: 300px;
    }

    @media(max-width: 638px){
        visibility: hidden;
    }

    @media(max-height: 378px){
        height: 38px;
        width: 300px;
}


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

    @media(max-width: 1139px){
        font-size: 20px;
    }

    @media(max-width: 805px){
        font-size: 18px;
    }

    @media(max-width: 692px){
        font-size: 16px;
    }

    @media(max-height: 378px){
        font-size: 16px;
    }

`;


export const HiddenMenuButton = styled.div`
    margin-right: 20px;
    position: absolute;
    right: 0;
    visibility: hidden;


    @media(max-width: 638px){
        visibility: visible;
    }

    @media(max-width: 400px){
        margin-right: 5px;
    }

`;

export const HamburguerIcon = styled.img`
    /* width: 40px; */
    height: 40px;
    transition-duration: 0.1s;

    &:active{
        transform: rotate(90deg);
        opacity: 0
    }

    @media(max-width: 394px){
        height: 30px;
    }


`;

export const HiddenMenu = styled.div`
    background-color: rgba(10, 4, 60, 0.96);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    z-index: 4;
    

    position: absolute;
    top: 99px;

    animation-name: appearByRight;
    animation-duration: 0.4s;

    @media(max-width: 394px){
      top: 80px;
  }

  @media(max-height: 630px){
      top: 70px;
  }
  @media(max-height: 378px){
      top: 50px;
  }


`;

export const MenuOption = styled.a`
    border-bottom: 1px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    text-decoration: none;
    color: #fff;

    padding: 0 10px;

    cursor: pointer;
`;

export const MenuOptionText = styled.p`
    font-size: 30px;
    font-weight: 400;
    margin-top: 15px;


`;