import { Meta, StoryObj } from '@storybook/react';

import Spacer from './Spacer';

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'Spacer 가로 세로 크기를 설정합니다.',
    },
  },
} as Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    size: 20,
  },
  render: (args) => (
    <div
      style={{
        width: 'min-content',
        height: 'min-content',
        backgroundColor: '#e6e6e6',
      }}
    >
      <Spacer {...args} />
    </div>
  ),
};

export const Example: Story = {
  args: {
    size: 35,
  },
  render: (args) => (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}
      >
        <label>닉네임</label>
        <input style={{ height: '20px' }} />
      </div>

      <Spacer {...args} />

      <div
        style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}
      >
        <label>직장명</label>
        <input style={{ height: '20px' }} />
      </div>

      <Spacer {...args} />

      <div
        style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}
      >
        <label>자기소개</label>
        <textarea style={{ height: '100px' }} />
      </div>
    </>
  ),
};
