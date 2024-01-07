import styled from '@emotion/styled';
import { CSSProperties } from 'react';

import { ReactComponent as SVGBack } from '../../assets/svg/back_24_W.svg';

interface Props {
  customStyle?: CSSProperties;
  onClick?: () => void;
}

const Back = ({ customStyle, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick} style={customStyle}>
      <SVGBack />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
`;

export default Back;
