import Field from './components/Field/Field';
import useField from './hooks/useField';

interface FormValueType {
  nickName: string;
  intro: string;
}

const Child = () => {
  const { fieldValue, fieldErrorValue, onChangeField } =
    useField<FormValueType>({
      nickName: '',
      intro: '',
    });

  const validateNickname = () => {
    return [
      {
        validateFn: (value: string) =>
          /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}]/g.test(value),
        errorMessage: '사용 불가한 소개입니다.',
      },
      {
        validateFn: () => fieldErrorValue.intro.length > 0,
        errorMessage: '사용 불가한 소개입니다.',
      },
    ];
  };

  return (
    <>
      <Field
        label="닉네임"
        value={fieldValue.nickName}
        onChange={onChangeField}
        onValidate={validateNickname}
        maxLength={10}
        required
      >
        <Field.Input
          name="nickName"
          placeholder="닉네임을 입력해주세요"
          errorValue={fieldErrorValue.nickName}
          successMessage="사용 가능한 닉네임입니다."
        />
      </Field>

      <Field
        label="자기소개"
        value={fieldValue.intro}
        onChange={onChangeField}
        maxLength={150}
      >
        <Field.Textarea
          name="intro"
          placeholder="자기소개를 입력해 주세요. (최대 150자)"
          errorValue={fieldErrorValue.intro}
        />
      </Field>
    </>
  );
};

export default Child;
