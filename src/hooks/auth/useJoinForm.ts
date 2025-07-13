import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { JoinFormData, joinSchema } from '@/lib/schemas/joinSchema';
import { getJoinValidations } from '@/lib/validations/joinValidation';

export const useJoinForm = () => {
  const form = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const { watch } = form;
  const email = watch('email');
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const validations = {
    email: getJoinValidations('email', email),
    password: getJoinValidations('password', password),
    confirmPassword: [{ label: '비밀번호와 일치', isValid: !!confirmPassword && confirmPassword === password }],
  };

  return {
    form,
    validations,
  };
};
