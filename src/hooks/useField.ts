import { useCallback, useState } from 'react';

import { Config } from '../types/useField';

const initErrorMessages = <T extends Record<keyof T, string>>(
  initialValue: T,
) => {
  const initKeys = Object.keys(initialValue) as (keyof T)[];

  return initKeys.reduce(
    (acc, key) => {
      acc[key] = '';
      return acc;
    },
    new Object() as Record<keyof T, string>,
  );
};

const useField = <T extends Record<keyof T, string>>(initialValue: T) => {
  const [fieldValue, setFieldValue] = useState<T>(initialValue);
  const [fieldErrorValue, setFieldErrorValue] = useState<
    Record<keyof T, string>
  >(initErrorMessages(initialValue));

  const onChangeField = useCallback(
    (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      config?: Config,
    ) => {
      const { name, value } = e.target;

      if (value.length - 1 === config?.maxLength) {
        return;
      }

      setFieldValue((prevValues: T) => ({
        ...prevValues,
        [name]: value,
      }));

      if (config?.required && value.length === 0) {
        setFieldErrorValue((prev) => ({
          ...prev,
          [name]: '필수 입력 값입니다.',
        }));
        return;
      }

      if (config && config.onValidate) {
        config.onValidate().forEach((validate) => {
          if (config.name === name && validate.validateFn(value)) {
            setFieldErrorValue((prev) => ({
              ...prev,
              [name]: validate.errorMessage,
            }));
          }
        });

        if (
          config
            .onValidate()
            .find(
              (validate) => config.name === name && validate.validateFn(value),
            )
        )
          return;
      }
      setFieldErrorValue((prev) => ({ ...prev, [name]: '' }));
    },
    [],
  );

  return {
    fieldValue,
    fieldErrorValue,
    setFieldErrorValue,
    onChangeField,
  };
};

export default useField;
