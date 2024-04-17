import { Meta, StoryObj } from '@storybook/react';

import Alert from '../components/Alert/Alert';
import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Flex from '../components/Flex/Flex';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Alert 컴포넌트의 내용을 지정합니다.',
    },
    buttonContent: {
      control: 'text',
      description: 'Alert 컴포넌트의 버튼 텍스트를 지정합니다.',
    },
    isOpen: {
      control: 'boolean',
      description: 'Alert 컴포넌트 표시 유무를 설정합니다.',
    },
    onClose: {
      control: false,
      description: 'Alert 컴포넌트를 닫을 때 사용하는 함수입니다.',
    },
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    content: 'Alert 컴포넌트의 내용입니다.',
    buttonContent: '확인',
    isOpen: false,
  },
  render: ({ content, buttonContent, isOpen }) => {
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(isOpen);

    useEffect(() => {
      setIsAlertOpen(isOpen);
    }, [isOpen]);

    return (
      <>
        <Flex width={'100%'} justifyContent="center">
          <Button width={200} onClick={() => setIsAlertOpen(true)}>
            Alert 열기
          </Button>
        </Flex>

        <div style={{ width: '100%', height: '500px' }}>
          <Alert
            content={content}
            buttonContent={buttonContent}
            isOpen={isAlertOpen}
            onClose={() => setIsAlertOpen(false)}
          />
        </div>
      </>
    );
  },
};
