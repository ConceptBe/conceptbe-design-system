import { Meta, StoryObj } from '@storybook/react';

import Text from './Text';
import { Fragment } from 'react';
import theme, { ColorKeyType, FontKeyType } from '../../styles/theme';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text 컴포넌트의 텍스트를 설정합니다.',
    },
    font: {
      control: 'select',
      description: 'Text 컴포넌트의 폰트 스타일을 설정합니다.',
    },
    color: {
      control: 'select',
      description: 'Text 컴포넌트의 폰트 색상을 설정합니다.',
    },
    required: {
      control: 'boolean',
      description: 'Text 컴포넌트의 폰트 색상을 설정합니다.',
    },
    as: {
      control: 'inline-radio',
      options: ['span', 'a', 'button', 'p'],
      description: 'Text 컴포넌트의 DOM tag를 설정합니다.',
    },
  },
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Text, 텍스트',
    font: 'suit14sm',
    color: 'b',
    required: false,
    as: 'span',
  },
};

interface Size {
  font: FontKeyType[];
  color: ColorKeyType[];
}

export const Case: Story = {
  render: () => {
    const size = {
      font: Object.keys(theme.font),
      color: Object.keys(theme.color),
    } as Size;
    const children = 'Text, 텍스트';
    const defaultFont = 'suit14sm';
    const defaultColor = 'b';

    return (
      <div style={{ display: 'flex', gap: '40px' }}>
        <section>
          {size.font.map((font) => (
            <Fragment key={font}>
              <div
                style={{
                  margin: '12px 0 4px 0',
                  color: '#a6a6a6',
                  fontSize: '13px',
                }}
              >
                [{font}]
              </div>
              <Text font={font} color={defaultColor}>
                {children}
              </Text>
            </Fragment>
          ))}
        </section>
        <section>
          {size.color.map((color) => (
            <Fragment key={color}>
              <div
                style={{
                  margin: '12px 0 4px 0',
                  color: '#a6a6a6',
                  fontSize: '13px',
                }}
              >
                [{color}]
              </div>
              <Text font={defaultFont} color={color}>
                {children}
              </Text>
            </Fragment>
          ))}
        </section>
      </div>
    );
  },
};
