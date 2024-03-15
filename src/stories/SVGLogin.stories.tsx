import { Meta, StoryObj } from '@storybook/react';

import {
  SVGLoginNaver,
  SVGLoginKakao,
  SVGLoginLogo,
  SVGLoginImageWrite,
} from '../.';

const meta = {
  title: 'Assets/SVG/Login',
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
          padding: '6px',
          borderRadius: '8px',
          backgroundColor: '#03C75A',
        }}
      >
        <SVGLoginNaver />
      </div>
      <div
        style={{
          width: 'min-content',
          height: 'min-content',
          padding: '6px',
          borderRadius: '8px',
          backgroundColor: '#FAE100',
        }}
      >
        <SVGLoginKakao />
      </div>
      <SVGLoginImageWrite />
      <SVGLoginLogo />
    </div>
  ),
};
