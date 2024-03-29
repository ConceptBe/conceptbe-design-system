import { ReactNode, createContext } from 'react';

import FieldInput from './FieldInput';
import FieldTextarea from './FieldTextarea';
import { Config, Validate } from '../../types/useField';
import Flex from '../Flex/Flex';
import Text from '../Text/Text';

interface Props {
  children: ReactNode;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    config: Config,
  ) => void;
  onValidate?: () => Validate[];
  maxLength?: number;
  required?: boolean;
}

interface FieldContextProps {
  required: boolean;
  inputValue: string;
  maxLength: number | undefined;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    config: Config,
  ) => void;
  onValidate?: () => Validate[];
}

export const FieldContext = createContext<FieldContextProps>({
  required: false,
  inputValue: '',
  maxLength: undefined,
  onChange: () => {},
  onValidate: () => [],
});

const Field = ({
  label,
  value,
  onChange,
  onValidate,
  maxLength,
  required = false,
  children,
  ...attributes
}: Props) => {
  return (
    <FieldContext.Provider
      value={{
        required,
        inputValue: value,
        maxLength,
        onChange,
        onValidate,
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={12}
        {...attributes}
      >
        <Text font="suit15m" color="b9" required={required}>
          {label}
        </Text>
        {maxLength && (
          <Flex>
            <Text font="suit13m" color="c1">
              {value.length}
            </Text>
            <Text font="suit13m" color="b9">
              /{maxLength}
            </Text>
          </Flex>
        )}
      </Flex>
      {children}
    </FieldContext.Provider>
  );
};

Field.Input = FieldInput;
Field.Textarea = FieldTextarea;

export default Field;
