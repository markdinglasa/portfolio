
import {Icon as UIcon} from '@mdi/react';
import styled from 'styled-components';
import { colors } from '../../styles';
import { ToastType } from '../../types';

export const Container = styled.div<{ type: ToastType }>`
  background: ${colors.primary};
  color: ${colors.primary};
  display: flex;
  padding: 12px;
`
export const Text = styled.span<{ type: ToastType }>`
  align-items: center;
  color: #161616;
  display: flex;
`
export const Icon = styled(UIcon)<{ type: ToastType }>`
color: #161616;
margin-right: 12px;
width: 30px;
height: 30px;`;