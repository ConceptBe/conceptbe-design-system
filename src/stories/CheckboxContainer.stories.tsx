import { Meta, StoryObj } from '@storybook/react';

import CheckboxContainer from '../components/CheckboxContainer/CheckboxContainer';
import useCheckbox from '../hooks/useCheckbox';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/CheckboxContainer',
  component: CheckboxContainer,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'CheckboxContainer 컴포넌트의 label을 설정합니다.',
    },
    checkboxKey: {
      control: false,
      description:
        'CheckboxContainer 컴포넌트에 적용되는 name을 설정합니다. useCheckbox훅을 통해 전달한 초기화 객체의 프로퍼티를 전달해야 정상 동작합니다.',
    },
    options: {
      control: false,
      description:
        'CheckboxContainer 컴포넌트를 통해 선택된 체크박스를 화면에 표시합니다. useCheckbox 훅의 checkboxValue의 name 프로퍼티에 해당하는 값을 전달하면 됩니다.',
    },
    onChange: {
      description:
        'Checkbox를 클릭하면 체크 상태로 변경해줍니다. 최대로 체크할 수 있는 최댓값을 설정할 수 있습니다.',
    },
    maxCount: {
      control: 'number',
      description: '체크박스를 선택할 수 있는 최대 개수를 설정합니다.',
    },
    required: {
      control: 'boolean',
      description: 'CheckboxContainer 컴포넌트의 필수값 여부를 지정합니다.',
    },
  },
} as Meta<typeof CheckboxContainer>;

export default meta;
type Story = StoryObj<typeof CheckboxContainer>;

export const Default: Story = {
  args: {
    label: '옵션',
    checkboxKey: 'key',
    options: [
      { id: 1, name: '1번 체크박스', checked: false },
      { id: 2, name: '2번 체크박스', checked: false },
      { id: 3, name: '3번 체크박스', checked: false },
    ],
    maxCount: 3,
    required: false,
  },
  render: ({ label, checkboxKey, options, maxCount, required }) => {
    const { checkboxValue, onChangeCheckbox } = useCheckbox({
      [checkboxKey]: options,
    });

    return (
      <>
        <CheckboxContainer
          label={label}
          checkboxKey={checkboxKey}
          options={checkboxValue[checkboxKey]}
          onChange={(e) => onChangeCheckbox(e, checkboxKey)}
          maxCount={maxCount}
          required={required}
        />
      </>
    );
  },
};

export const InteractionTest: Story = {
  args: {
    label: '가입 목적 (최대 3개)',
    checkboxKey: 'purpose',
    options: [
      { id: 1, name: '사이드프로젝트', checked: false },
      { id: 2, name: '창업', checked: false },
      { id: 3, name: '크라우드펀딩', checked: false },
      { id: 4, name: '공모전', checked: false },
      { id: 5, name: '스터디', checked: false },
    ],
    maxCount: 3,
    required: true,
  },
  render: ({ label, checkboxKey, options, maxCount, required }) => {
    const { checkboxValue, onChangeCheckbox } = useCheckbox({
      [checkboxKey]: options,
    });

    return (
      <>
        <CheckboxContainer
          data-testid="checkbox-container"
          label={label}
          checkboxKey={checkboxKey}
          options={checkboxValue[checkboxKey]}
          onChange={onChangeCheckbox}
          maxCount={maxCount}
          required={required}
        />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkboxContainer = await canvas.findByTestId('checkbox-container');
    const checkboxes = [...checkboxContainer.children[1].children].filter(
      (_, idx) => idx % 2 === 1,
    );
    const checkboxChecks = [...checkboxContainer.children[1].children].filter(
      (_, idx) => idx % 2 !== 1,
    ) as HTMLInputElement[];

    expect(checkboxChecks.some((checkbox) => checkbox.checked)).toBe(false);

    await userEvent.click(checkboxes[0], {
      delay: 300,
    });
    await userEvent.click(checkboxes[2], {
      delay: 300,
    });
    await userEvent.click(checkboxes[2], {
      delay: 300,
    });
    await userEvent.click(checkboxes[4], {
      delay: 300,
    });
    await userEvent.click(checkboxes[3], {
      delay: 300,
    });
    expect(checkboxChecks.filter((checkbox) => checkbox.checked).length).toBe(
      3,
    );
  },
};
