import { Meta, StoryObj } from '@storybook/react';

import {
  SVGAdd24,
  SVGCancel,
  SVGCheckFilled24,
  SVGFeed24,
  SVGFeedFilled24,
  SVGProfile24,
  SVGProfileFilled24,
  SVGScrap24,
  SVGScrapFilled24,
  SVGTextRequired,
  SVGTripleDots,
  SVGDropdownArrow,
} from '..';

const meta = {
  title: 'Assets/SVG/Common',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <SVGAdd24 />
      <SVGDropdownArrow />
      <SVGCancel />
      <SVGCheckFilled24 />
      <SVGFeed24 />
      <SVGFeedFilled24 />
      <SVGProfile24 />
      <SVGProfileFilled24 />
      <SVGScrap24 />
      <SVGScrapFilled24 />
      <SVGTextRequired />
      <SVGTripleDots />
    </div>
  ),
};
