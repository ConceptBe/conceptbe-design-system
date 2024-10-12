import styled from '@emotion/styled';
import { ReactNode } from 'react';

import NavigationItem from './NavigationItem';

interface Props {
  children: ReactNode;
}

const Navigation = ({ children, ...attributes }: Props) => {
  return (
    <Wrapper {...attributes}>
      <NavWrapper>{children}</NavWrapper>
    </Wrapper>
  );
};

Navigation.Item = NavigationItem;

export default Navigation;

const Wrapper = styled.div`
  position: fixed;
  height: 64px;
  bottom: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 420px;
  background-color: ${({ theme }) => theme.color.w1};
  z-index: ${({ theme }) => theme.zIndex.navigation};
`;

const NavWrapper = styled.nav`
  width: 100%;
  position: absolute;
  bottom: 8%;
  display: flex;
  justify-content: space-between;
  gap: 20%;
`;
