import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { FormSubmitButton } from '@/components/common/ui/FormSubmitButton/FormSubmitButton';
import { SmallButton } from '@/components/common/ui/SmallButton/SmallButton';
import { Timer } from '@/components/common/ui/Timer/Timer';
import { useError } from '@/hooks';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { VerifyRequestResponse } from '@/types/api/auth';
import { ApiResult } from '@/types/api/common';

import { Join } from '../Join/Join';

interface Props {
  form: UseFormReturn<JoinFormData>;
  timerExpires: number | null;
  verifyRequest: (email: string) => Promise<ApiResult<VerifyRequestResponse>>;
  verifyCode: (email: string, code: string) => Promise<ApiResult>;
  clickNext: () => void;
}

export const VerifyStep = ({ form, timerExpires, verifyRequest, verifyCode, clickNext }: Props) => {
  const [codeInput, setCodeInput] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [showTimer, setShowTimer] = useState(true);

  const router = useRouter();
  const { showError } = useError();

  const email = form.watch('email');
  const isValid = codeInput.trim().length > 0;

  const onTimerEnd = () => {
    setShowTimer(false);
  };

  const resetCode = () => {
    setCodeInput('');
  };

  const verifyResend = async () => {
    resetCode();
    const result = await verifyRequest(email);

    if (result.success) {
      setShowTimer(true);
    } else {
      showError('verifyRequest', result.error.status, () => {
        if (result.error.status === 409) {
          router.push('/login');
        } else {
          resetCode();
        }
      });
    }
  };

  const verify = async () => {
    setIsVerifying(true);

    const result = await verifyCode(email, codeInput.trim());

    if (result.success) {
      clickNext();
    } else {
      showError('verifyCode', result.error.status, () => {
        resetCode();
      });
    }

    setIsVerifying(false);
  };

  return (
    <>
      <div>
        <Join.Input
          label="인증번호"
          placeholder="인증번호"
          required
          type="text"
          rightComponent={
            showTimer ? (
              !!timerExpires && <Timer second={timerExpires} onTimerEnd={onTimerEnd} />
            ) : (
              <SmallButton variant="subtle" type="button" onClick={verifyResend}>
                재전송
              </SmallButton>
            )
          }
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
        />
      </div>
      <div className="flex gap-2 mt-12">
        <FormSubmitButton type="button" onClick={verify} disabled={!isValid || isVerifying}>
          다음
        </FormSubmitButton>
      </div>
    </>
  );
};
