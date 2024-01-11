import { Meta, StoryObj } from '@storybook/react';

import Divider from '../components/Divider/Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description:
        'Divider 컴포넌트의 가로 크기를 설정합니다. 기본 값은 100% 입니다.',
    },
    height: {
      control: 'number',
      description:
        'Divider 컴포넌트의 세로 크기를 설정합니다. 기본 값은 1px 입니다.',
    },
    top: {
      control: 'number',
      description: 'Divider 컴포넌트의 상단 여백을 설정합니다.',
    },
    bottom: {
      control: 'number',
      description: 'Divider 컴포넌트의 하단 여백을 설정합니다.',
    },
    color: {
      control: 'select',
      description: 'Divider 컴포넌트의 색상을 설정합니다. 기본 값은 b 입니다.',
    },
    as: {
      control: false,
      description: 'Text 컴포넌트의 DOM tag를 설정합니다.',
    },
    theme: {
      control: false,
      description: 'Emotion theme 값입니다.',
    },
  },
} as Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    width: '100%',
    height: 1,
    color: 'b',
    as: 'div',
  },
};

export const Sample: Story = {
  args: {
    width: '100%',
    height: 1,
    color: 'l3',
    as: 'div',
    top: 22,
    bottom: 22,
  },
  render: (args) => (
    <div style={{ width: '315px', display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 0.73)' }}>
        로그인/회원가입
      </span>
      <Divider {...args} />
      <span style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 0.73)' }}>
        이용약관
      </span>
      <Divider {...args} />
      <span style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 0.73)' }}>
        개인정보처리방침
      </span>
    </div>
  ),
};
