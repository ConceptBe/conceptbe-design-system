import { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button/Button';
import { useState } from 'react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: false,
      description: 'Button 컴포넌트의 DOM tag를 설정합니다.',
    },
    isGrayOut: {
      control: 'boolean',
      description:
        'Button 컴포넌트의 그레이 아웃 여부를 설정합니다. 기본 값은 false 입니다.',
    },
    onClick: {
      control: false,
      description: 'Button 컴포넌트 클릭 시 설정된 동작을 수행합니다.',
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    as: 'div',
    isGrayOut: false,
    onClick: () => {},
  },
  render: (args) => (
    <div style={{ width: 'max-content', height: 'max-content' }}>
      <Button {...args}>버튼</Button>
    </div>
  ),
};

export const InteractionTest: Story = {
  args: {
    as: 'div',
    isGrayOut: false,
  },
  render: ({ as, isGrayOut }) => {
    const [count, setCount] = useState<number>(0);

    return (
      <>
        <div
          data-testid="count"
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '375px',
            height: '50px',
            fontSize: '20px',
          }}
        >
          {count}
        </div>
        <div
          style={{
            display: 'flex',
            width: '375px',
            height: 'max-content',
            gap: '12px',
          }}
        >
          <Button
            data-testid="concept-be-button"
            as={as}
            isGrayOut
            onClick={() => setCount((prev) => prev - 1)}
            style={{ flex: 1 }}
          >
            감소
          </Button>
          <Button
            data-testid="concept-be-button"
            as={as}
            isGrayOut={isGrayOut}
            onClick={() => setCount((prev) => prev + 1)}
            style={{ flex: 2 }}
          >
            증가
          </Button>
        </div>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttons = await canvas.findAllByTestId('concept-be-button');
    const count = await canvas.findByTestId('count');
    const [decrease, increase] = [buttons[0], buttons[1]];

    await userEvent.click(increase, {
      delay: 200,
    });
    expect(count.innerHTML).toBe('1');
    await userEvent.click(increase, {
      delay: 200,
    });
    expect(count.innerHTML).toBe('2');

    await userEvent.click(decrease, {
      delay: 200,
    });
    expect(count.innerHTML).toBe('1');
    await userEvent.click(decrease, {
      delay: 200,
    });
    expect(count.innerHTML).toBe('0');
  },
};
