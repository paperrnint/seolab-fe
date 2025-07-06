export type DropdownOption = {
  label: string;
  value: string;
};

export type JoinStep = 'email' | 'password';

export type JoinFormData = {
  email: string;
  password: string;
};
