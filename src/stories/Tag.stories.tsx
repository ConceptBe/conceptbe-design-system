import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';

import Tag from '../components/Tag/Tag';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Tag 컴포넌트 내부의 텍스트를 설정합니다.',
    },
    onDelete: {
      description: 'X 표시를 클릭 시 해당 Tag를 삭제합니다.',
    },
  },
} as Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag Text',
    onDelete: () => {},
  },
  render: (args) => (
    <div
      style={{
        width: 'max-content',
        height: 'max-content',
      }}
    >
      <Tag {...args} />
    </div>
  ),
};

export const InteractionTest: Story = {
  args: {
    children: '콘텐츠 마케팅, 하',
    onDelete: () => {},
  },
  render: ({ children }) => {
    const timerId = useRef<NodeJS.Timeout | null>(null);
    const [tags, setTags] = useState<string[]>([
      '영상 촬영, 중',
      '퍼포먼스 마케팅, 상',
      '광고/크리에이티브, 중',
    ]);

    const onDelete = (value: string) => {
      setTags((prev) => prev.filter((name) => name !== value));
    };

    useEffect(() => {
      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = setTimeout(() => {
        setTags((prev) => [...prev, children]);
      }, 500);
    }, [children]);

    return (
      <div>
        {tags.map((name) => (
          <div
            key={name}
            style={{
              width: 'max-content',
              height: 'max-content',
              marginBottom: '12px',
            }}
          >
            <Tag data-testid="tag" onDelete={onDelete}>
              {name}
            </Tag>
          </div>
        ))}
        <div
          style={{
            width: 'max-content',
            height: 'max-content',
          }}
        ></div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tags = await canvas.findAllByTestId('tag');
    expect(tags.length).toBe(3);

    const firstTag = tags[0];
    const firstTagCancel = firstTag.children[2];

    await userEvent.click(firstTagCancel, {
      delay: 500,
    });
    expect(firstTag).not.toBeInTheDocument();
  },
};
