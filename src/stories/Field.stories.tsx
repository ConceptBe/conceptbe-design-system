import { Meta, StoryObj } from '@storybook/react';

import Field from '../components/Field/Field';
import { fireEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import useField from '../hooks/useField';
import FieldInput from '../components/Field/FieldInput';
import FieldTextarea from '../components/Field/FieldTextarea';
import sleep from '../utils/sleep';

interface Props {
  label: string;
  value: string;
  maxLength: number;
  isRequired: boolean;
  name: string;
  successMessage: string;
  errorValue: string;
  placeholder: string;
  autoFocus: boolean;
}

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'Field.Input, Field.Textarea 컴포넌트를 사용하여 Field 컴포넌트 내부 요소들을 정의합니다.',
    },
    label: {
      control: 'text',
      description: 'Field 컴포넌트의 라벨 이름을 설정합니다.',
    },
    value: {
      control: false,
      description:
        'Field 컴포넌트의 유저 타이핑 값을 설정합니다. useField 훅의 fieldValue의 name 프로퍼티에 해당하는 값을 전달하면 됩니다.',
    },
    maxLength: {
      control: 'number',
      description: 'Field 컴포넌트의 입력 최대값을 설정합니다.',
    },
    isRequired: {
      control: 'boolean',
      description:
        'Field 컴포넌트가 필수 입력값인지에 대한 여부를 설정합니다. 기본값은 false입니다.',
    },
    name: {
      control: 'text',
      description:
        'Field.Input, Field.Textarea 컴포넌트의 name 어트리뷰트를 설정합니다. useField 훅의 초기화 객체의 프로퍼티를 전달하면 됩니다.',
    },
    onChange: {
      description:
        'Field.Input, Field.Textarea 컴포넌트에 유저 타이핑을 업데이트 해줍니다.',
    },
    onValidate: {
      description:
        'Field.Input, Field.Textarea 컴포넌트의 유저 타이핑 값을 정규표현식을 통해 검증할 때 사용합니다.',
    },
    successMessage: {
      control: 'text',
      description:
        'Field.Input, Field.Textarea 컴포넌트의 입력값이 정상적일 경우 하단에 표시할 메세지를 설정합니다.',
    },
    errorValue: {
      control: 'text',
      description:
        'Field.Input, Field.Textarea 컴포넌트의 입력값이 비정상적일 경우 하단에 표시할 메세지를 설정합니다. useField 훅의 fieldErrorValue의 name 프로퍼티에 해당하는 값을 전달하면 됩니다.',
    },
    placeholder: {
      control: 'text',
      description:
        'Field.Input, Field.Textarea 컴포넌트의 placeholder 속성을 설정합니다.',
    },
    autoFocus: {
      control: 'boolean',
      description:
        'Field.Input, Field.Textarea 컴포넌트의 auto focus 속성을 설정합니다. 기본값은 false 입니다.',
    },
  },
} as Meta<typeof Field | typeof FieldInput | typeof FieldTextarea>;

export default meta;
type Story = StoryObj<Props>;

export const Input: Story = {
  args: {
    label: '닉네임',
    value: '',
    maxLength: 10,
    isRequired: true,
    name: 'nickname',
    successMessage: '사용 가능한 닉네임입니다.',
    errorValue: '사용 불가능한 닉네임입니다.',
    placeholder: '특수문자를 제외한 닉네임을 입력해 주세요.',
    autoFocus: false,
  },
  render: ({
    label,
    maxLength,
    isRequired,
    name,
    successMessage,
    errorValue,
    placeholder,
    autoFocus,
  }: Props) => {
    const { fieldValue, fieldErrorValue, onChangeField } = useField({
      [name]: '',
    });

    const onValidate = () => {
      return [
        {
          validateFn: (value: string) =>
            /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}]/g.test(value),
          errorMessage: errorValue,
        },
      ];
    };

    return (
      <Field
        label={label}
        value={fieldValue[name]}
        onChange={onChangeField}
        onValidate={onValidate}
        maxLength={maxLength}
        isRequired={isRequired}
      >
        <Field.Input
          name={name}
          errorValue={fieldErrorValue[name]}
          successMessage={successMessage}
          autoFocus={autoFocus}
          placeholder={placeholder}
        />
      </Field>
    );
  },
};

export const Textarea: Story = {
  args: {
    label: '자기소개',
    value: '',
    maxLength: 150,
    isRequired: true,
    name: 'intro',
    successMessage: '사용 가능한 자기소개입니다.',
    errorValue: '사용 불가능한 자기소개입니다.',
    placeholder: '특수문자를 제외한 자기소개을 입력해 주세요.',
    autoFocus: false,
  },
  render: ({
    label,
    maxLength,
    isRequired,
    name,
    successMessage,
    errorValue,
    placeholder,
    autoFocus,
  }: Props) => {
    const { fieldValue, fieldErrorValue, onChangeField } = useField({
      [name]: '',
    });

    const onValidate = () => {
      return [
        {
          validateFn: (value: string) =>
            /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}]/g.test(value),
          errorMessage: errorValue,
        },
      ];
    };

    return (
      <Field
        label={label}
        value={fieldValue[name]}
        onChange={onChangeField}
        onValidate={onValidate}
        maxLength={maxLength}
        isRequired={isRequired}
      >
        <Field.Textarea
          name={name}
          successMessage={successMessage}
          errorValue={fieldErrorValue[name]}
          autoFocus={autoFocus}
          placeholder={placeholder}
        />
      </Field>
    );
  },
};

