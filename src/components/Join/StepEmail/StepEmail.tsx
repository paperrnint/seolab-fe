'use client';

import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/Button/Button';
import { Timer } from '@/components/Timer/Timer';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { getJoinValidations } from '@/lib/validations/joinValidation';
import { JoinStep } from '@/types';

import { Join } from '../Join';

const AUTH_CODE = 'ABCDEF';

interface Props {
  setStep: (step: JoinStep) => void;
  form: UseFormReturn<JoinFormData>;
}

export const StepEmail = ({ setStep, form }: Props) => {
  const [expectedAuthCode, setExpectedAuthCode] = useState<string | null>(null); // 이메일 인증코드 일치 여부
  const [isValidTime, setIsValidTime] = useState(false);

  const { register, watch, trigger } = form;

  const emailValue = watch('email') || '';
  const authCodeValue = watch('authCode') || '';
  const emailValidations = getJoinValidations('email', emailValue);
  const authCodeValidations = [
    ...getJoinValidations('authCode', authCodeValue),
    { label: '인증번호 일치', isValid: authCodeValue === expectedAuthCode },
  ];

  const onTimerEnd = () => {
    setIsValidTime(false);
    setExpectedAuthCode(null);
  };

  const clickAuth = async () => {
    const isValid = await trigger('email');
    if (isValid) {
      // @todo: request email auth (이미 가입되어 있는 경우 /login 으로 이동)
      // API returns { isDuplicated, authCode }
      console.log(`${emailValue} 로 인증 메일 전송`);
      setExpectedAuthCode(AUTH_CODE);
      setIsValidTime(true);
    }
  };

  const clickNext = async () => {
    const isValidForm = await trigger(['email', 'authCode']);
    if (isValidForm && authCodeValue === expectedAuthCode) {
      setStep('password');
    }
  };

  return (
    <>
      <div>
        <Join.Input
          type="email"
          label="이메일"
          placeholder="이메일"
          required
          isValid={false}
          rightComponent={
            <Button variant="inner" type="button" onClick={clickAuth}>
              인증
            </Button>
          }
          validations={emailValidations}
          {...register('email')}
        />
        <Join.Input
          type="text"
          placeholder="인증번호"
          rightComponent={isValidTime && <Timer second={180} onTimerEnd={onTimerEnd} />}
          isValid={false}
          validations={authCodeValidations}
          {...register('authCode', {
            validate: (value) => value === expectedAuthCode || '인증번호 일치하지 않음',
          })}
        />
      </div>
      <div className="mt-12">
        <Button variant="form" onClick={clickNext} disabled={!authCodeValue || authCodeValue !== expectedAuthCode}>
          다음
        </Button>
      </div>
    </>
  );
};
