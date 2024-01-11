# conceptbe-design-system

컨셉비 디자인 시스템

## 설치 방법

```sh
npm install concept-be-design-system
```

또는

```sh
yarn add concept-be-design-system
```

## 사용 전에

ConceptBeProvider를 프로젝트 루트에 감싸주세요.

```jsx
import { ConceptBeProvider } from 'concept-be-design-system';

const App = ({ children }) => {
  return <ConceptBeProvider>{children}</ConceptBeProvider>;
};
```

## 사용 방법

### 컴포넌트

자세한 내용은 [스토리북](https://659f1dcbf0bf3bf442b47290-mnoqlcimlu.chromatic.com/)에서 확인하세요.

Button 컴포넌트는 다음과 같이 사용할 수 있습니다.

```jsx
import { Button } from 'concept-be-design-system';

function SomeComponent() {
  return <Button>ConceptBe</Button>;
}
```

Text 컴포넌트는 다음과 같이 사용할 수 있습니다.

```jsx
import { Text } from 'concept-be-design-system';

function SomeComponent() {
  return (
    <Text font="suit14m" color="b4">
      ConceptBe
    </Text>
  );
}
```

(중략)

### 훅

Field 컴포넌트와 useField 훅은 다음과 같이 사용할 수 있습니다.

```jsx
import { Field, useField } from 'concept-be-design-system';

function SomeComponent() {
  const { fieldValue, fieldErrorValue, onChangeField } =
    useField<{
      nickName: string;
      intro: string;
    }>({
      nickName: '',
      intro: '',
    });

  const validateInput = () => {
    return [
      {
        regexp: /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}]/g,
        name: 'nickName',
        errorMessage: '사용 불가한 닉네임입니다.',
      },
    ];
  };

  return (
    <form>
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
    </form>
  );
}
```

CheckboxContainer 컴포넌트와 useCheckbox 훅은 다음과 같이 사용할 수 있습니다.

```jsx
import { CheckboxContainer, useCheckbox } from 'concept-be-design-system';

function SomeComponent() {
  const { checkboxValue, onChangeCheckBox } = useCheckbox<{
    name: FilterOption[];
    skill: FilterOption[];
  }>({
    name: nameOptions,
    skill: skillOptions,
  });

  return (
    <form>
      <CheckboxContainer
        nameKey="name"
        options={checkboxValue.name}
        onChange={(e) => onChangeCheckBox(e, 'name')}
      />
      <CheckboxContainer
        nameKey="skill"
        options={checkboxValue.skill}
        onChange={(e) =>
          onChangeCheckBox(e, 'skill', {
            checkboxKey: 'skill',
            maxValue: 3,
          })
        }
      />
    </form>
  )
}
```

RadioContainer 컴포넌트와 useRadio 훅은 다음과 같이 사용할 수 있습니다.

```jsx
import { RadioContainer, useRadio } from 'concept-be-design-system';

function SomeComponent() {
  const { radioValue, onChangeRadio } = useRadio<{
    name: FilterOption[];
    skill: FilterOption[];
  }>({
    name: nameOptions,
    skill: skillOptions,
  });

  return (
    <form>
      <RadioContainer
        nameKey="name"
        options={radioValue.name}
        onChange={(e) => onChangeRadio(e, 'name')}
      />
      <RadioContainer
        nameKey="skill"
        options={radioValue.skill}
        onChange={(e) =>
          onChangeRadio(e, 'skill')
        }
      />
    </form>
  )
}
```

Dropdown 컴포넌트와 useDropdown 훅은 다음과 같이 사용할 수 있습니다.

```jsx
import { useEffect } from 'react';
import { Dropdown, useDropdown } from 'concept-be-design-system';

function SomeComponent() {
  const { dropdownValue, onResetDropdown, onClickDropdown } = useDropdown<{
    see: string;
    do: string;
  }>({
    see: '',
    do: '',
  });

  useEffect(() => {
    if (dropdownValue.do !== '') {
      onResetDropdown('see');
      onResetDropdown('do');
    }
  }, [dropdownValue, onResetDropdown]);

  return (
    <form>
      <Dropdown
        selectedValue={dropdownValue.see}
        initialValue="시/도/광역시"
        disabled={false}
      >
        {regionOptions.map(({ id, name }) => (
          <Dropdown.Item
            key={id}
            value={name}
            onClick={(value) => {
              onClickDropdown(value, 'see');
            }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown>

      <Dropdown
        selectedValue={dropdownValue.do}
        initialValue="시/도/광역시"
        disabled={false}
      >
        {regionOptions.map(({ id, name }) => (
          <Dropdown.Item
            key={id}
            value={name}
            onClick={(value) => {
              onClickDropdown(value, 'do');
            }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </form>
  )
}
```

## 문서

- [스토리북](https://659f1dcbf0bf3bf442b47290-mnoqlcimlu.chromatic.com/)

## 기여

| <img src="https://avatars.githubusercontent.com/u/89172499?v=4" width="120" height="120"> |
| :---------------------------------------------------------------------------------------: |
|                          [이세민](https://github.com/semnil5202)                          |
