import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  /* Things to come */
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderRow = styled.div`
  grid-template-rows: repeat(2, 1fr);
  display: flex;
  flex-direction: row;
  grid-gap: 32px;
`;

export const HeroHeader = styled.div`
  color: #fff;
  font-size: 40px;
  text-align: center;
  transition: 1s ease-in-out;

  @media screen and (max-width: 768px) {
    transition: 1s ease-in-out;
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 12px;
  color: #fff;
  font-size: 30px;
  text-align: start;
  max-width: 600px;
  transition: 1s ease-in-out;

  @media screen and (max-width: 768px) {
    transition: 1s ease-in-out;
    font-size: 24px;
    max-width: 400px;
  }
`;

export const SocialLink = styled.a`
  color: #000;
  cursor: pointer;
  font-size: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
