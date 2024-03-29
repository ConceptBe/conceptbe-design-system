import styled from '@emotion/styled';
import { CSSProperties } from 'react';

import { ColorKeyType } from '../../styles/theme';
import { convertCSS } from '../../utils/convertCSS';

export interface Props {
  flex?: CSSProperties['flex'];
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  alignContent?: CSSProperties['alignContent'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  justifyItems?: CSSProperties['justifyItems'];
  gap?: number | string;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  margin?: string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginLeft?: number | string;
  marginBottom?: number | string;
  padding?: string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  border?: string;
  borderRadius?: number | string;
  borderColor?: ColorKeyType;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  backgroundColor?: ColorKeyType;
  color?: ColorKeyType;
  overflow?: CSSProperties['overflow'];
  position?: CSSProperties['position'];
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  cursor?: CSSProperties['cursor'];
  opacity?: CSSProperties['opacity'];
  zIndex?: CSSProperties['zIndex'];
  shadow?: CSSProperties['boxShadow'];
  boxSizing?: CSSProperties['boxSizing'];
}

const Flex = styled.div<Props>`
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  flex-basis: ${({ basis }) => basis};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  gap: ${({ gap }) => gap && convertCSS(gap)};
  width: ${({ width }) => width && convertCSS(width)};
  height: ${({ height }) => height && convertCSS(height)};
  min-width: ${({ minWidth }) => minWidth && convertCSS(minWidth)};
  min-height: ${({ minHeight }) => minHeight && convertCSS(minHeight)};
  max-width: ${({ maxWidth }) => maxWidth && convertCSS(maxWidth)};
  max-height: ${({ maxHeight }) => maxHeight && convertCSS(maxHeight)};
  margin: ${({ margin }) => margin};
  margin-right: ${({ marginRight }) => marginRight && convertCSS(marginRight)};
  margin-top: ${({ marginTop }) => marginTop && convertCSS(marginTop)};
  margin-left: ${({ marginLeft }) => marginLeft && convertCSS(marginLeft)};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom && convertCSS(marginBottom)};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop && convertCSS(paddingTop)};
  padding-right: ${({ paddingRight }) =>
    paddingRight && convertCSS(paddingRight)};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom && convertCSS(paddingBottom)};
  padding-left: ${({ paddingLeft }) => paddingLeft && convertCSS(paddingLeft)};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) =>
    borderRadius && convertCSS(borderRadius)};
  border-color: ${({ borderColor, theme }) =>
    borderColor && theme.color[borderColor]};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor && theme.color[backgroundColor]};
  color: ${({ color: textColor, theme }) =>
    textColor && theme.color[textColor]};
  overflow: ${({ overflow }) => overflow};
  position: ${({ position }) => position};
  top: ${({ top }) => top && convertCSS(top)};
  left: ${({ left }) => left && convertCSS(left)};
  right: ${({ right }) => right && convertCSS(right)};
  bottom: ${({ bottom }) => bottom && convertCSS(bottom)};
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};
  z-index: ${({ zIndex }) => zIndex};
  box-shadow: ${({ shadow }) => shadow};
  box-sizing: ${({ boxSizing }) => boxSizing};
`;

export default Flex;
