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

  const validateInput = () => {
    return [
      {
        regexp: /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}]/g,
        name: 'intro',
        errorMessage: '사용 불가한 소개입니다.',
      },
    ];
  };

  return (
    <>
      <Field
        label="닉네임"
        value={fieldValue.nickName}
        maxLength={10}
        isRequired
      >
        <Field.Input
          name="nickName"
          onChange={onChangeField}
          onValidate={validateInput}
          placeholder="닉네임을 입력해주세요"
          errorMessage={fieldErrorValue.nickName}
          successMessage="사용 가능한 닉네임입니다."
        />
      </Field>

      <Field label="자기소개" value={fieldValue.intro} maxLength={150}>
        <Field.Textarea
          name="intro"
          onChange={onChangeField}
          onValidate={validateInput}
          placeholder="자기소개를 입력해 주세요. (최대 150자)"
          errorMessage={fieldErrorValue.intro}
        />
      </Field>
    </>
  );
};

export default Child;
