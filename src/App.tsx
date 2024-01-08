import { useEffect } from 'react';

import { CheckboxContainer, RadioContainer, useCheckbox, useRadio } from '.';
import Dropdown from './components/Dropdown/Dropdown';
import useDropdown from './hooks/useDropdown';

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
  const { checkboxValue, onChangeCheckBox } = useCheckbox<{
    goal: FilterOption[];
    goal2: FilterOption[];
  }>({
    goal: filterSubOptions,
    goal2: filterSubOptions2,
  });
  const { radioValue, onChangeRadio } = useRadio<{
    name: FilterOption[];
    age: FilterOption[];
  }>({
    name: filterOptions,
    age: filterOptions2,
  });
  const { dropdownValue, onResetDropdown, onClickDropdown } = useDropdown<{
    see: string;
    do: string;
  }>({
    see: '',
    do: '',
  });

  useEffect(() => {
    if (dropdownValue.do !== '') {
      console.log(dropdownValue.see, dropdownValue.do);
      onResetDropdown('see');
      onResetDropdown('do');
    }
  }, [dropdownValue, onResetDropdown]);

  return (
    <>
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

      <CheckboxContainer
        nameKey="goal"
        options={checkboxValue.goal}
        onChange={(e) => onChangeCheckBox(e, 'goal')}
      />
      <CheckboxContainer
        nameKey="goal2"
        options={checkboxValue.goal2}
        onChange={(e) =>
          onChangeCheckBox(e, 'goal2', {
            checkboxKey: 'goal2',
            maxValue: 3,
          })
        }
      />
      <RadioContainer
        nameKey="name"
        options={radioValue.name}
        onChange={(e) => onChangeRadio(e, 'name')}
      />
      <RadioContainer
        nameKey="age"
        options={radioValue.age}
        onChange={(e) => onChangeRadio(e, 'age')}
      />
    </>
  );
};

export default App;
