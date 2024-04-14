import { ChangeEvent, useCallback, useState } from 'react';

interface CheckboxItem {
  checked: boolean;
  [key: string]: any;
}

interface Config<T> {
  checkboxKey: keyof T;
  maxCount?: number;
}

const useCheckbox = <T extends Record<keyof T, CheckboxItem[]>>(
  initialValue: T,
) => {
  const [checkboxValue, setCheckboxValue] = useState<T>(initialValue);

  const onResetCheckbox = useCallback((checkboxKey: keyof T) => {
    setCheckboxValue((prev) => ({
      ...prev,
      [checkboxKey]: prev[checkboxKey].map((checkbox) => ({
        ...checkbox,
        checked: false,
      })),
    }));
  }, []);

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
    setCheckboxValue,
    onChangeCheckbox,
    onResetCheckbox,
  };
};

export default useCheckbox;
