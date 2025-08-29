'use client';

import { UseFormReturn } from 'react-hook-form';

import { FormSubmitButton } from '@/components/common/ui/FormSubmitButton/FormSubmitButton';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { JoinValidations } from '@/types/ui/form';

import { Join } from '../Join/Join';

interface Props {
  form: UseFormReturn<JoinFormData>;
  validations: JoinValidations;
  clickNext: () => void;
}

export const EmailStep = ({ form, validations, clickNext }: Props) => {
  const email = form.watch('email');
  const isEmailValid = validations.email.every((rule) => rule.isValid);

  const verifyRequest = async () => {
    // @todo: verify email
    setTimeout(() => {
      console.log('이메일 전송 완료');
    }, 1000);

    clickNext();
  };

  return (
    <>
      <div>
        <Join.Input
          label="이메일"
          placeholder="이메일"
          required
          type="email"
          validations={validations.email}
          {...form.register('email')}
        />
      </div>
      <div className="flex gap-2 mt-12">
        <FormSubmitButton type="button" onClick={verifyRequest} disabled={!email || !isEmailValid}>
          이메일 인증하기
        </FormSubmitButton>
      </div>
    </>
  );
};
