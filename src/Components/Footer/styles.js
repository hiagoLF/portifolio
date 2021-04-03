import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #040023;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterElements = styled.div`
    width: 1138px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 28px 0;
`;

export const Element = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const ElementTitle = styled.p`
    font-size: 20px;
    margin-bottom: 52px;
`;

export const ElementItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-bottom: 13px;
`;

export const Title = styled.p`
    font-size: 20px;
`;

export const Value = styled.p`
    font-size: 20px;
    color: #A4FFE3;
    cursor: pointer;

    &:hover{

    }
`;

