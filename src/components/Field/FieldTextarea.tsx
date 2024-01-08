import styled from '@emotion/styled';
import { useContext } from 'react';

import { FieldContext } from './Field';
import { Config, Validate } from '../../types/useField';

export interface Props {
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    config: Config,
  ) => void;
  onValidate?: () => Validate[];
  isSuccess?: boolean;
  successMessage?: string;
  errorMessage?: string;
  autoFocus?: boolean;
  maxLength?: number;
  placeholder?: string;
}

const FieldTextarea = ({
  name,
  onChange,
  onValidate,
  isSuccess = true,
  successMessage = '',
  errorMessage = '',
  autoFocus = false,
  placeholder = '',
}: Props) => {
  const { isRequired, inputValue: value, maxLength } = useContext(FieldContext);

  return (
    <>
      <TextArea
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e, {
            isRequired,
            maxLength,
            onValidate,
          });
        }}
        placeholder={placeholder}
        autoFocus={autoFocus}
        maxLength={maxLength}
        errorMessage={errorMessage}
      />
      {!errorMessage && isSuccess && value && (
        <MessageWrapper isNonError={!errorMessage && isSuccess}>
          {successMessage}
        </MessageWrapper>
      )}

      {(errorMessage || !isSuccess) && (
        <MessageWrapper isNonError={!errorMessage && isSuccess}>
          {errorMessage}
        </MessageWrapper>
      )}
    </>
  );
};

export default FieldTextarea;

const TextArea = styled.textarea<{ errorMessage: string }>`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  padding: 11px 16px;
  font-size: ${({ theme }) => theme.font.suit14r.fontSize}px;
  font-weight: ${({ theme }) => theme.font.suit14r.fontWeight};
  border: 1px solid
    ${({ errorMessage, theme }) =>
      errorMessage ? theme.color.c3 : theme.color.l2};
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
