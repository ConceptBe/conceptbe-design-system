import styled from '@emotion/styled';
import { ReactNode } from 'react';

import HeaderItem from './HeaderItem';
import Spacer from '../Spacer/Spacer';

interface Props {
  children: ReactNode;
  spacerPosition?: 'start' | 'end';
  main?: boolean;
}

const Header = ({ children, main, spacerPosition, ...attributes }: Props) => {
  return (
    <Wrapper main={main} {...attributes}>
      {spacerPosition === 'start' && <Spacer size={24} />}
      {children}
      {spacerPosition === 'end' && <Spacer size={24} />}
    </Wrapper>
  );
};

Header.Item = HeaderItem;

export default Header;

const Wrapper = styled.header<{ main?: boolean }>`
  padding: 25px 22px;
  height: 24px;
  background: ${(props) =>
    props.main ? props.theme.color.c1 : props.theme.color.w1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  top: 0;
  z-index: 1;
`;
