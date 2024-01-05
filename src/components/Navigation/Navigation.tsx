import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import PNGBottomBg from '../../assets/background/bottom_bg.png';
import SVGFeed from '../../assets/navigation/feed.svg';
import SVGActiveFeed from '../../assets/navigation/feed_active.svg';
import SVGProfile from '../../assets/navigation/profile.svg';
import SVGActiveProfile from '../../assets/navigation/profile_active.svg';
import SVGWrite from '../../assets/writeicon24.svg';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <NavBackImg src={PNGBottomBg} alt="bottom-menu-back-image" />
      <NavWrapper>
        <NavItem onClick={() => navigate('/feed')}>
          {location.pathname.startsWith('/feed') ? (
            <SVGActiveFeed />
          ) : (
            <SVGFeed />
          )}
        </NavItem>
        <NavCenterItem>
          <SVGWrite />
        </NavCenterItem>
        <NavItem onClick={() => navigate('/profile')}>
          {location.pathname.startsWith('/profile') ? (
            <SVGActiveProfile />
          ) : (
            <SVGProfile />
          )}
        </NavItem>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  position: fixed;
  height: 75px;
  bottom: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 375px;
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

const NavItem = styled.div`
  flex: 1 1 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const NavCenterItem = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.c1};
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
`;
