import { Meta, StoryObj } from '@storybook/react';

import Confirm from '../components/Confirm/Confirm';
import { useEffect, useState } from 'react';
import { Button, Flex } from '../../dist';

const meta = {
  title: 'Components/Confirm',
  component: Confirm,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Confirm 컴포넌트의 내용을 지정합니다.',
    },
    closeButtonContent: {
      control: 'text',
      description: 'Confirm 컴포넌트의 닫기 버튼 텍스트를 지정합니다.',
    },
    confirmButtonContent: {
      control: 'text',
      description: 'Confirm 컴포넌트의 확인 버튼 텍스트를 지정합니다.',
    },
    isOpen: {
      control: 'boolean',
      description: 'Confirm 컴포넌트 표시 유무를 설정합니다.',
    },
    onClose: {
      control: false,
      description: 'Confirm 컴포넌트를 닫을 때 사용하는 함수입니다.',
    },
    onConfirm: {
      control: false,
      description:
        'Confirm 컴포넌트 확인 버튼 클릭 시 추가로 수행해야하는 동작을 지정할 수 있는 함수입니다.',
    },
  },
} as Meta<typeof Confirm>;

export default meta;
type Story = StoryObj<typeof Confirm>;

export const Default: Story = {
  args: {
    content: 'Confirm 컴포넌트의 내용입니다.',
    closeButtonContent: '취소',
    confirmButtonContent: '확인',
    isOpen: false,
  },
  render: ({ content, closeButtonContent, confirmButtonContent, isOpen }) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(isOpen);

    useEffect(() => {
      setIsConfirmOpen(isOpen);
    }, [isOpen]);

    return (
      <>
        <Flex width={'100%'} justifyContent="center">
          <Button width={200} onClick={() => setIsConfirmOpen(true)}>
            Confirm 열기
          </Button>
        </Flex>

        <div style={{ width: '100%', height: '500px' }}>
          <Confirm
            content={content}
            closeButtonContent={closeButtonContent}
            confirmButtonContent={confirmButtonContent}
            isOpen={isConfirmOpen}
            onClose={() => setIsConfirmOpen(false)}
          />
        </div>
      </>
    );
  },
};
