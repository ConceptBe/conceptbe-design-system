import { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import useDropdown from '../../hooks/useDropdown';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'Dropdown.Item 컴포넌트를 사용하여 Dropdown 컴포넌트 내부 요소들을 정의합니다.',
    },
    initialValue: {
      control: 'text',
      description: 'Dropdown 컴포넌트의 초기값을 설정합니다.',
    },
    selectedValue: {
      control: false,
      description:
        'Dropdown.Item 컴포넌트를 통해 선택된 요소를 화면에 표시합니다. useDropdown 훅의 dropdownValue의 name 프로퍼티에 해당하는 값을 전달하면 됩니다.',
    },
    disabled: {
      control: 'boolean',
      description: 'Dropdown 컴포넌트의 비활성화 여부를 설정합니다.',
    },
  },
} as Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    initialValue: '항목 선택',
    disabled: false,
  },
  render: ({ initialValue, disabled }) => {
    const [init, setInit] = useState<string>(initialValue);
    const { dropdownValue, onClickDropdown } = useDropdown({
      category: '',
    });
    const DROPDOWN_ITEMS = [
      { id: 1, name: '항목 1' },
      { id: 2, name: '항목 2' },
      { id: 3, name: '항목 3' },
      { id: 4, name: '항목 4' },
      { id: 5, name: '항목 5' },
    ];

    useEffect(() => {
      setInit(initialValue);
    }, [initialValue]);

    return (
      <div
        style={{
          height: '200px',
        }}
      >
        <Dropdown
          disabled={disabled}
          initialValue={init}
          selectedValue={dropdownValue.category}
        >
          {DROPDOWN_ITEMS.map(({ id, name }) => (
            <Dropdown.Item
              key={id}
              value={name}
              onClick={(value) => onClickDropdown(value, 'category')}
            >
              {name}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    );
  },
};

export const InteractionTest: Story = {
  args: {
    initialValue: '시/도/광역시',
    disabled: false,
  },
  render: ({ initialValue, disabled }) => {
    const [init, setInit] = useState<string>(initialValue);
    const { dropdownValue, onClickDropdown } = useDropdown({
      category: '',
    });
    const REGION_LIST = [
      { id: 1, name: '서울특별시' },
      { id: 2, name: '부산광역시' },
      { id: 3, name: '대구광역시' },
      { id: 4, name: '인천광역시' },
      { id: 5, name: '광주광역시' },
      { id: 6, name: '울산광역시' },
      { id: 7, name: '세종특별자치시' },
      { id: 8, name: '경기도' },
      { id: 9, name: '강원특별자치도' },
      { id: 10, name: '충청북도' },
      { id: 11, name: '충청남도' },
      { id: 12, name: '전라북도' },
      { id: 13, name: '전라남도' },
      { id: 14, name: '경상북도' },
      { id: 15, name: '경상남도' },
      { id: 16, name: '제주특별자치도' },
    ];

    useEffect(() => {
      setInit(initialValue);
    }, [initialValue]);

    return (
      <div
        style={{
          width: '375px',
          height: '200px',
          margin: '0 auto',
        }}
      >
        <Dropdown
          data-testid="dropdown"
          disabled={disabled}
          initialValue={init}
          selectedValue={dropdownValue.category}
        >
          {REGION_LIST.map(({ id, name }) => (
            <Dropdown.Item
              data-testid="dropdown-item"
              key={id}
              value={name}
              onClick={(value) => onClickDropdown(value, 'category')}
            >
              {name}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dropdown = await canvas.findByTestId('dropdown');
    const trigger = dropdown.children[0];

    await userEvent.click(trigger, {
      delay: 300,
    });

    const dropdownItems = await canvas.findAllByTestId('dropdown-item');
    expect(dropdownItems[0]).toBeInTheDocument();
    expect(dropdownItems.length).toBe(16);

    const busanItem = dropdownItems[1];

    await userEvent.click(busanItem, {
      delay: 300,
    });
    expect(trigger.textContent).toBe('부산광역시');
  },
};
