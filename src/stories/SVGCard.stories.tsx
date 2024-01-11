import { Meta, StoryObj } from '@storybook/react';

import {
  SVGCardComment14,
  SVGCardLike14,
  SVGCardScrap14,
  SVGCardView14,
} from '../.';

const meta = {
  title: 'Assets/SVG/Card',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <SVGCardComment14 />
      <SVGCardLike14 />
      <SVGCardScrap14 />
      <SVGCardView14 />
    </div>
  ),
};
