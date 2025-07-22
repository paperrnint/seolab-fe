// MSW v1용 handlers.ts
import { rest } from 'msw';

import { LoginFormData } from '@/lib/schemas/loginSchema';

import { mockAuthResponse, validUser } from '../constants/auth';

export const handlers = [
  rest.post('*/api/auth/login', async (req, res, ctx) => {
    const body = (await req.json()) as LoginFormData;
    const success = body.email === validUser.email && body.password === validUser.password;

    if (success) {
      return res(ctx.status(200), ctx.json(mockAuthResponse.success));
    }

    return res(ctx.status(401), ctx.json(mockAuthResponse.failure));
  }),
];
