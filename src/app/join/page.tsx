'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Join } from '@/components/Join/Join';
import { StepEmail } from '@/components/Join/StepEmail/StepEmail';
import { StepPassword } from '@/components/Join/StepPassword/StepPassword';
import { JoinFormData, joinSchema } from '@/lib/schemas/joinSchema';
import { JoinStep } from '@/types';

export default function JoinPage() {
  const [step, setStep] = useState<JoinStep>('email');
  const router = useRouter();
  const description = `로그인에 사용할 ${step === 'email' ? '이메일을' : '비밀번호를'} 입력하세요`;

  const form = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      email: '',
      authCode: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: JoinFormData) => {
    try {
      console.log('join data form:', data);
      // @todo: join api
      router.push('/login');
    } catch (err) {
      console.error('join error', err);
    }
  };

  return (
    <Join.Container>
      <Join.Header description={description} />
      <Join.Form onSubmit={form.handleSubmit(onSubmit)}>
        {step === 'email' ? <StepEmail setStep={setStep} form={form} /> : <StepPassword form={form} />}
      </Join.Form>
    </Join.Container>
  );
}
