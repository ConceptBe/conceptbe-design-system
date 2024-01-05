import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

import SVGBack from '../../assets/back_24_W.svg';

interface Props {
  customStyle?: CSSProperties;
}

const Back = ({ customStyle }: Props) => {
  const navigate = useNavigate();

  return (
    <SVGBack
      onClick={() => navigate(-1)}
      cursor="pointer"
      style={customStyle}
    />
  );
};

export default Back;
