import { Meta, StoryObj } from '@storybook/react';

import Spinner from '../components/Spinner/Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    backdrop: {
      control: 'boolean',
      description: 'Spinner 컴포넌트의 backdrop 유무를 지정합니다.',
    },
  },
} as Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    backdrop: false,
  },
  render: (args) => (
    <div style={{ width: '500px', height: '500px' }}>
      <Spinner {...args} />
    </div>
  ),
};
