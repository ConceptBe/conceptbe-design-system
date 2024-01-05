import { useNavigate } from 'react-router-dom';

import SVGLogo from '../../assets/main_logo.svg';

const Logo = () => {
  const navigate = useNavigate();

  return <SVGLogo onClick={() => navigate('/')} cursor="pointer" />;
};

export default Logo;
