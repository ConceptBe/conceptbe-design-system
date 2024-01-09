import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import TabLayout from './TabLayout';

const meta = {
  title: 'Components/TabLayout',
  component: TabLayout,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Tab Layout 가로 크기를 설정합니다. 기본 값은 375px 입니다.',
    },
    height: {
      control: 'number',
      description: 'Tab Layout 세로 크기를 설정합니다. 기본 값은 400px 입니다.',
    },
    tabBoxHeight: {
      control: 'number',
      description:
        'Tab Box 세로 크기를 설정합니다. 기본 값은 50px 입니다. 가로 크기는 Tab Layout과 같습니다.',
    },
  },
} as Meta<typeof TabLayout>;

export default meta;
type Story = StoryObj<typeof TabLayout>;

export const Default: Story = {
  args: {
    width: 375,
    height: 200,
    tabBoxHeight: 40,
  },
  render: (args) => (
    <TabLayout {...args}>
      <TabLayout.Tab label="아이디어">
        <div
          data-testId="idea-card"
          style={{ marginTop: '100px', textAlign: 'center' }}
        >
          아이디어 카드
        </div>
      </TabLayout.Tab>
      <TabLayout.Tab label="북마크">
        <div
          data-testId="bookmark-card"
          style={{ marginTop: '100px', textAlign: 'center' }}
        >
          북마크 카드
        </div>
      </TabLayout.Tab>
    </TabLayout>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const firstTabBox = await canvas.findByTestId('tab-layout-tab-box-0');
    const secondTabBox = await canvas.findByTestId('tab-layout-tab-box-1');

    await userEvent.click(secondTabBox, {
      delay: 500,
    });
    const bookmarkCard = await canvas.findByTestId('bookmark-card');
    expect(bookmarkCard.innerHTML).toBe('북마크 카드');

    await userEvent.click(firstTabBox, {
      delay: 500,
    });
    const ideaCard = await canvas.findByTestId('idea-card');
    expect(ideaCard.innerHTML).toBe('아이디어 카드');
  },
};
