import styled from '@emotion/styled';
import { ChangeEvent, Fragment } from 'react';

import Flex from '../Flex/Flex';
import Text from '../Text/Text';

interface CheckboxOptions {
  id: number;
  name: string;
  checked: boolean;
}

interface Config<T> {
  checkboxKey: T;
  maxCount?: number;
}

interface Props<T> {
  label: string;
  checkboxKey: T;
  options: CheckboxOptions[];
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    checkboxKey: T,
    config?: Config<T>,
  ) => void;
  maxCount?: number;
  required?: boolean;
}

const CheckboxContainer = <T extends string>({
  label,
  checkboxKey,
  options,
  onChange,
  maxCount,
  required,
  ...attributes
}: Props<T>) => {
  return (
    <div {...attributes}>
      <Flex alignItems="center" paddingBottom={12}>
        <Text font="suit15m" color="b9" required={required}>
          {label}
        </Text>
      </Flex>
      <Flex wrap="wrap" gap={8}>
        {options.map((option) => (
          <Fragment key={option.id}>
            <CheckboxInput
              id={`${option.id}-${option.name}`}
              name={checkboxKey}
              value={option.name}
              type="checkbox"
              checked={option.checked}
              onChange={(e) =>
                onChange(e, checkboxKey, {
                  checkboxKey,
                  maxCount,
                })
              }
            />
            <CheckboxLabel
              htmlFor={`${option.id}-${option.name}`}
              checked={option.checked}
            >
              {option.name}
            </CheckboxLabel>
          </Fragment>
        ))}
      </Flex>
    </div>
  );
};

export default CheckboxContainer;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px 12px;
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
