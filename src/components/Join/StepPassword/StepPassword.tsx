import { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/Button/Button';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { getJoinValidations } from '@/lib/validations/joinValidation';

import { Join } from '../Join';

interface Props {
  form: UseFormReturn<JoinFormData>;
}

export const StepPassword = ({ form }: Props) => {
  const {
    register,
    watch,
    formState: { isSubmitting, isValid },
  } = form;

  const passwordValue = watch('password') || '';
  const confirmPasswordValue = watch('confirmPassword') || '';

  const passwordValidations = getJoinValidations('password', passwordValue);
  const confirmPasswordValidations = [
    { label: '비밀번호와 일치', isValid: !!confirmPasswordValue && passwordValue === confirmPasswordValue },
  ];

  return (
    <>
      <div>
        <Join.Input
          label="비밀번호"
          placeholder="비밀번호"
          required
          type="password"
          isValid={false}
          validations={passwordValidations}
          {...register('password')}
        />
        <Join.Input
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          required
          type="password"
          isValid={false}
          validations={confirmPasswordValidations}
          {...register('confirmPassword')}
        />
      </div>
      <div className="flex gap-2 mt-12">
        <Button variant="form" disabled={!isValid || isSubmitting}>
          가입하기
        </Button>
      </div>
    </>
  );
};
