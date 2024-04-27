import styled from '@emotion/styled';
import { ReactNode } from 'react';

import NavigationItem from './NavigationItem';
import PNGBottomBg from '../../assets/image/bottom_bg.png';

interface Props {
  children: ReactNode;
}

const Navigation = ({ children, ...attributes }: Props) => {
  return (
    <Wrapper {...attributes}>
      <NavBackImg src={PNGBottomBg} alt="bottom-menu-back-image" />
      <NavWrapper>{children}</NavWrapper>
    </Wrapper>
  );
};

Navigation.Item = NavigationItem;

export default Navigation;

const Wrapper = styled.div`
  position: fixed;
  height: 75px;
  bottom: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 420px;
  z-index: ${({ theme }) => theme.zIndex.navigation};
`;

const NavBackImg = styled.img`
  width: 100%;
  height: 100%;
`;

const NavWrapper = styled.nav`
  width: 100%;
  position: absolute;
  bottom: 8%;
  display: flex;
  justify-content: space-between;
  gap: 20%;
`;
