import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import SVGLogo from '../../assets/main_logo.svg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/')}>
      <SVGLogo />
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  cursor: pointer;
`;
