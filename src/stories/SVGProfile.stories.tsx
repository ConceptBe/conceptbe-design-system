import { Meta, StoryObj } from '@storybook/react';

import {
  SVGProfileBookOpen,
  SVGProfileDefaultImage,
  SVGProfileMessageDots,
} from '../.';

const meta = {
  title: 'Assets/SVG/Profile',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <SVGProfileDefaultImage />
      <SVGProfileBookOpen />
      <SVGProfileMessageDots />
    </div>
  ),
};
