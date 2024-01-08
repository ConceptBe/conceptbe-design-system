import { ChangeEvent, useCallback, useState } from 'react';

interface CheckboxItem {
  id: number;
  name: string;
  checked: boolean;
}

interface Limit<T> {
  checkboxKey: keyof T;
  maxValue: number;
}

const useCheckbox = <T extends Record<string, CheckboxItem[]>>(
  initialValue: T,
) => {
  const [checkboxValue, setCheckboxValue] = useState<T>(initialValue);

  const onChangeCheckbox = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      checkboxKey: keyof T,
      limit?: Limit<T>,
    ) => {
      const { value, checked } = e.target;

      setCheckboxValue((prev) => {
        const currentCheckedCount = prev[checkboxKey].filter(
          (checkbox) => checkbox.checked,
        ).length;

        if (limit && checked && currentCheckedCount === limit.maxValue) {
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
