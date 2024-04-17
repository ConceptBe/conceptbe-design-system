import styled from '@emotion/styled';
import { useState, useCallback, ReactNode, createContext } from 'react';

import DropdownItem from './DropdownItem.tsx';
import { ReactComponent as SVGArrow } from '../../assets/svg/arrow.svg';
import useHandleClickOutside from '../../hooks/useHandleClickOutside.ts';

interface Props {
  disabled?: boolean;
  selectedValue: string;
  initialValue: string;
  children: ReactNode;
}

interface DropdownContextProps {
  isActive: boolean;
  onClickDisActive: () => void;
}

export const DropdownContext = createContext<DropdownContextProps>({
  isActive: false,
  onClickDisActive: () => {},
});

const Dropdown = ({
  children,
  selectedValue = '',
  initialValue,
  disabled,
  ...attributes
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const { ref } = useHandleClickOutside<HTMLDivElement>(
    useCallback(() => {
      setIsActive(false);
    }, []),
  );

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <DropdownContext.Provider
      value={{
        isActive,
        onClickDisActive: () => {
          setIsActive(false);
        },
      }}
    >
      <Wrapper
        ref={ref}
        onBlur={() => {
          setIsActive(false);
        }}
        {...attributes}
      >
        <Trigger
          disabled={disabled}
          onClick={!disabled ? toggleActive : () => {}}
        >
          {selectedValue || initialValue}
          <ArrowWrapper isActive={isActive}>
            <SVGArrow />
          </ArrowWrapper>
        </Trigger>
        {isActive && <PanelWrapper>{children}</PanelWrapper>}
      </Wrapper>
    </DropdownContext.Provider>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
`;

const ArrowWrapper = styled.div<{ isActive: boolean }>`
  width: min-content;
  height: 16px;
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0)')};
`;

const Trigger = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 14px 16px;
  font-size: ${({ theme }) => theme.font.suit14m.fontSize}px;
  font-weight: ${({ theme }) => theme.font.suit14m.fontWeight};
  box-sizing: border-box;
  gap: 10px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.disabled : theme.color.w1};
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.ba : theme.color.b4};
  border: 1px solid ${({ theme }) => theme.color.l2};
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

const PanelWrapper = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(calc(100% + 5px));
  width: 100%;

  background-color: ${({ theme }) => theme.color.w1};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  max-height: 125px;
  overflow: auto;
  z-index: 1;
`;
