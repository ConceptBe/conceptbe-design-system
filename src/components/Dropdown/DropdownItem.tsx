import styled from '@emotion/styled';
import { useContext } from 'react';

import { DropdownContext } from './Dropdown';

export interface PanelProps {
  value: string;
  children: string;
  onClick: (value: string) => void;
}

const DropdownItem = ({ children, value, onClick }: PanelProps) => {
  const { onClickDisActive } = useContext(DropdownContext);

  const onClickItem = () => {
    onClick(value);
    onClickDisActive();
  };

  return <Wrapper onClick={onClickItem}>{children}</Wrapper>;
};

export default DropdownItem;

const Wrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  padding: 11px 15px 12px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.color.l3};
  cursor: pointer;
  color: ${({ theme }) => theme.color.b6};
  font-size: 12px;
  font-weight: 400;

  &:last-child {
    border-bottom: none;
  }
`;
