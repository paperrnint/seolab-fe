import { z } from 'zod/v4';

export const joinSchema = z
  .object({
    email: z.email('올바른 이메일 형식'),
    password: z
      .string()
      .min(8, '최소 8자 이상')
      .max(20, '최대 20자 이하')
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, '대소문자, 숫자 ,특수문자 포함'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호와 일치',
    path: ['confirmPassword'],
  });

export type JoinFormData = z.infer<typeof joinSchema>;
