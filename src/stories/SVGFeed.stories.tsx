import { Meta, StoryObj } from '@storybook/react';

import {
  SVGFeedWrite40,
  SVGFeedLike,
  SVGFeedUnLike,
  SVGFeedReCommentLine,
  SVGFeedMessage,
  SVGFeedPencil,
  SVGFeedScrap,
  SVGFeedUnScrap,
} from '../.';

const meta = {
  title: 'Assets/SVG/Feed',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div
        style={{
          width: 'min-content',
          height: 'min-content',
          backgroundColor: '#5F27FF',
        }}
      >
        <SVGFeedWrite40 />
      </div>
      <SVGFeedLike />
      <SVGFeedUnLike />
      <SVGFeedMessage />
      <SVGFeedPencil />
      <SVGFeedReCommentLine />
      <SVGFeedScrap />
      <SVGFeedUnLike />
      <SVGFeedUnScrap />
    </div>
  ),
};
