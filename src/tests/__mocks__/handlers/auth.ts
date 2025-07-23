// MSW v1용 handlers.ts
import { rest } from 'msw';

import { JoinFormData } from '@/lib/schemas/joinSchema';
import { LoginFormData } from '@/lib/schemas/loginSchema';

import { duplicatedUser, mockAuthResponse, mockSignupResponse, validUser } from '../constants/auth';

export const handlers = [
  rest.post('*/api/auth/login', async (req, res, ctx) => {
    const body = (await req.json()) as LoginFormData;
    const success = body.email === validUser.email && body.password === validUser.password;

    if (success) {
      return res(ctx.status(200), ctx.json(mockAuthResponse.success));
    }

    return res(ctx.status(401), ctx.json(mockAuthResponse.failure));
  }),

  rest.post('*/api/auth/signup', async (req, res, ctx) => {
    const body = (await req.json()) as JoinFormData;
    const success =
      body.email === validUser.email && body.password === validUser.password && body.confirmPassword === body.password;
    const duplicated = body.email === duplicatedUser.email;

    if (success) {
      return res(ctx.status(201), ctx.json(mockSignupResponse.success));
    }

    if (duplicated) {
      return res(ctx.status(409), ctx.json(mockSignupResponse.duplicated));
    }

    return res(ctx.status(400), ctx.json(mockSignupResponse.failure));
  }),
];
