export type JoinStep = 1 | 2 | 3;

export type ValidationText = {
  label: string;
  isValid: boolean;
};

export type JoinValidations = {
  email: ValidationText[];
  password: ValidationText[];
  confirmPassword: ValidationText[];
};
