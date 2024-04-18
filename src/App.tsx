import { useEffect, useState } from 'react';

import { Button, Spacer } from '.';
import Child from './Child';
import Checkbox from './components/Checkbox/Checkbox';
import CheckboxContainer from './components/CheckboxContainer/CheckboxContainer';
import Dropdown from './components/Dropdown/Dropdown';
import RadioContainer from './components/RadioContainer/RadioContainer';
import Tag from './components/Tag/Tag';
import useCheckbox from './hooks/useCheckbox';
import useDropdown from './hooks/useDropdown';
import useRadio from './hooks/useRadio';

interface DropdownProps {
  see: string;
  do: string;
}

interface FilterOption {
  id: number;
  name: string;
  checked: boolean;
}

const regionOptions = [
  { id: 1, name: '서울특별시' },
  { id: 2, name: '부산광역시' },
  { id: 3, name: '대구광역시' },
  { id: 4, name: '인천광역시' },
  { id: 5, name: '광주광역시' },
  { id: 6, name: '울산광역시' },
];

const filterSubOptions = [
  { id: 11, name: '사이드프로젝트', checked: false },
  { id: 22, name: '창업', checked: false },
  { id: 33, name: '크라우드펀딩', checked: false },
  { id: 44, name: '공모전', checked: false },
  { id: 55, name: '스터디', checked: false },
];

const filterSubOptions2 = [
  { id: 1, name: '사이드프로젝트', checked: false },
  { id: 2, name: '창업', checked: false },
  { id: 3, name: '크라우드펀딩', checked: false },
  { id: 4, name: '공모전', checked: false },
  { id: 5, name: '스터디', checked: false },
];

const filterSubOptions3 = [
  { id: 111, name: '사이드프로젝트', checked: false },
  { id: 222, name: '창업', checked: false },
  { id: 333, name: '크라우드펀딩', checked: false },
  { id: 444, name: '공모전', checked: false },
  { id: 555, name: '스터디', checked: false },
];

const filterOptions = [
  { name: 'IT', id: 1, checked: false },
  { name: '게임', id: 2, checked: false },
  { name: '제품', id: 3, checked: false },
  { name: '유튜브컨텐츠', id: 4, checked: false },
  { name: '영화', id: 5, checked: false },
  { name: '웹툰', id: 6, checked: false },
];

const filterOptions2 = [
  { name: 'a', id: 1, checked: false },
  { name: 'b', id: 2, checked: false },
  { name: 'c', id: 3, checked: false },
  { name: 'd', id: 4, checked: false },
  { name: 'e', id: 5, checked: false },
  { name: 'f', id: 6, checked: false },
];

const App = () => {
  const { checkboxValue, selectedCheckboxIds, onChangeCheckbox } = useCheckbox<{
    goal: FilterOption[];
    name: FilterOption[];
    oneMore: FilterOption[];
  }>({
    goal: filterSubOptions,
    name: filterSubOptions2,
    oneMore: filterSubOptions3,
  });
  const { radioValue, selectedRadioName, onChangeRadio } = useRadio<{
    name: FilterOption[];
    age: FilterOption[];
  }>({
    name: filterOptions,
    age: filterOptions2,
  });
  const { dropdownValue, onResetDropdown, onClickDropdown } =
    useDropdown<DropdownProps>({
      see: '',
      do: '',
    });
  const [tags, setTags] = useState<string[]>(['a', 'b', 'c']);

  useEffect(() => {
    if (dropdownValue.do !== '') {
      console.log(dropdownValue.see, dropdownValue.do);
      onResetDropdown('see');
      onResetDropdown('do');
    }
  }, [dropdownValue, onResetDropdown]);

  console.log(selectedCheckboxIds, selectedRadioName);

  return (
    <>
      {tags.map((tag) => (
        <Tag
          key={tag}
          onDelete={(name) => setTags(tags.filter((tag) => tag !== name))}
        >
          {tag}
        </Tag>
      ))}
      <Spacer size={50} />
      <Child />
      <Dropdown
        selectedValue={dropdownValue.see}
        initialValue="시/도/군"
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
        initialValue="시/도/군"
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

      {['A', 'B', 'C'].map((item) => (
        <Checkbox
          key={item}
          width={50}
          value={item}
          checked={Math.random() > 0.5}
          onChange={(e) => {
            console.log(e);
          }}
        />
      ))}

      <Button>버튼 테스트</Button>

      <CheckboxContainer
        label="가입 목적"
        checkboxKey="goal"
        options={checkboxValue.goal}
        onChange={onChangeCheckbox}
      />
      <CheckboxContainer
        label="이름 선택"
        checkboxKey="name"
        options={checkboxValue.name}
        onChange={onChangeCheckbox}
        maxCount={3}
        required
      />
      <RadioContainer
        label="name"
        radioKey="name"
        options={radioValue.name}
        onChange={onChangeRadio}
        required
      />
      <RadioContainer
        label="age"
        radioKey="age"
        options={radioValue.age}
        onChange={onChangeRadio}
      />
    </>
  );
};

export default App;
