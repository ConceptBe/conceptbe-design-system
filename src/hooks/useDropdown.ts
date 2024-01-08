import { useState } from 'react';

const useDropdown = <T extends Record<string, string>>(initialValue: T) => {
  const [dropdownValue, setDropdownValue] = useState<T>(initialValue);

  const onClickDropdown = (clickedValue: string, dropdownKey: keyof T) => {
    setDropdownValue((prev) => ({
      ...prev,
      [dropdownKey]: clickedValue,
    }));
  };

  const onResetDropdown = (dropdownKey: keyof T) => {
    setDropdownValue((prev) => ({
      ...prev,
      [dropdownKey]: '',
    }));
  };

  return {
    dropdownValue,
    onResetDropdown,
    onClickDropdown,
  };
};

export default useDropdown;
