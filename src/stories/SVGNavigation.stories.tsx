import { Meta, StoryObj } from '@storybook/react';
import {
  SVGNavAlarm,
  SVGNavAlarmFilled,
  SVGNavEdit,
  SVGNavEditFilled,
  SVGNavHome,
  SVGNavHomeFilled,
  SVGNavUser,
  SVGNavUserFilled,
} from '..';

const meta = {
  title: 'Assets/SVG/Navigation',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <SVGNavAlarm />
      <SVGNavAlarmFilled />
      <SVGNavEdit />
      <SVGNavEditFilled />
      <SVGNavHome />
      <SVGNavHomeFilled />
      <SVGNavUser />
      <SVGNavUserFilled />
    </div>
  ),
};
