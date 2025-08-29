'use client';

import { useRouter } from 'next/navigation';
import { UseFormReturn } from 'react-hook-form';

import { FormSubmitButton } from '@/components/common/ui/FormSubmitButton/FormSubmitButton';
import { useError } from '@/hooks';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { VerifyRequestResponse } from '@/types/api/auth';
import { ApiResult } from '@/types/api/common';
import { JoinValidations } from '@/types/ui/form';

import { Join } from '../Join/Join';

interface Props {
  form: UseFormReturn<JoinFormData>;
  validations: JoinValidations;
  clickNext: () => void;
  verifyRequest: (email: string) => Promise<ApiResult<VerifyRequestResponse>>;
  setExpires: (expires: number) => void;
}

export const EmailStep = ({ form, validations, clickNext, verifyRequest, setExpires }: Props) => {
  const router = useRouter();
  const { showError } = useError();

  const email = form.watch('email');
  const isEmailValid = validations.email.every((rule) => rule.isValid);

  const onClick = async () => {
    const result = await verifyRequest(email);

    if (result.success) {
      setExpires(result.data.expiresInSeconds);
      clickNext();
    } else {
      showError('verifyRequest', result.error.status, () => {
        if (result.error.status === 409) {
          router.push('/login');
        } else {
          form.resetField('email');
        }
      });
    }
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
        <FormSubmitButton type="button" onClick={onClick} disabled={!email || !isEmailValid}>
          이메일 인증하기
        </FormSubmitButton>
      </div>
    </>
  );
};
