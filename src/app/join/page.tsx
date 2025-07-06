'use client';

import { Join } from '@/components/Join/Join';
import { StepEmail } from '@/components/Join/StepEmail/StepEmail';
import { StepPassword } from '@/components/Join/StepPassword/StepPassword';
import { JoinStep } from '@/types';
import { useState } from 'react';

export default function JoinPage() {
  const [step, setStep] = useState<JoinStep>('email');
  const description = `로그인에 사용할 ${step === 'email' ? '이메일을' : '비밀번호를'} 입력하세요`;
  // @todo: form data

  return (
    <Join.Container>
      <Join.Header description={description} />
      {step === 'email' ? <StepEmail setStep={setStep} /> : <StepPassword />}
    </Join.Container>
  );
}
