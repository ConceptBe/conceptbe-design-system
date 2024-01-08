import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface BottomSheetProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet = ({ children, isOpen, onClose }: BottomSheetProps) => {
  return (
    <Wrapper isOpen={isOpen}>
      {isOpen && <Overlay onClick={onClose} />}
      <BottomSheetWrapper isOpen={isOpen}>
        <Content>{children}</Content>
      </BottomSheetWrapper>
    </Wrapper>
  );
};
export default BottomSheet;

const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

const BottomSheetWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.isOpen ? '0' : '-1000px')};
  left: 0;
  right: 0;
  background-color: #fff;
  height: 80%;
  transition: bottom 0.3s ease-in-out;
  overflow: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border-radius: 14px 14px 0 0;
  max-width: 375px;
  width: auto;
  margin: 0 auto;
`;

const Overlay = styled.div`
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgba(0, 0, 0, 0.54);
  position: fixed;
  display: flex;
  opacity: 1;
  inset: 0;
  z-index: 9998;
`;

const Content = styled.div`
  height: 100%;
`;