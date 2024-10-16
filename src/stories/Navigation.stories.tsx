import { Meta, StoryObj } from '@storybook/react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';
import {
  SVGNavAlarm,
  SVGNavAlarmFilled,
  SVGNavEdit,
  SVGNavEditFilled,
  SVGNavHome,
  SVGNavHomeFilled,
  SVGNavUser,
  SVGNavUserFilled,
} from '../.';
import Navigation from '../components/Navigation/Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'Navigation.Item 컴포넌트를 사용하여 Navigation 컴포넌트 내부 요소들을 정의합니다.',
    },
  },
} as Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  render: () => {
    const [navPosition, setNavPosition] = useState<
      'home' | 'edit' | 'alarm' | 'user'
    >('alarm');

    return (
      <Navigation>
        <Navigation.Item onClick={() => setNavPosition('home')}>
          {navPosition === 'home' ? <SVGNavHomeFilled /> : <SVGNavHome />}
        </Navigation.Item>
        <Navigation.Item onClick={() => setNavPosition('edit')}>
          {navPosition === 'edit' ? <SVGNavEditFilled /> : <SVGNavEdit />}
        </Navigation.Item>
        <Navigation.Item onClick={() => setNavPosition('alarm')}>
          {navPosition === 'alarm' ? <SVGNavAlarmFilled /> : <SVGNavAlarm />}
        </Navigation.Item>
        <Navigation.Item onClick={() => setNavPosition('user')}>
          {navPosition === 'user' ? <SVGNavUserFilled /> : <SVGNavUser />}
        </Navigation.Item>
      </Navigation>
    );
  },
};

export const InteractionTest: Story = {
  render: () => {
    const [navPosition, setNavPosition] = useState<
      'home' | 'edit' | 'alarm' | 'user'
    >('alarm');

    return (
      <Navigation>
        <Navigation.Item
          data-testid="navigation-item"
          onClick={() => setNavPosition('home')}
        >
          {navPosition === 'home' ? <SVGNavHomeFilled /> : <SVGNavHome />}
        </Navigation.Item>
        <Navigation.Item
          data-testid="navigation-item"
          onClick={() => setNavPosition('edit')}
        >
          {navPosition === 'edit' ? <SVGNavEditFilled /> : <SVGNavEdit />}
        </Navigation.Item>
        <Navigation.Item
          data-testid="navigation-item"
          onClick={() => setNavPosition('alarm')}
        >
          {navPosition === 'alarm' ? <SVGNavAlarmFilled /> : <SVGNavAlarm />}
        </Navigation.Item>
        <Navigation.Item
          data-testid="navigation-item"
          onClick={() => setNavPosition('user')}
        >
          {navPosition === 'user' ? <SVGNavUserFilled /> : <SVGNavUser />}
        </Navigation.Item>
      </Navigation>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const navigationItems = await canvas.findAllByTestId('navigation-item');
    const [home, edit, alarm, user] = [
      navigationItems[0],
      navigationItems[1],
      navigationItems[2],
      navigationItems[3],
    ];
    const SVGDisActivatedFeed = home.children[0];
    const SVGDisActivatedMy = edit.children[0];
    const SVGDisActivatedAlarm = alarm.children[0];
    const SVGDisActivatedUser = user.children[0];

    await userEvent.click(home, {
      delay: 300,
    });
    expect(SVGDisActivatedFeed).not.toBeInTheDocument();

    await userEvent.click(edit, {
      delay: 300,
    });
    expect(SVGDisActivatedMy).not.toBeInTheDocument();

    await userEvent.click(alarm, {
      delay: 300,
    });
    expect(SVGDisActivatedAlarm).not.toBeInTheDocument();

    await userEvent.click(user, {
      delay: 300,
    });
    expect(SVGDisActivatedUser).not.toBeInTheDocument();
  },
};
