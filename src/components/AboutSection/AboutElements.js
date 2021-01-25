import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  height: 900px;
  padding: 48px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    height: 1100px;
    padding: 24px 0px;
  }
`;

export const ImgContainer = styled.img`
  width: 400px; /* width of container */
  height: 400px; /* height of container */
  border-radius: 50%;
  /* overflow: hidden; */
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 762px) {
    width: 200px; /* width of container */
    height: 200px;
    transition: all 0.5s ease-in-out;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  color: #000;
  justify-content: start;
  align-items: start;
  text-align: start;

  @media screen and (max-width: 1000px) {
    max-width: 600px;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 762px) {
    max-width: 400px;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 500px) {
    max-width: 200px;
    transition: all 0.5s ease-in-out;
  }
`;

export const TextHeader = styled.h1`
  color: inherit;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    transition: all 0.5s ease-in-out;
  }
`;

export const TextBody = styled.div`
  color: inherit;
  font-size: 1.2rem;
  /* text-align: center; */

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    transition: all 0.5s ease-in-out;
  }
`;
