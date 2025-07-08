import { z } from 'zod/v4';

import { ValidationText } from '@/types';

import { JoinFormData } from '../schemas/joinSchema';

export const getJoinValidations = (fieldName: keyof JoinFormData, value: string) => {
  const validations: ValidationText[] = [];

  if (fieldName === 'email') {
    validations.push({
      label: '올바른 이메일 형식',
      isValid: z.email().safeParse(value).success,
    });
  }

  if (fieldName === 'password') {
    validations.push(
      {
        label: '8-20자',
        isValid: value.length >= 8 && value.length <= 20,
      },
      {
        label: '대소문자, 숫자, 특수문자 포함',
        isValid: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(value),
      }
    );
  }

  if (fieldName === 'confirmPassword') {
    // component 에서 추가
  }

  return validations;
};
