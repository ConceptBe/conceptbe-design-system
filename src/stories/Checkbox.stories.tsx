import { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../components/Checkbox/Checkbox';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Checkbox 컴포넌트의 내용(value)을 지정합니다.',
    },
    checked: {
      control: 'boolean',
      description: 'Checkbox 컴포넌트의 체크 여부를 지정합니다.',
    },
    width: {
      control: 'text',
      description: 'Checkbox 컴포넌트 넓이를 설정합니다.',
    },
    height: {
      control: 'text',
      description: 'Checkbox 컴포넌트 높이를 설정합니다.',
    },
    padding: {
      control: 'text',
      description: 'Checkbox 컴포넌트 padding을 설정합니다.',
    },
    onChange: {
      control: false,
      description:
        'Checkbox 컴포넌트의 선택 요소를 확인할 수 있는 onChange 함수입니다.',
    },
  },
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    value: '체크박스',
    checked: true,
    width: 'max-content',
    height: '40px',
    padding: undefined,
  },
  render: ({ value, checked, width, height, padding }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    return (
      <>
        <Checkbox
          value={value}
          checked={isChecked}
          width={width}
          height={height}
          padding={padding}
          onChange={() => setIsChecked(!isChecked)}
        />
      </>
    );
  },
};
