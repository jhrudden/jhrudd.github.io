import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: #fff;
  border-radius: 12px;
  min-height: 250px;
  box-shadow: 0 10px 10px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;

  &:hover {
    scale: 1.05;
    transition: all 0.1s ease-in-out;
  }
`;

export const ProjectContentWrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0.75rem;
`;

export const ProjectIcon = styled.div`
  font-size: inherit;
  margin-right: 1rem;
`;

export const CardH1 = styled.div`
  font-size: inherit;
  color: #000;
  font-weight: bold;
`;

export const CardP = styled.h1`
  font-size: 1rem;
  color: #000;
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const CardLink = styled.a`
  color: 003644;
  text-decoration: none;
`;
