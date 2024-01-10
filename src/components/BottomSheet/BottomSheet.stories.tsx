import { Meta, StoryObj } from '@storybook/react';

import BottomSheet from './BottomSheet';
import { useEffect, useState } from 'react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'BottomSheet 컴포넌트의 오픈 여부를 설정합니다.',
    },
    onClose: {
      description: 'BottomSheet 컴포넌트를 닫을 수 있는 함수를 설정합니다.',
    },
    children: {
      description: 'BottomSheet 컴포넌트의 내부 요소를 설정합니다.',
    },
  },
} as Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
  render: ({ isOpen }) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(isOpen);

    const onClose = () => {
      setIsBottomSheetOpen(false);
    };

    useEffect(() => {
      setIsBottomSheetOpen(isOpen);
    }, [isOpen]);

    return (
      <div style={{ width: '375px', margin: '0 auto', height: '400px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              padding: '6px 12px',
              border: '1px solid #767676',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setIsBottomSheetOpen(true)}
          >
            Open BottomSheet
          </button>
        </div>
        <BottomSheet isOpen={isBottomSheetOpen} onClose={onClose}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <br />
            <br />
            BottomSheet
          </div>
        </BottomSheet>
      </div>
    );
  },
};

export const InteractionTest: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
  render: ({ isOpen }) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(isOpen);

    const onClose = () => {
      setIsBottomSheetOpen(false);
    };

    useEffect(() => {
      setIsBottomSheetOpen(isOpen);
    }, [isOpen]);

    return (
      <div
        style={{
          width: '375px',
          margin: '0 auto',
          height: '400px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              padding: '6px 12px',
              border: '1px solid #767676',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setIsBottomSheetOpen(true)}
            data-testid="open-button"
          >
            Open BottomSheet
          </button>
        </div>
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={onClose}
          data-testid="bottom-sheet"
        >
          <div
            style={{
              padding: '22px 22px 0 22px',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: 'rgba(0, 0, 0, 0.87)',
              }}
              data-testid="title"
            >
              개인정보 수집 및 이용 동의
            </span>

            <div style={{ minWidth: '16px', minHeight: '16px' }} />
            <span
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(0, 0, 0, 0.60)',
                lineHeight: '22px',
              }}
            >
              본 개인정보처리방침은 컨셉BE에서 제공하는 서비스 이용과 관련하여
              사용자의 개인정보 보호에 대한 내용을 설명합니다. 서비스를
              이용함으로써 사용자는 본 방침에 동의하는 것으로 간주됩니다.
            </span>
            <div style={{ margin: '12px auto', width: 'max-content' }}>
              <button
                style={{
                  padding: '6px 20px',
                  border: '1px solid #767676',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => setIsBottomSheetOpen(false)}
                data-testid="close-button"
              >
                확인
              </button>
            </div>
          </div>
        </BottomSheet>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const bottomSheetOpenButton = await canvas.findByTestId('open-button');
    const bottomSheet = await canvas.findByTestId('bottom-sheet');

    await userEvent.click(bottomSheetOpenButton, {
      delay: 300,
    });
    expect(bottomSheet).toBeInTheDocument();

    const title = canvas.getByTestId('title');
    expect(title.innerHTML).toBe('개인정보 수집 및 이용 동의');

    const bottomSheetDimmed = bottomSheet.children[0];
    const closeButton = canvas.getByTestId('close-button');
    await userEvent.click(closeButton, {
      delay: 300,
    });
    expect(bottomSheetDimmed).not.toBeInTheDocument();
  },
};
