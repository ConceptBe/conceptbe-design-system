export interface Config {
  isRequired?: boolean;
  maxLength?: number;
  name?: string;
  onValidate?: () => Validate[];
}

export interface Validate {
  validateFn: (value: string) => boolean;
  errorMessage: string;
}
