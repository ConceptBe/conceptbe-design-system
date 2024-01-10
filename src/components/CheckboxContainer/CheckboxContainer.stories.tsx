import { Meta, StoryObj } from '@storybook/react';

import CheckboxContainer from './CheckboxContainer';
import useCheckbox from '../../hooks/useCheckbox';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/CheckboxContainer',
  component: CheckboxContainer,
  tags: ['autodocs'],
  argTypes: {
    nameKey: {
      control: 'text',
      description:
        'CheckboxContainer에 적용되는 name을 설정합니다. useCheckbox를 통해 전달한 초기화 객체의 프로퍼티를 전달하면 됩니다. 제어 컴포넌트 방식이라 잘못된 값을 전달해도 정상 동작하나, 안정성을 위하여 만들어 놓았습니다.',
    },
    options: {
      control: 'object',
      description:
        'CheckboxContainer에 표시되는 id, name, checked를 설정합니다.',
    },
    onChange: {
      description:
        'Checkbox를 클릭하면 체크 상태로 변경해줍니다. 최대로 체크할 수 있는 최댓값을 설정할 수 있습니다.',
    },
  },
} as Meta<typeof CheckboxContainer>;

export default meta;
type Story = StoryObj<typeof CheckboxContainer>;

export const Default: Story = {
  args: {
    nameKey: 'name',
    options: [
      { id: 1, name: '1번 체크박스', checked: false },
      { id: 2, name: '2번 체크박스', checked: false },
      { id: 3, name: '3번 체크박스', checked: false },
    ],
  },
  render: ({ nameKey, options }) => {
    const { checkboxValue, onChangeCheckbox } = useCheckbox({
      [nameKey]: options,
    });

    return (
      <>
        <CheckboxContainer
          nameKey={nameKey}
          options={checkboxValue[nameKey]}
          onChange={(e) => onChangeCheckbox(e, nameKey)}
        />
      </>
    );
  },
};

export const InteractionTest: Story = {
  args: {
    nameKey: 'purpose',
    options: [
      { id: 1, name: '사이드프로젝트', checked: false },
      { id: 2, name: '창업', checked: false },
      { id: 3, name: '크라우드펀딩', checked: false },
      { id: 4, name: '공모전', checked: false },
      { id: 5, name: '스터디', checked: false },
    ],
  },
  render: ({ nameKey, options }) => {
    const { checkboxValue, onChangeCheckbox } = useCheckbox({
      [nameKey]: options,
    });

    return (
      <>
        <div
          style={{
            fontWeight: 500,
            fontSize: '15px',
            color: 'rgba(0, 0, 0, 0.40)',
            marginBottom: '12px',
          }}
        >
          가입 목적 (최대 3개)
        </div>
        <CheckboxContainer
          data-testid="checkbox-container"
          nameKey={nameKey}
          options={checkboxValue[nameKey]}
          onChange={(e) =>
            onChangeCheckbox(e, nameKey, {
              checkboxKey: nameKey,
              maxValue: 3,
            })
          }
        />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkboxContainer = await canvas.findByTestId('checkbox-container');
    const checkboxes = [...checkboxContainer.children].filter(
      (_, idx) => idx % 2 === 1,
    );
    const checkboxChecks = [...checkboxContainer.children].filter(
      (_, idx) => idx % 2 !== 1,
    ) as HTMLInputElement[];

    expect(checkboxChecks.some((checkbox) => checkbox.checked)).toBe(false);

    await userEvent.click(checkboxes[0], {
      delay: 500,
    });
    await userEvent.click(checkboxes[2], {
      delay: 500,
    });
    await userEvent.click(checkboxes[2], {
      delay: 500,
    });
    await userEvent.click(checkboxes[4], {
      delay: 500,
    });
    await userEvent.click(checkboxes[3], {
      delay: 500,
    });
    expect(checkboxChecks.filter((checkbox) => checkbox.checked).length).toBe(
      3,
    );
  },
};
