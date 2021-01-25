import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff 50%;

  @media screen and (max-width: 500px) {
    padding: 24px 0px;
  }
`;

export const TopWrapper = styled.div`
  height: 450px;
  width: 98%;
  display: block;
  background-color: #003644;
  border-radius: 24px;
  align-items: center;
`;

export const TextWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: auto;
  max-width: 700px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    max-width: 400px;
    transition: 1s ease-in-out;
  }
`;

export const ProjectH1 = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  font-weight: 800;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
  }
`;

export const ProjectP = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    transition: 0.2s ease-in-out;
  }
`;

export const GridPadding = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
  margin-top: -9rem;
`;

export const CardWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(300px, auto) 100%;
  box-sizing: border-box;
  align-items: center;
  justify-items: center;

  grid-gap: 1rem;
  padding: 16px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CalloutWrapper = styled.a`
  margin-top: 2rem;
  margin-bottom: 4rem;
  height: 60px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #003644;
  background-color: #fff;
  border-radius: 50px;
  border: 2px solid #003644;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #003644;
    color: #fff;
  }
`;

export const CalloutTextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 1.5rem;
  justify-content: space-around;
  font-size: 1.25rem;
`;

export const CalloutText = styled.h1`
  font-size: inherit;
  font-weight: 600;
  color: inherit;
`;
