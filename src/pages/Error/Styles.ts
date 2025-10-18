import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--default);
`;
export const Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.main`
  display: grid;
  place-items: center;
  padding: 6rem 1.5rem 6rem 1.5rem;
`;
export const StatusCode = styled.span`
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  font-weight: 600;
  color: #09090b;
`;
export const Title = styled.h1`
  margin-top: 1rem;
  font-size: 1.5rem;
  letter-spacing: -0.025em;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--primary);
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
export const Text = styled.span`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.75rem;
  color: #9c9c9c;
`;
export const Actions = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap-x: 1.5rem;
  color: #9c9c9c;
`;
