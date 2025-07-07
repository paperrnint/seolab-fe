import { Button } from '@/components/Button/Button';
import { Join } from '../Join';

export const StepPassword = () => {
  const clickSubmit = () => {
    // @todo: send to server
    console.log('회원가입 완료');
  };

  return (
    <Join.Form>
      <div>
        <Join.Input
          label="비밀번호"
          placeholder="비밀번호"
          required
          type="password"
          isValid={false}
          validations={[
            { label: '8 - 20자', isValid: false },
            { label: '대소문자, 숫자, 특수문자 포함', isValid: false },
          ]}
        />
        <Join.Input
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          required
          type="password"
          isValid={false}
          validations={[{ label: '비밀번호와 일치', isValid: false }]}
        />
      </div>
      <div className="flex gap-2 mt-12">
        <Button variant="form" disabled onClick={clickSubmit}>
          가입하기
        </Button>
      </div>
    </Join.Form>
  );
};
