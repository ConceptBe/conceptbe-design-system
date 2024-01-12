import styled from '@emotion/styled';
import { useContext } from 'react';

import { FieldContext } from './Field';

export interface Props {
  name: string;
  successMessage?: string;
  errorValue?: string;
  autoFocus?: boolean;
  placeholder?: string;
}

const FieldInput = ({
  name,
  successMessage = '',
  errorValue = '',
  autoFocus = false,
  placeholder = '',
  ...attributes
}: Props) => {
  const {
    required,
    inputValue: value,
    maxLength,
    onChange,
    onValidate,
  } = useContext(FieldContext);

  return (
    <>
      <Input
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e, {
            required,
            maxLength,
            name,
            onValidate,
          });
        }}
        placeholder={placeholder}
        autoFocus={autoFocus}
        maxLength={maxLength}
        errorValue={errorValue}
        {...attributes}
      />

      {!errorValue && successMessage && value && (
        <MessageWrapper isNonError={!errorValue}>
          {successMessage}
        </MessageWrapper>
      )}

      {errorValue && (
        <MessageWrapper isNonError={!errorValue}>{errorValue}</MessageWrapper>
      )}
    </>
  );
};

export default FieldInput;

const Input = styled.input<{ errorValue: string }>`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  padding: 11px 16px;
  font-size: ${({ theme }) => theme.font.suit14r.fontSize}px;
  font-weight: ${({ theme }) => theme.font.suit14r.fontWeight};
  border: 1px solid
    ${({ errorValue, theme }) => (errorValue ? theme.color.c3 : theme.color.l2)};
  outline: none;
  color: ${({ theme }) => theme.color.b4};
  background: ${({ theme }) => theme.color.w1};

  &:focus {
    border-color: ${({ theme }) => theme.color.c1};
  }
`;

const MessageWrapper = styled.p<{ isNonError: boolean }>`
  margin-top: 12px;
  font-size: 12px;
  font-weight: 400;
  width: 100%;
  height: 15px;
  color: ${({ theme, isNonError }) =>
    isNonError ? theme.color.c2 : theme.color.c3};
`;
