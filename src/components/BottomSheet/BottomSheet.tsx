import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface BottomSheetProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet = ({
  children,
  isOpen,
  onClose,
  ...attributes
}: BottomSheetProps) => {
  return (
    <Wrapper isOpen={isOpen} {...attributes}>
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
  bottom: ${(props) => (props.isOpen ? '0' : '-100vh')};
  left: 0;
  right: 0;
  margin: 0 auto;
  width: auto;
  max-width: 420px;
  max-height: 90%;
  min-height: 70%;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 14px 14px 0 0;
  overflow: auto;
  z-index: ${({ theme }) => theme.zIndex.modal};
  transition: bottom 0.3s ease-in-out;
`;

const Overlay = styled.div`
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgba(0, 0, 0, 0.54);
  position: fixed;
  display: flex;
  opacity: 1;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modalBackdrop};
`;

const Content = styled.div`
  height: 100%;
`;
