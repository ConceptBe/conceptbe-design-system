import { Meta, StoryObj } from '@storybook/react';

import Skeleton from '../components/Skeleton/Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Skeleton 컴포넌트의 width를 지정합니다.',
    },
    height: {
      control: 'text',
      description: 'Skeleton 컴포넌트의 height를 지정합니다.',
    },
    variant: {
      control: 'inline-radio',
      description:
        'Skeleton 컴포넌트의 모양을 설정합니다. 기본값은 square 입니다.',
    },
  },
} as Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: '300px',
    height: '300px',
    variant: 'square',
  },
  render: (args) => (
    <div style={{ width: 'max-content', height: 'max-content' }}>
      <Skeleton {...args} />
    </div>
  ),
};
