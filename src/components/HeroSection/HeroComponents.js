import styled from "styled-components";

export const HomeWrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0 0 30px 30px;
`;

export const ContentWrap = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    max-width: 350px;
  }

  @media screen and (max-width: 350px) {
    max-width: 250px;
  }
`;

export const IntroText = styled.p`
  margin: 0px 10px;
  font-weight: 500;
  font-size: 2em;
  color: #2f7773;

  @media screen and (max-width: 900px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const Header1 = styled.h1`
  margin: 0px;
  font-weight: 800;
  font-size: 4em;
  color: #2a6965;

  @media screen and (max-width: 900px) {
    font-size: 3em;
  }

  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Header2 = styled.h1`
  font-size: 3.5em;
  margin: 0px;
  color: #375d5b;

  @media screen and (max-width: 900px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;

export const Paragraph = styled.p`
  max-width: 500px;
  margin-top: 10px;
  font-size: 1em;
  margin-bottom: 15px;
  color: #2f7773;

  @media screen and (max-width: 350px) {
    font-size: 0.75em;
  }
`;

export const SocialLink = styled.a`
  color: #1a4341;
  cursor: pointer;
  font-size: 25px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #fff;
    background: #1a4341;
  }
`;

export const IconRow = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  grid-gap: 16px;

  @media screen and (max-width: 480px) {
    grid-gap: 12px;
  }
`;
