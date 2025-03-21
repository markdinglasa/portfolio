import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'
const addOverlay = keyframes`
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(44, 57, 103, 0.3);
  }
`
export const Content = styled.div`
  padding: 0 24px 32px;
`
export const Header = styled.div`
  align-items: center;
  color: ${colors.palette.gray['500']};
  display: flex;
  font-size: 12px;
  font-weight: 400;
  justify-content: space-between;
  margin-bottom: 26px;
  padding: 16px 24px 0;
  position: relative;
`
export const Modal = styled.div`
  background: #fff;
  border-radius: 8px;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
`
export const Overlay = styled.div`
  z-index: 100;
  animation: ${addOverlay} 0.3s forwards;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`
