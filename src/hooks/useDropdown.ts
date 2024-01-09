import { useCallback, useState } from 'react';

const useDropdown = <T extends object>(initialValue: T) => {
  const [dropdownValue, setDropdownValue] = useState<T>(initialValue);

  const onClickDropdown = useCallback(
    (clickedValue: string, dropdownKey: keyof T) => {
      setDropdownValue((prev) => ({
        ...prev,
        [dropdownKey]: clickedValue,
      }));
    },
    [],
  );

  const onResetDropdown = useCallback((dropdownKey: keyof T) => {
    setDropdownValue((prev) => ({
      ...prev,
      [dropdownKey]: '',
    }));
  }, []);

  return {
    dropdownValue,
    onResetDropdown,
    onClickDropdown,
  };
};

export default useDropdown;
