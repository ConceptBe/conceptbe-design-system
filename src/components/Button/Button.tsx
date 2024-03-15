import styled from '@emotion/styled';

import { convertCSS } from '../..';

export interface Props {
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  padding?: string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  isGrayOut?: boolean;
}

const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: ${({ width }) => (width ? convertCSS(width) : '100%')};
  height: ${({ height }) => height && convertCSS(height)};
  min-width: ${({ minWidth }) => minWidth && convertCSS(minWidth)};
  min-height: ${({ minHeight }) => minHeight && convertCSS(minHeight)};
  max-width: ${({ maxWidth }) => maxWidth && convertCSS(maxWidth)};
  max-height: ${({ maxHeight }) => maxHeight && convertCSS(maxHeight)};
  background-color: ${({ isGrayOut, theme }) =>
    isGrayOut ? theme.color.bg1 : theme.color.c1};
  color: ${({ isGrayOut, theme }) =>
    isGrayOut ? theme.color.b : theme.color.w1};
  font-size: ${({ theme }) => theme.font.suit16sb.fontSize}px;
  font-weight: ${({ theme }) => theme.font.suit16sb.fontWeight};
  padding: ${({ padding }) => (padding ? padding : '17px 28px')};
  padding-top: ${({ paddingTop }) => paddingTop && convertCSS(paddingTop)};
  padding-right: ${({ paddingRight }) =>
    paddingRight && convertCSS(paddingRight)};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom && convertCSS(paddingBottom)};
  padding-left: ${({ paddingLeft }) => paddingLeft && convertCSS(paddingLeft)};
`;

export default Button;
