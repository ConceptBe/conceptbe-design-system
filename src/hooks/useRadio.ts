import { ChangeEvent, useCallback, useState } from 'react';

interface RadioItem {
  id: number;
  name: string;
  checked: boolean;
}

interface OnResetRadioProps<T> {
  radioKey: keyof T;
  resetId?: number;
}

const useRadio = <T extends Record<keyof T, RadioItem[]>>(initialValue: T) => {
  const [radioValue, setRadioValue] = useState<T>(initialValue);

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
    setRadioValue,
    onChangeRadio,
    onResetRadio,
  };
};

export default useRadio;
