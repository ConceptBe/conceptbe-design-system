import { Meta, StoryObj } from '@storybook/react';

import Badge from '../components/Badge/Badge';
import { useEffect, useRef, useState } from 'react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: false,
      description: 'Badge 컴포넌트의 DOM tag를 설정합니다.',
    },
    fontColor: {
      control: 'inline-radio',
      options: ['w1', 'b4', 'b9'],
      description: 'Badge 컴포넌트의 폰트 색상을 설정합니다.',
    },
    backgroundColor: {
      control: 'inline-radio',
      options: ['c1', 'bg1'],
      description: 'Badge 컴포넌트의 배경 색상을 설정합니다.',
    },
    children: {
      control: 'text',
      description: 'Badge 컴포넌트의 Text를 설정합니다.',
    },
  },
} as Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    as: 'div',
    fontColor: 'b9',
    backgroundColor: 'bg1',
    children: 'Text, 텍스트',
  },
  render: (args) => (
    <div style={{ width: 'max-content', height: 'max-content' }}>
      <Badge {...args} />
    </div>
  ),
};

export const Sample: Story = {
  args: {
    as: 'div',
    fontColor: 'b9',
    backgroundColor: 'bg1',
    children: '개발',
  },
  render: ({ children, backgroundColor, fontColor }) => {
    const timerId = useRef<NodeJS.Timeout | null>(null);
    const [badges, setBadges] = useState<string[]>([
      '서비스기획',
      '영상디자인',
      '시각디자인',
      '마케팅',
      '데이터',
    ]);

    useEffect(() => {
      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = setTimeout(() => {
        setBadges((prev) => [...prev, children]);
      }, 500);
    }, [children]);

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {badges.map((name) => (
          <div style={{ width: 'max-content', height: 'max-content' }}>
            <Badge backgroundColor={backgroundColor} fontColor={fontColor}>
              {name}
            </Badge>
          </div>
        ))}
      </div>
    );
  },
};
