'use client';

import { Button } from '@/components/Button/Button';
import { Timer } from '@/components/Timer/Timer';
import { JoinStep } from '@/types';
import { useState } from 'react';
import { Join } from '../Join';

interface Props {
  setStep: (step: JoinStep) => void;
}

export const StepEmail = ({ setStep }: Props) => {
  const [startTimer, setStartTimer] = useState(false);

  const clickNext = () => {
    // @todo: email validation
    setStep('password');
  };

  const clickAuth = () => {
    // @todo: request email auth
    setStartTimer(true);
  };

  return (
    <Join.Form>
      <div>
        <Join.Input
          label="이메일"
          placeholder="이메일"
          required
          isValid={false}
          rightComponent={
            <Button variant="inner" type="button" onClick={clickAuth}>
              인증
            </Button>
          }
          validations={[{ label: '이메일 형식', isValid: false }]}
        />
        <Join.Input
          placeholder="인증번호"
          rightComponent={startTimer && <Timer second={180} />}
          isValid={false}
          validations={[{ label: '인증번호 확인', isValid: false }]}
        />
      </div>
      <div className="mt-12">
        <Button variant="form" onClick={clickNext}>
          다음
        </Button>
      </div>
    </Join.Form>
  );
};
