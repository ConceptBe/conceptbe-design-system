import { ChangeEvent, useCallback, useState } from 'react';

interface RadioItem {
  checked: boolean;
  [key: string]: any;
}

interface OnResetRadioProps<T> {
  radioKey: keyof T;
  resetId?: number;
}

const getSelectedRadioValueName = <T extends Record<keyof T, RadioItem[]>>(
  radioValue: T,
) => {
  const radioValueKeys = Object.keys(radioValue) as (keyof T)[];

  const selectedRadioValue = radioValueKeys.reduce(
    (acc, key) => {
      acc[key] = radioValue[key].find((radio) => radio.checked)?.name;
      return acc;
    },
    new Object() as Record<keyof T, string>,
  );

  return selectedRadioValue;
};

const useRadio = <T extends Record<keyof T, RadioItem[]>>(initialValue: T) => {
  const [radioValue, setRadioValue] = useState<T>(initialValue);
  const selectedRadioName = getSelectedRadioValueName(radioValue);

  const onResetRadio = useCallback(
    ({ radioKey, resetId }: OnResetRadioProps<T>) => {
      setRadioValue((prev) => ({
        ...prev,
        [radioKey]: prev[radioKey].map((radio) => ({
          ...radio,
          checked: resetId ? radio.id === resetId : false,
        })),
      }));
    },
    [],
  );

  const onChangeRadio = useCallback(
    (e: ChangeEvent<HTMLInputElement>, radioKey: keyof T) => {
      const { value } = e.target;

      setRadioValue((prev) => ({
        ...prev,
        [radioKey]: prev[radioKey].map((radio) => ({
          ...radio,
          checked: radio.name === value,
        })),
      }));
    },
    [],
  );

  return {
    radioValue,
    selectedRadioName,
    setRadioValue,
    onChangeRadio,
    onResetRadio,
  };
};

export default useRadio;
