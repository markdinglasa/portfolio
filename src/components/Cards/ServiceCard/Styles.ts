import styled from "styled-components";

export const Card = styled.div`
  overflow: visible;
  width: 100%;
  height: 20rem;
  border-radius: 0.375rem;
  transition: ease-in-out 0.3s;
  &:hover {
    --transform: rotateY(180deg);
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  border-radius: 0.375rem;
`;

export const Back = styled.div`
  background-color: #161616;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    content: " ";
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(
      90deg,
      transparent,
      #e9c6a9,
      #e9c6a9,
      #e9c6a9,
      #e9c6a9,
      transparent
    );

    animation: rotation_481 15000ms infinite linear;
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }
`;

export const BackContent = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #262626;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 1rem;
`;