export const InteractionTest: Story = {
  args: {
    label: '닉네임',
    value: '',
    maxLength: 10,
    isRequired: true,
    name: 'nickname',
    successMessage: '사용 가능한 닉네임입니다.',
    errorValue: '사용 불가능한 닉네임입니다.',
    placeholder: '특수문자를 제외한 닉네임을 입력해 주세요.',
    autoFocus: false,
  },
  render: ({
    label,
    maxLength,
    isRequired,
    name,
    successMessage,
    errorValue,
    placeholder,
    autoFocus,
  }: Props) => {
    const { fieldValue, fieldErrorValue, onChangeField } = useField({
      intro: '',
      [name]: '',
    });

    const onValidate = () => {
      return [
        {
          validateFn: (value: string) =>
            /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}]/g.test(value),
          errorMessage: errorValue,
        },
      ];
    };

    return (
      <>
        <Field
          label={label}
          value={fieldValue[name]}
          onChange={onChangeField}
          onValidate={onValidate}
          maxLength={maxLength}
          isRequired={isRequired}
          data-testid="input-field"
        >
          <Field.Input
            name={name}
            successMessage={successMessage}
            errorValue={fieldErrorValue[name]}
            autoFocus={autoFocus}
            placeholder={placeholder}
            data-testid="input"
          />
        </Field>
        <div style={{ minWidth: 35, minHeight: 35 }} />
        <Field
          label="자기소개"
          value={fieldValue.intro}
          onChange={onChangeField}
          maxLength={150}
          isRequired={isRequired}
          data-testid="textarea-field"
        >
          <Field.Textarea
            name="intro"
            successMessage="사용 가능한 자기소개입니다."
            errorValue={fieldErrorValue.intro}
            placeholder="자기소개를 입력해 주세요."
            data-testid="textarea"
          />
        </Field>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputField = await canvas.findByTestId('input-field');
    const input = (await canvas.findByTestId('input')) as HTMLInputElement;
    const inputLabel = inputField.children[0].textContent;
    const [inputCount, inputMaxLength] = inputField.children[1].children;
    const textareaField = await canvas.findByTestId('textarea-field');
    const textarea = (await canvas.findByTestId(
      'textarea',
    )) as HTMLTextAreaElement;
    const textareaLabel = textareaField.children[0].textContent;
    const [textareaCount, textareaMaxLength] =
      textareaField.children[1].children;

    expect(inputLabel).toBe('닉네임');
    expect(input.placeholder).toBe('특수문자를 제외한 닉네임을 입력해 주세요.');
    expect(inputMaxLength.textContent).toBe('/10');
    expect(textareaLabel).toBe('자기소개');
    expect(textarea.placeholder).toBe('자기소개를 입력해 주세요.');
    expect(textareaMaxLength.textContent).toBe('/150');

    fireEvent.change(input, {
      target: { value: 'concept_be' },
    });

    const inputErrorMessage = input.nextElementSibling;
    expect(input.value).toBe('concept_be');
    expect(inputErrorMessage?.textContent).toBe('사용 불가능한 닉네임입니다.');
    expect(inputCount.textContent).toBe('10');

    await sleep(500);

    fireEvent.change(input, {
      target: { value: '컨셉비' },
    });

    const inputSuccessMessage = input.nextElementSibling;
    expect(input.value).toBe('컨셉비');
    expect(inputSuccessMessage?.textContent).toBe('사용 가능한 닉네임입니다.');
    expect(inputCount.textContent).toBe('3');

    await sleep(500);

    fireEvent.change(textarea, {
      target: { value: 'hello' },
    });

    const textareaSuccessMessage = textarea.nextElementSibling;
    expect(textarea.value).toBe('hello');
    expect(textareaSuccessMessage?.textContent).toBe(
      '사용 가능한 자기소개입니다.',
    );
    expect(textareaCount.textContent).toBe('5');

    await sleep(500);

    fireEvent.change(textarea, {
      target: { value: '' },
    });

    const textareaErrorMessage = textarea.nextElementSibling;
    expect(textarea.value).toBe('');
    expect(textareaErrorMessage?.textContent).toBe('필수 입력 값입니다.');
    expect(textareaCount.textContent).toBe('0');

    await sleep(500);

    fireEvent.change(textarea, {
      target: { value: '안녕하세요.' },
    });
  },
};
