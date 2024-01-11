import { Meta, StoryObj } from '@storybook/react';

import {
  SVGNavWrite24,
  SVGNavActiveFeed,
  SVGNavFeed,
  SVGNavActiveProfile,
  SVGNavProfile,
} from '../.';

const meta = {
  title: 'Assets/SVG/Navigation',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div
        style={{
          padding: 16,
          width: 'min-content',
          height: 'min-content',
          backgroundColor: '#5F27FF',
          borderRadius: '50%',
        }}
      >
        <SVGNavWrite24 />
      </div>
      <SVGNavActiveFeed />
      <SVGNavFeed />
      <SVGNavActiveProfile />
      <SVGNavProfile />
    </div>
  ),
};
