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

자세한 내용은 [스토리북](https://65a04fca8611ba47d7f8b115-jlefxghrma.chromatic.com/)에서 확인하세요.

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

```ts
import { Field, useField } from 'concept-be-design-system';

function SomeComponent() {
  const { fieldValue, fieldErrorValue, onChangeField } = useField<{
    nickName: string;
    intro: string;
  }>({
    nickName: '',
    intro: '',
  });

  const validateInput = () => {
    return [
      {
        validateFn: (value: string) =>
          /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}]/g.test(value),
        errorMessage: '사용 불가한 소개입니다.',
      },
    ];
  };

  return (
    <form>
      <Field
        label="닉네임"
        value={fieldValue.nickName}
        onChange={onChangeField}
        onValidate={validateNickname}
        maxLength={10}
        required
      >
        <Field.Input
          name="nickname"
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
    </form>
  );
}
```

CheckboxContainer 컴포넌트와 useCheckbox 훅은 다음과 같이 사용할 수 있습니다.

```ts
import { CheckboxContainer, useCheckbox } from 'concept-be-design-system';

interface FilterOption {
  id: number;
  name: string;
  checked: boolean;
}

function SomeComponent() {
  const { checkboxValue, onChangeCheckBox } = useCheckbox<{
    goal: FilterOption[];
    skill: FilterOption[];
  }>({
    goal: goalOptions,
    skill: skillOptions,
  });

  return (
    <form>
      <CheckboxContainer
        label="가입 목적"
        checkboxKey="goal"
        options={checkboxValue.goal}
        onChange={onChangeCheckbox}
      />
      <CheckboxContainer
        label="스킬 선택"
        checkboxKey="skill"
        options={checkboxValue.skill}
        onChange={onChangeCheckbox}
        maxCount={3}
        required
      />
    </form>
  )
}
```

RadioContainer 컴포넌트와 useRadio 훅은 다음과 같이 사용할 수 있습니다.

```ts
import { RadioContainer, useRadio } from 'concept-be-design-system';

interface FilterOption {
  id: number;
  name: string;
  checked: boolean;
}

function SomeComponent() {
  const { radioValue, onChangeRadio } = useRadio<{
    collaboration: FilterOption[];
    skill: FilterOption[];
  }>({
    collaboration: collaborationOptions,
    mainSkill: mainSkillOptions,
  });

  return (
    <form>
      <RadioContainer
        label="협업 방식"
        radioKey="collaboration"
        options={radioValue.collaboration}
        onChange={onChangeRadio}
        required
      />
      <RadioContainer
        label="대표 스킬"
        radioKey="mainSkill"
        options={radioValue.mainSkill}
        onChange={onChangeRadio}
      />
    </form>
  )
}
```

Dropdown 컴포넌트와 useDropdown 훅은 다음과 같이 사용할 수 있습니다.

```ts
import { useEffect } from 'react';
import { Dropdown, useDropdown } from 'concept-be-design-system';

function SomeComponent() {
  const { dropdownValue, onResetDropdown, onClickDropdown } = useDropdown<{
    region: string;
    detail: string;
  }>({
    region: '',
    detail: '',
  });

  useEffect(() => {
    if (dropdownValue.detail !== '') {
      onResetDropdown('region');
      onResetDropdown('detail');
    }
  }, [dropdownValue, onResetDropdown]);

  return (
    <form>
      <Dropdown
        selectedValue={dropdownValue.region}
        initialValue="시/도/광역시"
        disabled={false}
      >
        {regionOptions.map(({ id, name }) => (
          <Dropdown.Item
            key={id}
            value={name}
            onClick={(value) => {
              onClickDropdown(value, 'region');
            }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown>

      <Dropdown
        selectedValue={dropdownValue.detail}
        initialValue="시/도/광역시"
        disabled={false}
      >
        {regionOptions.map(({ id, name }) => (
          <Dropdown.Item
            key={id}
            value={name}
            onClick={(value) => {
              onClickDropdown(value, 'detail');
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

## 링크

- [스토리북](https://65a04fca8611ba47d7f8b115-jlefxghrma.chromatic.com/)

## 기여

| <img src="https://avatars.githubusercontent.com/u/89172499?v=4" width="120" height="120"> |
| :---------------------------------------------------------------------------------------: |
|                          [이세민](https://github.com/semnil5202)                          |
