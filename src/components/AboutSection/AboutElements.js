import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #003644;
  display: flex;
  width: 100%;
  height: 800px;
  padding: 24px 24px;
  justify-content: center;
  align-items: center;
`;

export const AboutGrid = styled.div`
  display: grid;
  max-width: 1200px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export const AboutImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  /* height: 300px;
  width: 300px;
  border-radius: 50%; */
  overflow: hidden;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.2);
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  color: #fff;
  justify-content: start;
  align-items: start;
`;

export const TextHeader = styled.h1`
  color: inherit;
  font-size: 2rem;
  font-weight: bold;
`;

export const TextBody = styled.div`
  color: inherit;
  font-size: 1rem;
  margin-bottom: 1rem;
  /* text-align: center; */
`;
