import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import { convertCSS } from '../../utils/convertCSS';
import Flex from '../Flex/Flex';

interface Props extends HTMLAttributes<HTMLInputElement> {
  value: string;
  checked: boolean;
  margin?: string;
  gap?: string | number;
}

interface RadioLabelProps {
  margin?: string;
  gap?: string | number;
}

const Radio = ({ value, checked, margin, gap, ...attributes }: Props) => {
  return (
    <>
      <RadioInput
        type="radio"
        id={value}
        value={value}
        checked={checked}
        {...attributes}
      />
      <Flex alignItems="center">
        {checked ? (
          <CheckedLabel margin={margin} htmlFor={value} gap={gap}>
            {value}
          </CheckedLabel>
        ) : (
          <UnCheckedLabel margin={margin} htmlFor={value} gap={gap}>
            {value}
          </UnCheckedLabel>
        )}
      </Flex>
    </>
  );
};

export default Radio;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label<RadioLabelProps>`
  margin: ${({ margin }) => margin};
  position: relative;
  padding-left: ${({ gap }) => (gap && convertCSS(gap)) || '28px'};
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

const CheckedLabel = styled(RadioLabel)`
  color: ${({ theme }) => theme.color.b4};
  &::before {
    background-color: transparent;
    border: 1.5px solid ${({ theme }) => theme.color.c1};
    box-sizing: border-box;
  }

  &::after {
    width: 12px;
    height: 12px;
    top: 5px;
    left: 5px;
    background-color: ${({ theme }) => theme.color.c1};
  }
`;

const UnCheckedLabel = styled(RadioLabel)`
  color: ${({ theme }) => theme.color.b4};
  &::before {
    background-color: ${({ theme }) => theme.color.l2};
  }

  &::after {
    background-color: ${({ theme }) => theme.color.w1};
  }
`;
