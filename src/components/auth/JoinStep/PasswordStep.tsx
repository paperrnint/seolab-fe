import { UseFormReturn } from 'react-hook-form';

import { FormSubmitButton } from '@/components/common/ui/FormSubmitButton/FormSubmitButton';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { JoinValidations } from '@/types/ui/form';

import { Join } from '../Join/Join';

interface Props {
  form: UseFormReturn<JoinFormData>;
  validations: JoinValidations;
}

export const PasswordStep = ({ form, validations }: Props) => {
  return (
    <>
      <div>
        <Join.Input
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          required
          type="password"
          validations={validations.password}
          {...form.register('password')}
        />
        <Join.Input
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          required
          type="password"
          validations={validations.confirmPassword}
          {...form.register('confirmPassword')}
        />
      </div>
      <div className="flex gap-2 mt-12">
        <FormSubmitButton disabled={!form.formState.isValid || form.formState.isSubmitting}>가입하기</FormSubmitButton>
      </div>
    </>
  );
};
