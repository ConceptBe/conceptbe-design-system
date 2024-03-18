import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { ColorType } from '../../styles/theme';

type BackgroundColorType = keyof Pick<ColorType, 'c1' | 'bg1'>;
type FontColorType = keyof Pick<ColorType, 'w1' | 'b4' | 'b9'>;

type Props<T extends ElementType> = {
  as?: T;
  backgroundColor?: BackgroundColorType;
  fontColor?: FontColorType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Badge = <T extends ElementType>({
  children,
  backgroundColor = 'bg1',
  fontColor = 'b9',
  ...attributes
}: Props<T>) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      fontColor={fontColor}
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
  border-radius: 4px;
`;
