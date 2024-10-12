import styled from '@emotion/styled';
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';

import { ColorType } from '../../styles/theme';
import { convertCSS } from '../../utils/convertCSS';

type BackgroundColorType = keyof Pick<ColorType, 'c1' | 'bg1'>;
type FontColorType = keyof Pick<ColorType, 'w1' | 'b4' | 'b9'>;

type Props<T extends ElementType = 'div'> = {
  as?: T;
  backgroundColor?: BackgroundColorType;
  fontColor?: FontColorType;
  radius?: number | string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T> &
  HTMLAttributes<T>;

const Badge = <T extends ElementType>({
  children,
  backgroundColor = 'bg1',
  fontColor = 'b9',
  radius = 4,
  ...attributes
}: Props<T>) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      radius={radius}
      {...attributes}
    >
      {children}
    </Wrapper>
  );
};

export default Badge;

const Wrapper = styled.li<{
  backgroundColor: BackgroundColorType;
  fontColor: FontColorType;
  radius: number | string;
}>`
  display: flex;
  align-items: center;
  height: 27px;
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  color: ${({ theme, fontColor }) => theme.color[fontColor]};
  font-size: 12px;
  font-weight: 500;
  padding: 0px 10px;
  border-radius: ${({ radius }) => convertCSS(radius)};
`;
