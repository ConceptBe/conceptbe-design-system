import { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

const meta = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['div', 'section', 'article'],
      description: 'Flex 컴포넌트의 DOM tag를 설정합니다.',
    },
    flex: {
      control: 'select',
      options: ['auto', '1', '2'],
    },
    basis: {
      control: 'select',
      options: ['auto', '0', '200px'],
    },
    grow: {
      control: 'select',
      options: ['inherit', '1', '2'],
    },
    shrink: {
      control: 'select',
      options: ['0', '1', '2'],
    },
    gap: {
      control: 'number',
    },
    alignContent: {
      control: 'select',
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'stretch',
      ],
    },
    alignItems: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: 'select',
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    justifyItems: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline'],
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    minWidth: {
      control: 'number',
    },
    minHeight: {
      control: 'number',
    },
    maxWidth: {
      control: 'number',
    },
    maxHeight: {
      control: 'number',
    },
    margin: {
      control: 'number',
    },
    marginTop: {
      control: 'number',
    },
    marginRight: {
      control: 'number',
    },
    marginBottom: {
      control: 'number',
    },
    marginLeft: {
      control: 'number',
    },
    padding: {
      control: 'number',
    },
    paddingTop: {
      control: 'number',
    },
    paddingRight: {
      control: 'number',
    },
    paddingBottom: {
      control: 'number',
    },
    paddingLeft: {
      control: 'number',
    },
    border: {
      control: 'select',
      options: [
        'none',
        '1px solid #000',
        '3px dashed #236799',
        '3mm ridge rgba(232, 179, 20, 0.6)',
      ],
      description:
        'Flex 컴포넌트의 border 속성을 설정합니다. 실제 사용은 텍스트로 작성합니다.',
    },
    borderTop: {
      control: 'select',
      options: [
        'none',
        '1px solid #000',
        '3px dashed #236799',
        '3mm ridge rgba(232, 179, 20, 0.6)',
      ],
    },
    borderRight: {
      control: 'select',
      options: [
        'none',
        '1px solid #000',
        '3px dashed #236799',
        '3mm ridge rgba(232, 179, 20, 0.6)',
      ],
      description:
        'Flex 컴포넌트의 border-right 속성을 설정합니다. 실제 사용은 텍스트로 작성합니다.',
    },
    borderBottom: {
      control: 'select',
      options: [
        'none',
        '1px solid #000',
        '3px dashed #236799',
        '3mm ridge rgba(232, 179, 20, 0.6)',
      ],
      description:
        'Flex 컴포넌트의 border-bottom 속성을 설정합니다. 실제 사용은 텍스트로 작성합니다.',
    },
    borderLeft: {
      control: 'select',
      options: [
        'none',
        '1px solid #000',
        '3px dashed #236799',
        '3mm ridge rgba(232, 179, 20, 0.6)',
      ],
      description:
        'Flex 컴포넌트의 border-left 속성을 설정합니다. 실제 사용은 텍스트로 작성합니다.',
    },
    borderRadius: {
      control: 'number',
    },
    overflow: {
      control: 'text',
    },
    top: {
      control: 'number',
    },
    right: {
      control: 'number',
    },
    bottom: {
      control: 'number',
    },
    left: {
      control: 'number',
    },
    cursor: {
      control: 'inline-radio',
      options: ['auto', 'pointer'],
      description:
        'Flex 컴포넌트의 cursor 속성을 설정합니다. 실제 사용은 텍스트로 작성합니다.',
    },
    opacity: {
      control: 'number',
    },
    zIndex: {
      control: 'number',
    },
    shadow: {
      control: 'select',
      options: [
        'none',
        'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        '10px 5px 5px red',
      ],
      description:
        'Flex 컴포넌트의 border-shadow 속성을 설정합니다. 실제 사용은 텍스트로 작성합니다.',
    },
  },
} as Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    as: 'div',
    width: 375,
    height: 150,
    gap: 12,
  },
  render: (args) => (
    <Flex {...args}>
      {new Array(6).fill('item').map((text: string) => (
        <Flex
          width={40}
          height={40}
          backgroundColor="ba"
          justifyContent="center"
          alignItems="center"
        >
          {text}
        </Flex>
      ))}
    </Flex>
  ),
};
