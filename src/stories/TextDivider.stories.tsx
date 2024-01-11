import { Meta, StoryObj } from '@storybook/react';

import TextDivider from '../components/TextDivider/TextDivider';

const meta = {
  title: 'Components/TextDivider',
  component: TextDivider,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description:
        'TextDivider 컴포넌트의 가로 크기를 설정합니다. 기본 값은 1px 입니다.',
    },
    height: {
      control: 'number',
      description:
        'TextDivider 컴포넌트의 세로 크기를 설정합니다. 기본 값은 10px 입니다.',
    },
    left: {
      control: 'number',
      description: 'TextDivider 컴포넌트의 좌측 여백을 설정합니다.',
    },
    right: {
      control: 'number',
      description: 'TextDivider 컴포넌트의 우측 여백을 설정합니다.',
    },
    color: {
      control: 'select',
      description:
        'TextDivider 컴포넌트의 색상을 설정합니다. 기본 값은 b 입니다.',
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
} as Meta<typeof TextDivider>;

export default meta;
type Story = StoryObj<typeof TextDivider>;

export const Default: Story = {
  args: {
    width: 1,
    height: 10,
    left: 0,
    right: 0,
    color: 'b',
    as: 'div',
  },
};

export const Sample: Story = {
  args: {
    width: 1,
    height: 12,
    left: 5,
    right: 5,
    color: 'l2',
    as: 'div',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 0.40)' }}>
        외국계 스타트업
      </span>
      <TextDivider {...args} />
      <span style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 0.40)' }}>
        강원특별자치도
      </span>
    </div>
  ),
};
