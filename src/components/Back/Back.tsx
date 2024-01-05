import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

import SVGBack from '../../assets/back_24_W.svg';

interface Props {
  customStyle?: CSSProperties;
}

const Back = ({ customStyle }: Props) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(-1)} style={customStyle}>
      <SVGBack />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
`;

export default Back;
