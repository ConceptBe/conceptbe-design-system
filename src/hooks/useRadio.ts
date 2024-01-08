import { ChangeEvent, useState } from 'react';

interface RadioItem {
  id: number;
  name: string;
  checked: boolean;
}

const useRadio = <T extends Record<string, RadioItem[]>>(initialValue: T) => {
  const [radioValue, setRadioValue] = useState<T>(initialValue);

  const onChangeRadio = (
    e: ChangeEvent<HTMLInputElement>,
    radioKey: keyof T,
  ) => {
    const { value } = e.target;

    setRadioValue((prev) => ({
      ...prev,
      [radioKey]: prev[radioKey].map((radio) => ({
        ...radio,
        checked: radio.name === value,
      })),
    }));
  };

  return {
    radioValue,
    onChangeRadio,
  };
};

export default useRadio;
