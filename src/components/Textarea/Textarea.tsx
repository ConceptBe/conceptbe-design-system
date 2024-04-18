import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import { convertCSS } from '../../utils/convertCSS';

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  width?: string | number;
  height?: string | number;
  padding?: string;
}

const TextArea = styled.textarea<Props>`
  box-sizing: border-box;
  width: ${({ width }) => (width && convertCSS(width)) || '100%'};
  height: ${({ height }) => (height && convertCSS(height)) || '100px'};
  border-radius: 6px;
  padding: ${({ padding }) => padding || '11px 16px'};
  font-size: ${({ theme }) => theme.font.suit14r.fontSize}px;
  font-weight: ${({ theme }) => theme.font.suit14r.fontWeight};
  border: 1px solid ${({ theme }) => theme.color.l2};
  outline: none;
  color: ${({ theme }) => theme.color.b4};
  background: ${({ theme }) => theme.color.w1};

  &:focus {
    border-color: ${({ theme }) => theme.color.c1};
  }
`;

export default TextArea;
