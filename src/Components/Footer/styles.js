import styled from "styled-components";

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

  /* background-color: #234; */

  @media (max-width: 1187px) {
    width: 96%;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* background-color: #231; */

  @media (max-width: 550px) {
    margin: 13px 0;
  }
`;

export const ElementTitle = styled.p`
  font-size: 20px;
  margin-bottom: 52px;

  @media (max-width: 719px) {
    font-size: 15px;
  }
  @media (max-width: 550px) {
    margin-bottom: 10px;
    font-size: 19px;
  }
  @media (max-width: 270px) {
    font-size: 15px;
  }
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

  @media (max-width: 550px) {
    margin-bottom: 7px;
  }
`;

export const Title = styled.p`
  font-size: 20px;

  @media (max-width: 719px) {
    font-size: 15px;
  }
  @media (max-width: 550px) {
    font-size: 19px;
  }
  @media (max-width: 270px) {
    font-size: 15px;
  }
`;

export const Value = styled.a`
  font-size: 20px;
  color: #a4ffe3;
  cursor: pointer;
  text-decoration: none;

  &:hover {
  }

  @media (max-width: 719px) {
    font-size: 15px;
  }
  @media (max-width: 550px) {
    font-size: 19px;
  }
  @media (max-width: 270px) {
    font-size: 15px;
  }
`;
