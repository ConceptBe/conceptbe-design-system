import styled from '@emotion/styled';

import { ReactComponent as SVGLogo } from '../../assets/svg/main_logo.svg';

interface Props {
  onClick?: () => void;
}

const Logo = ({ onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <SVGLogo />
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  cursor: pointer;
`;
