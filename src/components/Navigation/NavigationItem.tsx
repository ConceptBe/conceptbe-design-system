import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type PositionType = 'normal' | 'center';

export interface Props {
  onClick?: () => void;
  position?: PositionType;
  children: ReactNode;
}

const NavigationItem = ({ onClick, position = 'normal', children }: Props) => {
  return (
    <Wrapper
      data-testid="navigation-item"
      onClick={onClick}
      position={position}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ position: PositionType }>`
  ${({ position, theme }) =>
    position === 'center'
      ? css`
          position: absolute;
          background-color: ${theme.color.c1};
          border-radius: 50%;
          bottom: -3px;
          transform: translate(-50%, -50%);
          left: 50%;
          width: 58px;
          height: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 99;
        `
      : css`
          flex: 1 1 auto;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
        `}
`;

export default NavigationItem;
