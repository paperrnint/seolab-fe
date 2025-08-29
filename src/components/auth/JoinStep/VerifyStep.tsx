import { useState } from 'react';

import { FormSubmitButton } from '@/components/common/ui/FormSubmitButton/FormSubmitButton';
import { SmallButton } from '@/components/common/ui/SmallButton/SmallButton';
import { Timer } from '@/components/common/ui/Timer/Timer';
import { JOIN_VERIFY_TIME } from '@/constants';

import { Join } from '../Join/Join';

interface Props {
  clickNext: () => void;
}

export const VerifyStep = ({ clickNext }: Props) => {
  const [codeInput, setCodeInput] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [showTimer, setShowTimer] = useState(true);

  const isValid = codeInput.trim().length > 0;

  const onTimerEnd = () => {
    setShowTimer(false);
  };

  const verifyResend = () => {
    setCodeInput('');
    // @todo: 재전송 api
    setShowTimer(true);
  };

  const verify = async () => {
    setIsVerifying(true);
    // @todo: verify code api

    // 성공 -> 다음으로 이동
    setTimeout(() => {
      console.log('인증 성공');
      clickNext();
    }, 1000);

    // 실패 -> 실패 모달 띄우기
    // 이메일 인증에 실패했어요 (다시 인증하기)

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
              <Timer second={JOIN_VERIFY_TIME} onTimerEnd={onTimerEnd} />
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
