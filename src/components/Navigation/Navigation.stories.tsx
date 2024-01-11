import { Meta, StoryObj } from '@storybook/react';

import Navigation from './Navigation';
import { useState } from 'react';
import {
  SVGNavActiveFeed,
  SVGNavActiveProfile,
  SVGNavFeed,
  SVGNavProfile,
  SVGNavWrite24,
} from '../..';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    const [navPosition, setNavPosition] = useState<'left' | 'center' | 'right'>(
      'center',
    );

    return (
      <>
        <div style={{ width: '75px', height: '75px' }}></div>
        <Navigation>
          <Navigation.Item onClick={() => setNavPosition('left')}>
            {navPosition === 'left' ? <SVGNavActiveFeed /> : <SVGNavFeed />}
          </Navigation.Item>
          <Navigation.Item
            position="center"
            onClick={() => setNavPosition('center')}
          >
            <SVGNavWrite24 />
          </Navigation.Item>
          <Navigation.Item onClick={() => setNavPosition('right')}>
            {navPosition === 'right' ? (
              <SVGNavActiveProfile />
            ) : (
              <SVGNavProfile />
            )}
          </Navigation.Item>
        </Navigation>
      </>
    );
  },
};

export const InteractionTest: Story = {
  render: () => {
    const [navPosition, setNavPosition] = useState<'left' | 'center' | 'right'>(
      'center',
    );

    return (
      <>
        <div style={{ width: '75px', height: '75px' }}></div>
        <Navigation data-testid="navigation">
          <Navigation.Item
            data-testid="navigation-item"
            onClick={() => setNavPosition('left')}
          >
            {navPosition === 'left' ? <SVGNavActiveFeed /> : <SVGNavFeed />}
          </Navigation.Item>
          <Navigation.Item
            data-testid="navigation-item"
            position="center"
            onClick={() => setNavPosition('center')}
          >
            <SVGNavWrite24 />
          </Navigation.Item>
          <Navigation.Item
            data-testid="navigation-item"
            onClick={() => setNavPosition('right')}
          >
            {navPosition === 'right' ? (
              <SVGNavActiveProfile />
            ) : (
              <SVGNavProfile />
            )}
          </Navigation.Item>
        </Navigation>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const navigationItems = await canvas.findAllByTestId('navigation-item');
    const [feed, my] = [navigationItems[0], navigationItems[2]];
    const SVGDisActivatedFeed = feed.children[0];
    const SVGDisActivatedMy = my.children[0];

    await userEvent.click(feed, {
      delay: 300,
    });
    expect(SVGDisActivatedFeed).not.toBeInTheDocument();

    await userEvent.click(my, {
      delay: 300,
    });
    expect(SVGDisActivatedMy).not.toBeInTheDocument();
  },
};
