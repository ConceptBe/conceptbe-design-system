import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

import Flex from '../Flex/Flex';
import Text from '../Text/Text';

type GapType = 'small' | 'large';

interface RadioOptions {
  id: number;
  name: string;
  checked: boolean;
  [key: string]: any;
}
interface Props<T> {
  label: string;
  radioKey: T;
  options: RadioOptions[];
  onChange: (e: ChangeEvent<HTMLInputElement>, radioKey: T) => void;
  required?: boolean;
  gap?: GapType;
}

const RadioContainer = <T extends string>({
  label,
  radioKey,
  options,
  onChange,
  required,
  gap = 'small',
  ...attributes
}: Props<T>) => {
  return (
    <div {...attributes}>
      <Flex alignItems="center" paddingBottom={4}>
        <Text font="suit15m" color="b9" required={required}>
          {label}
        </Text>
      </Flex>
      <Flex wrap="wrap">
        {options.map((option) => (
          <Flex alignItems="center" key={option.id}>
            <RadioInput
              type="radio"
              id={`${option.id}-${option.name}`}
              name={radioKey}
              value={option.name}
              checked={option.checked}
              onChange={(e) => {
                onChange(e, radioKey);
              }}
            />
            {option.checked ? (
              <CheckedLabel htmlFor={`${option.id}-${option.name}`} gap={gap}>
                {option.name}
              </CheckedLabel>
            ) : (
              <UnCheckedLabel htmlFor={`${option.id}-${option.name}`} gap={gap}>
                {option.name}
              </UnCheckedLabel>
            )}
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default RadioContainer;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label<{ gap: GapType }>`
  position: relative;
  padding-left: 28px;
  margin-right: ${({ gap }) => (gap === 'large' ? '30px' : '18px')};
  margin-top: 8px;
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
