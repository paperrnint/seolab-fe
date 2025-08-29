'use client';

import { useState } from 'react';

import { Join } from '@/components/auth/Join/Join';
import { EmailStep } from '@/components/auth/JoinStep/EmailStep';
import { PasswordStep } from '@/components/auth/JoinStep/PasswordStep';
import { VerifyStep } from '@/components/auth/JoinStep/VerifyStep';
import { JOIN_HEADERS, JOIN_MAX_STEP } from '@/constants';
import { useJoinPage } from '@/hooks';
import { JoinStep } from '@/types/ui/form';

export default function JoinPage() {
  const { validations, handleSubmit, form } = useJoinPage();
  const [step, setStep] = useState<JoinStep>(1);

  const clickNext = () => {
    setStep((prev) => {
      if (prev === JOIN_MAX_STEP) return prev;
      return (prev + 1) as JoinStep;
    });
  };

  return (
    <Join.Container>
      <Join.Header description={JOIN_HEADERS[step]} />
      <Join.Form onSubmit={handleSubmit}>
        {step === 1 ? (
          <EmailStep form={form} validations={validations} clickNext={clickNext} />
        ) : step === 2 ? (
          <VerifyStep clickNext={clickNext} />
        ) : (
          <PasswordStep form={form} validations={validations} />
        )}
      </Join.Form>
    </Join.Container>
  );
}
