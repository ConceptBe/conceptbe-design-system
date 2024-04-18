# conceptbe-design-system

[컨셉비](https://github.com/ConceptBe/conceptbe-frontend)에서 사용하는 디자인 시스템입니다.

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
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <ConceptBeProvider>
    <App />
  </ConceptBeProvider>
);
```

## 사용 방법

### 컴포넌트

자세한 내용은 [스토리북](https://65a04fca8611ba47d7f8b115-dqgporpvoy.chromatic.com/)에서 확인해 주세요.

예를 들어, Button 컴포넌트는 다음과 같이 사용할 수 있습니다.

```jsx
import { Button } from 'concept-be-design-system';

function SomeComponent() {
  return (
    <Button width={120} height={40}>
      ConceptBe
    </Button>
  );
}
```

예를 들어, Text 컴포넌트는 다음과 같이 사용할 수 있습니다.

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

이하 생략.

### 훅

아래 훅들은 **하나의 Form 당 하나의 훅을 사용하면 됩니다.** Form에서 여러 개의 분리된 상태를 하나의 통합된 상태로 관리하는 것에 목적이 있습니다. 따라서 Field, CheckboxContainer, RadioContainer, Dropdown 컴포넌트는 각각 useField, useCheckbox, useRadio, useDropdown와 같이 사용하도록 설계되어 있습니다.

만일 해당 훅들을 사용하지 않고 직접 상태 관리를 하고자 한다면, 각 컴포넌트의 item에 해당하는 Input, Textarea, Checkbox, Radio 컴포넌트와 Text 컴포넌트를 조합하여 작성할 수 있습니다. 단, Dropdown 컴포넌트는 설계 구조상 직접 작성을 지원하지 않습니다.

> Field 컴포넌트와 useField 훅은 다음과 같이 사용할 수 있습니다.

```tsx
import { Field, useField } from 'concept-be-design-system';
import { post } from 'somewhere';

interface Field {
  nickName: string;
  intro: string;
}

function SomeComponent() {
  const { fieldValue, fieldErrorValue, onChangeField } = useField<Field>({
    nickName: '',
    intro: '',
  });

  const validateInput = () => {
    return [
      {
        validateFn: (value: string) =>
          /[~!@#$%";'^,&*()_+|</>=>`?:{[\]}\s]/g.test(value),
        errorMessage: '사용 불가한 소개입니다.',
      },
      {
        validateFn: (value: string) => value.length < 2,
        errorMessage: '최소 두 글자 이상 작성해야 합니다.',
      },
    ];
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post({
      nickname: fieldValue.nickName,
      intro: fieldValue.intro,
    });
  };

  return (
    <form onSubmit={onSubmitForm}>
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

> CheckboxContainer 컴포넌트와 useCheckbox 훅은 다음과 같이 사용할 수 있습니다.

```ts
import { CheckboxContainer, useCheckbox } from 'concept-be-design-system';
import { post } from 'somewhere'

interface FilterOption {
  id: number;
  name: string;
  checked: boolean;
  [key: string]: any;
}

function SomeComponent() {
  const { checkboxValue, selectedCheckboxId, onChangeCheckBox } = useCheckbox<{
    goals: FilterOption[];
    skills: FilterOption[];
  }>({
    goals: goalsOptions,
    skills: skillsOptions,
  });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post({
      goalIds: selectedCheckboxId.goals,
      skillIds: selectedCheckboxId.skills,
    })
  }

  return (
    <form onSubmit={onSubmitForm}>
      <CheckboxContainer
        label="가입 목적"
        checkboxKey="goals"
        options={checkboxValue.goals}
        onChange={onChangeCheckbox}
      />
      <CheckboxContainer
        label="스킬 선택"
        checkboxKey="skills"
        options={checkboxValue.skills}
        onChange={onChangeCheckbox}
        maxCount={3}
        required
      />
    </form>
  )
}
```

> RadioContainer 컴포넌트와 useRadio 훅은 다음과 같이 사용할 수 있습니다.

```tsx
import { RadioContainer, useRadio } from 'concept-be-design-system';
import { post } from 'somewhere';

interface FilterOption {
  id: number;
  name: string;
  checked: boolean;
  [key: string]: any;
}

function SomeComponent() {
  const { radioValue, selectedRadioName, onChangeRadio } = useRadio<{
    collaborations: FilterOption[];
    mainSkills: FilterOption[];
  }>({
    collaborations: collaborationOptions,
    mainSkills: mainSkillsOptions,
  });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post({
      collaborationName: selectedRadioName.collaborations,
      mainSkillName: selectedRadioName.mainSkills,
    });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <RadioContainer
        label="협업 방식"
        radioKey="collaborations"
        options={radioValue.collaborations}
        onChange={onChangeRadio}
        required
      />
      <RadioContainer
        label="대표 스킬"
        radioKey="mainSkills"
        options={radioValue.mainSkills}
        onChange={onChangeRadio}
      />
    </form>
  );
}
```

> Dropdown 컴포넌트와 useDropdown 훅은 다음과 같이 사용할 수 있습니다.

```tsx
import { useEffect } from 'react';
import { Dropdown, useDropdown } from 'concept-be-design-system';
import { post } from 'somewhere';

function SomeComponent() {
  const { dropdownValue, onResetDropdown, onClickDropdown } = useDropdown<{
    region: string;
    detail: string;
  }>({
    region: '',
    detail: '',
  });

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post({
      region: dropdownValue.region,
      detail: dropdownValue.detail,
    });
  };

  useEffect(() => {
    if (dropdownValue.detail !== '') {
      onResetDropdown('region');
      onResetDropdown('detail');
    }
  }, [dropdownValue, onResetDropdown]);

  return (
    <form onSubmit={onSubmitForm}>
      <Dropdown
        selectedValue={dropdownValue.region}
        initialValue="시/도/광역시"
        disabled={false}
      >
        {regionOptions.map(({ id, name }) => (
          <Dropdown.Item
            key={id}
            value={name}
            onClick={(value: string) => {
              onClickDropdown(value, 'region');
            }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown>

      <Dropdown
        selectedValue={dropdownValue.detail}
        initialValue="상세 지역"
        disabled={dropdownValue.region === ''}
      >
        {regionOptions.map(({ id, name }) => (
          <Dropdown.Item
            key={id}
            value={name}
            onClick={(value: string) => {
              onClickDropdown(value, 'detail');
            }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </form>
  );
}
```

## 링크

- [스토리북](https://65a04fca8611ba47d7f8b115-dqgporpvoy.chromatic.com/)

## 기여

| <img src="https://avatars.githubusercontent.com/u/89172499?v=4" width="120" height="120"> | <img src="https://avatars.githubusercontent.com/u/33623078?v=4" width="120" height="120"> |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|                          [이세민](https://github.com/semnil5202)                          |                            [박영진](https://github.com/yogjin)                            |
