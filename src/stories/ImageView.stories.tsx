import { Meta, StoryObj } from '@storybook/react';

import ImageView from '../components/ImageView/ImageView';

const meta = {
  title: 'Components/ImageView',
  component: ImageView,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'ImageView 컴포넌트의 src를 지정합니다.',
    },
    alt: {
      control: 'text',
      description: 'ImageView 컴포넌트의 alt를 지정합니다.',
    },
    width: {
      control: 'number',
      description:
        'ImageView 컴포넌트의 가로 크기를 설정합니다. 기본값은 100% 입니다.',
    },
    height: {
      control: 'number',
      description:
        'ImageView 컴포넌트의 세로 크기를 설정합니다. 기본값은 100% 입니다.',
    },
    maxWidth: {
      control: 'number',
      description: 'ImageView 컴포넌트의 가로 최대 크기를 설정합니다.',
    },
    maxHeight: {
      control: 'number',
      description: 'ImageView 컴포넌트의 세로 최대 크기를 설정합니다.',
    },
    objectFit: {
      control: 'inline-radio',
      options: ['fill', 'contain', 'cover'],
      description:
        'ImageView 컴포넌트의 이미지 표현 방식을 설정합니다. 기본값은 cover 입니다.',
    },
    borderRadius: {
      control: 'number',
      description: 'ImageView 컴포넌트의 Border Radius를 설정합니다.',
    },
    defaultSrc: {
      control: 'text',
      description:
        'ImageView 컴포넌트의 src 표시 중 이미지 부재 등의 오류로 에러 발생 시 대체할 기본 이미지 주소를 지정합니다.',
    },
  },
} as Meta<typeof ImageView>;

export default meta;
type Story = StoryObj<typeof ImageView>;

export const Default: Story = {
  args: {
    src: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria-146x200.jpg',
    alt: '이미지 입니다.',
    width: '100%',
    height: '100%',
    maxWidth: undefined,
    maxHeight: undefined,
    objectFit: 'cover',
    borderRadius: undefined,
    defaultSrc:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Error-logo.png',
  },
  render: (args) => (
    <div style={{ width: 'max-content', height: 'max-content' }}>
      <ImageView {...args} />
    </div>
  ),
};
