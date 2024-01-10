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
      description:
        'Tab Layout 컴포넌트의 가로 크기를 설정합니다. 기본 값은 375px 입니다.',
    },
    height: {
      control: 'number',
      description:
        'Tab Layout 컴포넌트의 세로 크기를 설정합니다. 기본 값은 400px 입니다.',
    },
    tabBoxHeight: {
      control: 'number',
      description:
        'Tab Box의 세로 크기를 설정합니다. 기본 값은 50px 입니다. 가로 크기는 Tab Layout과 같습니다.',
    },
  },
} as Meta<typeof TabLayout>;

export default meta;
type Story = StoryObj<typeof TabLayout>;

export const Default: Story = {
  args: {
    width: 375,
    height: 400,
    tabBoxHeight: 50,
  },
  render: (args) => (
    <TabLayout {...args}>
      <TabLayout.Tab label="1">
        <div
          style={{
            width: '375px',
            height: '400px',
            backgroundColor: '#d1d1d1',
          }}
        ></div>
      </TabLayout.Tab>
      <TabLayout.Tab label="2">
        <div
          style={{
            width: '375px',
            height: '400px',
            backgroundColor: '#767676',
          }}
        ></div>
      </TabLayout.Tab>
    </TabLayout>
  ),
};

export const InteractionTest: Story = {
  args: {
    width: 375,
    height: '100%',
    tabBoxHeight: 40,
  },
  render: (args) => (
    <TabLayout {...args} data-testid="tab-layout">
      <TabLayout.Tab label="아이디어">
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#F5F6F8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {new Array(10).fill('아이디어 카드').map((ideaCard, idx) => (
            <div
              key={idx}
              data-testid="idea-card"
              style={{
                marginTop: '20px',
                backgroundColor: '#fff',
                width: '120px',
                height: '120px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {ideaCard}
            </div>
          ))}
        </div>
      </TabLayout.Tab>
      <TabLayout.Tab label="북마크">
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#F5F6F8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {new Array(10).fill('북마크 카드').map((bookmarkCard, idx) => (
            <div
              key={idx}
              data-testid="bookmark-card"
              style={{
                marginTop: '20px',
                backgroundColor: '#fff',
                width: '120px',
                height: '120px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {bookmarkCard}
            </div>
          ))}
        </div>
      </TabLayout.Tab>
    </TabLayout>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tabLayout = await canvas.findByTestId('tab-layout');
    const tabBoxes = tabLayout.children[0].children;
    const [firstTabBox, secondTabBox] = tabBoxes;

    await userEvent.click(secondTabBox, {
      delay: 300,
    });
    const bookmarkCard = await canvas.findAllByTestId('bookmark-card');
    expect(bookmarkCard.length).toBe(10);

    await userEvent.click(firstTabBox, {
      delay: 300,
    });
    const ideaCard = await canvas.findAllByTestId('idea-card');
    expect(ideaCard.length).toBe(10);
  },
};
