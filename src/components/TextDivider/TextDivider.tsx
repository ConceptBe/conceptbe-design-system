import styled from '@emotion/styled';

import { ColorType } from '../../styles/theme';
import { convertCSS } from '../../utils/convertCSS';

type ColorKeyType = keyof Pick<ColorType, 'l2' | 'bg1' | 'b'>;

interface Props {
  width?: number | string;
  height?: number | string;
  left?: number | string;
  right?: number | string;
  color?: ColorKeyType;
}

const TextDivider = styled.div<Props>`
  width: ${({ width }) => (width ? convertCSS(width) : '1px')};
  height: ${({ height }) => (height ? convertCSS(height) : '10px')};
  margin-left: ${({ left }) => left && convertCSS(left)};
  margin-right: ${({ right }) => right && convertCSS(right)};
  background-color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.b};
`;

export default TextDivider;
