import { Meta, StoryObj } from '@storybook/react';

import Radio from '../components/Radio/Radio';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Radio 컴포넌트의 내용(value)을 지정합니다.',
    },
    checked: {
      control: 'boolean',
      description: 'Radio 컴포넌트의 체크 여부를 지정합니다.',
    },
    margin: {
      control: 'text',
      description: 'Radio 컴포넌트 margin을 설정합니다.',
    },
    gap: {
      control: 'number',
      description:
        'Radio 컴포넌트의 버튼과 설명간 여백을 설정합니다. 기본값은 28px입니다.',
    },
    onChange: {
      control: false,
      description:
        'Radio 컴포넌트의 선택 요소를 확인할 수 있는 onChange 함수입니다.',
    },
  },
} as Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    value: '라디오',
    checked: true,
    margin: undefined,
    gap: 28,
  },
  render: ({ value, checked, margin, gap }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    return (
      <>
        <Radio
          value={value}
          checked={isChecked}
          margin={margin}
          gap={gap}
          onChange={() => setIsChecked(!isChecked)}
        />
      </>
    );
  },
};
