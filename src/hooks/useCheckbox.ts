import { ChangeEvent, useCallback, useState } from 'react';

interface CheckboxItem {
  id: number;
  name: string;
  checked: boolean;
}

interface Config<T> {
  checkboxKey: keyof T;
  maxCount?: number;
}

const useCheckbox = <T extends Record<keyof T, CheckboxItem[]>>(
  initialValue: T,
) => {
  const [checkboxValue, setCheckboxValue] = useState<T>(initialValue);

  const onChangeCheckbox = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      checkboxKey: keyof T,
      config?: Config<T>,
    ) => {
      const { value, checked } = e.target;

      setCheckboxValue((prev) => {
        const currentCheckedCount = prev[checkboxKey].filter(
          (checkbox) => checkbox.checked,
        ).length;

        if (config && checked && currentCheckedCount === config.maxCount) {
          return prev;
        }

        return {
          ...prev,
          [checkboxKey]: prev[checkboxKey].map((checkbox) =>
            checkbox.name === value ? { ...checkbox, checked } : checkbox,
          ),
        };
      });
    },
    [],
  );

  return {
    checkboxValue,
    onChangeCheckbox,
  };
};

export default useCheckbox;
