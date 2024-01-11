import { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header/Header';
import {
  SVGHeaderBack24B,
  SVGHeaderBack24W,
  SVGHeaderCheck24,
  SVGTripleDots,
  SVGHeaderFilter,
  SVGHeaderMainLogo,
  SVGHeaderSetting,
} from '../.';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'Header.Item 컴포넌트를 사용하여 Header 컴포넌트 내부 요소들을 정의합니다.',
    },
    spacerPosition: {
      control: 'radio',
      description:
        '요소 정렬을 위한 여백 삽입 위치를 설정합니다. 추후 삭제될 속성입니다.',
    },
    main: {
      control: 'boolean',
      description:
        '헤더의 배경 색상을 Primary로 변경할지 여부를 설정합니다. 추후 삭제될 속성입니다.',
    },
  },
} as Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    main: true,
  },
  render: ({ main, spacerPosition }) => (
    <>
      <Header main={main} spacerPosition={spacerPosition}>
        <Header.Item>
          <SVGHeaderMainLogo cursor="pointer" />
        </Header.Item>
        <Header.Item>
          <SVGHeaderFilter cursor="pointer" />
        </Header.Item>
      </Header>
    </>
  ),
};

export const FeedDetail: Story = {
  args: {
    main: true,
    spacerPosition: 'end',
  },
  render: ({ main, spacerPosition }) => (
    <Header main={main} spacerPosition={spacerPosition}>
      <SVGHeaderBack24W cursor="pointer" />
      <SVGHeaderMainLogo cursor="pointer" />
    </Header>
  ),
};

export const MyFeedDetail: Story = {
  args: {
    main: true,
  },
  render: ({ main, spacerPosition }) => (
    <Header main={main} spacerPosition={spacerPosition}>
      <SVGHeaderBack24W cursor="pointer" />
      <SVGHeaderMainLogo cursor="pointer" />
      <div style={{ position: 'relative' }}>
        <SVGTripleDots cursor="pointer" />
      </div>
    </Header>
  ),
};

export const WriteFeed: Story = {
  args: {
    main: false,
  },
  render: ({ main, spacerPosition }) => (
    <Header main={main} spacerPosition={spacerPosition}>
      <SVGHeaderBack24B cursor="pointer" />
      <span
        style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'rgba(0, 0, 0, 0.73)',
        }}
      >
        글쓰기
      </span>
      <SVGHeaderCheck24 cursor="pointer" />
    </Header>
  ),
};

export const SignUp: Story = {
  args: {
    main: true,
  },
  render: ({ main, spacerPosition }) => (
    <Header main={main} spacerPosition={spacerPosition}>
      <Header.Item>
        <div style={{ minWidth: '20px', minHeight: '20px' }} />
      </Header.Item>
      <Header.Item>
        <span
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#FFFFFF',
          }}
        >
          프로필 설정
        </span>
      </Header.Item>
      <Header.Item>
        <div style={{ minWidth: '20px', minHeight: '20px' }} />
      </Header.Item>
    </Header>
  ),
};

export const Profile: Story = {
  args: {
    main: true,
  },
  render: ({ main, spacerPosition }) => (
    <Header main={main} spacerPosition={spacerPosition}>
      <Header.Item>
        <SVGHeaderMainLogo cursor="pointer" />
      </Header.Item>
      <Header.Item>
        <SVGHeaderSetting cursor="pointer" />
      </Header.Item>
    </Header>
  ),
};

export const ProfileSetting: Story = {
  args: {
    main: true,
    spacerPosition: 'end',
  },
  render: ({ main, spacerPosition }) => (
    <Header main={main} spacerPosition={spacerPosition}>
      <Header.Item>
        <SVGHeaderBack24W cursor="pointer" />
      </Header.Item>
      <Header.Item>
        <span
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#FFFFFF',
          }}
        >
          프로필 설정
        </span>
      </Header.Item>
    </Header>
  ),
};

export const ProfileMore: Story = {
  args: {
    main: false,
    spacerPosition: 'end',
  },
  render: ({ main, spacerPosition }) => (
    <Header main={main} spacerPosition={spacerPosition}>
      <Header.Item>
        <SVGHeaderBack24B cursor="pointer" />
      </Header.Item>
      <Header.Item>
        <span
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: 'rgba(0, 0, 0, 0.73)',
          }}
        >
          더보기
        </span>
      </Header.Item>
    </Header>
  ),
};
