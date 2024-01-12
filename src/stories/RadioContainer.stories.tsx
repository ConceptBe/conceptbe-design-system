import { Meta, StoryObj } from '@storybook/react';

import RadioContainer from '../components/RadioContainer/RadioContainer';
import useRadio from '../hooks/useRadio';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Components/RadioContainer',
  component: RadioContainer,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'RadioContainer 컴포넌트의 label을 설정합니다.',
    },
    radioKey: {
      control: false,
      description:
        'Radio Input에 적용되는 name을 설정합니다. useRadio를 통해 전달한 초기화 객체의 프로퍼티를 전달하면 됩니다.',
    },
    options: {
      control: false,
      description:
        'RadioContainer 컴포넌트를 통해 선택된 체크박스를 화면에 표시합니다. useRadio 훅의 radioValue의 name 프로퍼티에 해당하는 값을 전달하면 됩니다.',
    },
    onChange: {
      description: 'Radio를 클릭하면 체크 상태로 변경해줍니다.',
    },
    gap: {
      control: 'inline-radio',
      description: 'Radio간 간격을 설정합니다. 기본값은 small 입니다.',
    },
    required: {
      control: 'boolean',
      description: 'RadioContainer 컴포넌트의 필수값 여부를 지정합니다.',
    },
  },
} as Meta<typeof RadioContainer>;

export default meta;
type Story = StoryObj<typeof RadioContainer>;

export const Default: Story = {
  args: {
    radioKey: 'name',
    options: [
      { id: 1, name: '1번 라디오', checked: false },
      { id: 2, name: '2번 라디오', checked: false },
      { id: 3, name: '3번 라디오', checked: false },
    ],
    gap: 'small',
    label: '옵션',
    required: false,
  },
  render: ({ label, radioKey, options, gap, required }) => {
    const { radioValue, onChangeRadio } = useRadio({
      [radioKey]: options,
    });

    return (
      <>
        <RadioContainer
          label={label}
          radioKey={radioKey}
          options={radioValue[radioKey]}
          onChange={(e) => onChangeRadio(e, radioKey)}
          gap={gap}
          required={required}
        />
      </>
    );
  },
};

export const InteractionTest: Story = {
  args: {
    radioKey: 'option',
    options: [
      { id: 1, name: '상관없음', checked: true },
      { id: 2, name: '온라인', checked: false },
      { id: 3, name: '오프라인', checked: false },
    ],
    gap: 'small',
  },
  render: ({ label, radioKey, options, gap, required }) => {
    const { radioValue, onChangeRadio } = useRadio({
      [radioKey]: options,
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
          선택영역
        </div>
        <RadioContainer
          data-testid="radio-container"
          label={label}
          radioKey={radioKey}
          options={radioValue[radioKey]}
          onChange={(e) => onChangeRadio(e, radioKey)}
          gap={gap}
          required={required}
        />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const radioContainer = await canvas.findByTestId('radio-container');
    const radioInputs = [...radioContainer.children[1].children].map(
      (inputWrapper) => inputWrapper.children[0],
    );
    const radioLabels = [...radioContainer.children[1].children].map(
      (inputWrapper) => inputWrapper.children[1],
    );

    const firstRadioInput = radioInputs[0] as HTMLInputElement;
    expect(firstRadioInput.checked).toBe(true);

    const thirdRadioLabel = radioLabels[2] as HTMLLabelElement;
    const thirdRadioInput = radioInputs[2] as HTMLInputElement;
    await userEvent.click(thirdRadioLabel, {
      delay: 300,
    });
    expect(thirdRadioInput.checked).toBe(true);
    expect(firstRadioInput.checked).toBe(false);
  },
};
