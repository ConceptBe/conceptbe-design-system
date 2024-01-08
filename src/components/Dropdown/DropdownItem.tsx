import styled from '@emotion/styled';
import { useContext } from 'react';

import { DropdownContext } from './Dropdown';

export interface PanelProps {
  optionId: number;
  value: string;
  children: string;
  onClick: (value: string) => void;
}

const DropdownItem = ({ optionId, children, value, onClick }: PanelProps) => {
  const { onClickDisActive } = useContext(DropdownContext);

  const onClickItem = (clickedValue: string) => {
    onClick(clickedValue);
    onClickDisActive();
  };

  return (
    <Wrapper
      optionId={optionId}
      value={value}
      onClick={() => {
        optionId === 0 ? null : onClickItem(value);
      }}
    >
      {children}
    </Wrapper>
  );
};

export default DropdownItem;

const Wrapper = styled.li<{ optionId: number }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  padding: 11px 15px 12px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.color.l3};
  cursor: ${({ optionId }) => (optionId === 0 ? 'auto' : 'pointer')};
  color: ${({ theme, optionId }) =>
    optionId === 0 ? theme.color.b9 : theme.color.b6};
  font-size: 12px;
  font-weight: 400;

  &:last-child {
    border-bottom: none;
  }
`;
