import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import { convertCSS } from '../../utils/convertCSS';

interface Props extends HTMLAttributes<HTMLInputElement> {
  value: string;
  checked: boolean;
  width?: string | number;
  height?: string | number;
  padding?: string;
}

interface CheckboxLabelProps {
  checked: boolean;
  width?: string | number;
  height?: string | number;
  padding?: string;
}

const Checkbox = ({
  value,
  checked,
  width,
  height,
  padding,
  ...attributes
}: Props) => {
  return (
    <>
      <CheckboxInput
        id={value}
        value={value}
        type="checkbox"
        checked={checked}
        {...attributes}
      />
      <CheckboxLabel
        htmlFor={value}
        checked={checked}
        width={width}
        height={height}
        padding={padding}
      >
        {value}
      </CheckboxLabel>
    </>
  );
};

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  width: ${({ width }) => width && convertCSS(width)};
  height: ${({ height }) => height && convertCSS(height)};
  padding: ${({ padding }) => padding || '11px 16px 12px'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.l2};
  border-radius: 6px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.color.c1 : theme.color.w1};
  color: ${({ checked, theme }) => (checked ? theme.color.w1 : theme.color.b4)};
  font-size: ${({ theme }) => theme.font.suit15m.fontSize}px;
  font-weight: ${({ theme }) => theme.font.suit15m.fontWeight};
  cursor: pointer;
`;

export default Checkbox;
