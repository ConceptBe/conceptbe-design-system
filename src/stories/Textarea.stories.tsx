import { Meta, StoryObj } from '@storybook/react';

import Textarea from '../components/Textarea/Textarea';
import { ChangeEvent, useEffect, useState } from 'react';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Textarea 컴포넌트의 넓이를 지정합니다.',
    },
    height: {
      control: 'text',
      description: 'Textarea 컴포넌트의 높이를 지정합니다.',
    },
    padding: {
      control: 'text',
      description: 'Textarea 컴포넌트 padding을 설정합니다.',
    },
    value: {
      control: 'text',
      description: 'Textarea 컴포넌트의 텍스트를 나타내는 값입니다.',
    },
    onChange: {
      control: false,
      description:
        'Textarea 컴포넌트의 value를 변경할 수 있는 onChange 함수입니다.',
    },
  },
} as Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    width: '100%',
    height: '100px',
    padding: '11px 16px',
    value: 'textarea',
  },
  render: ({ value, width, height, padding }) => {
    const userInput = value as string;
    const [textarea, setTextarea] = useState<string>(userInput);

    useEffect(() => {
      setTextarea(userInput);
    }, [userInput]);

    return (
      <>
        <Textarea
          value={textarea}
          width={width}
          height={height}
          padding={padding}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setTextarea(e.target.value)
          }
        />
      </>
    );
  },
};
