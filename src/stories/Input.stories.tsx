import { Meta, StoryObj } from '@storybook/react';

import Input from '../components/Input/Input';
import { ChangeEvent, useEffect, useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Input 컴포넌트의 넓이를 지정합니다.',
    },
    height: {
      control: 'text',
      description: 'Input 컴포넌트의 높이를 지정합니다.',
    },
    padding: {
      control: 'text',
      description: 'Input 컴포넌트 padding을 설정합니다.',
    },
    value: {
      control: 'text',
      description: 'Input 컴포넌트의 텍스트를 나타내는 값입니다.',
    },
    onChange: {
      control: false,
      description:
        'Input 컴포넌트의 value를 변경할 수 있는 onChange 함수입니다.',
    },
  },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    width: '100%',
    height: '44px',
    padding: '11px 16px',
    value: 'input',
  },
  render: ({ value, width, height, padding }) => {
    const userInput = value as string;
    const [input, setInput] = useState<string>(userInput);

    useEffect(() => {
      setInput(userInput);
    }, [userInput]);

    return (
      <>
        <Input
          value={input}
          width={width}
          height={height}
          padding={padding}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </>
    );
  },
};
