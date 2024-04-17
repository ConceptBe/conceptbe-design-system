import styled from '@emotion/styled';

import Flex from '../Flex/Flex';
import Text from '../Text/Text';

interface ModalProps {
  content: string;
  closeButtonContent?: string;
  confirmButtonContent?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

const Confirm = ({
  content,
  closeButtonContent = '취소',
  confirmButtonContent = '확인',
  isOpen,
  onClose,
  onConfirm,
}: ModalProps) => {
  const onClickConfirm = () => {
    if (onConfirm) onConfirm();

    onClose();
  };

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Overlay onClick={onClose} />
          <ModalWrapper>
            <Flex height="100%" justifyContent="center" alignItems="center">
              <ContentWrapper>{content}</ContentWrapper>
            </Flex>
            <ButtonSectionWrapper onClick={onClose}>
              {closeButtonContent !== '' && (
                <ButtonWrapper location="left" onClick={onClose}>
                  <Text color="b9" font="suit15m">
                    {closeButtonContent}
                  </Text>
                </ButtonWrapper>
              )}
              {confirmButtonContent !== '' && (
                <ButtonWrapper location="right" onClick={onClickConfirm}>
                  <Text color="c1" font="suit15m">
                    {confirmButtonContent}
                  </Text>
                </ButtonWrapper>
              )}
            </ButtonSectionWrapper>
          </ModalWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default Confirm;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  inset: 0;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 167px;
  border-radius: 14px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  background-color: #fff;
  color: inherit;
  z-index: 11;
  white-space: pre-wrap;
  word-break: keep-all;
`;

const ContentWrapper = styled.div`
  width: 149px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.suit14r.fontSize}px;
  font-weight: ${({ theme }) => theme.font.suit14r.fontWeight};
  line-height: 160%;
`;

const ButtonSectionWrapper = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.color.l3}`};
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonWrapper = styled.div<{ location: 'left' | 'right' }>`
  border-right: ${({ theme, location }) =>
    location === 'left' && `1px solid ${theme.color.l3}`};
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.54);
  inset: 0;
`;
