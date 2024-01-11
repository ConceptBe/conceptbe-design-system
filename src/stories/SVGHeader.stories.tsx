import { Meta, StoryObj } from '@storybook/react';

import {
  SVGHeaderBack24B,
  SVGHeaderBack24W,
  SVGHeaderCheck24,
  SVGHeaderUncheck24,
  SVGHeaderFilter,
  SVGHeaderMainLogo,
  SVGHeaderSetting,
  SVGHeaderClose24,
} from '../.';

const meta = {
  title: 'Assets/SVG/Header',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', backgroundColor: '#5F27FF' }}>
      <div
        style={{
          width: 'min-content',
          height: 'min-content',
          backgroundColor: '#fff',
        }}
      >
        <SVGHeaderBack24B />
      </div>
      <SVGHeaderBack24W />
      <div
        style={{
          width: 'min-content',
          height: 'min-content',
          backgroundColor: '#fff',
        }}
      >
        <SVGHeaderCheck24 />
      </div>
      <div
        style={{
          width: 'min-content',
          height: 'min-content',
          backgroundColor: '#fff',
        }}
      >
        <SVGHeaderUncheck24 />
      </div>
      <SVGHeaderFilter />
      <SVGHeaderMainLogo />
      <SVGHeaderSetting />
      <div
        style={{
          width: 'min-content',
          height: 'min-content',
          backgroundColor: '#fff',
        }}
      >
        <SVGHeaderClose24 />
      </div>
    </div>
  ),
};
