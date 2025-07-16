import { NextRequest, NextResponse } from 'next/server';

import { fetchData } from './lib/fetch/fetchData';
import { RefreshResponse } from './types/api/auth';

const publicPaths = ['/login', '/join'];

export const middleware = async (request: NextRequest) => {
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const pathname = request.nextUrl.pathname;
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  // 인증이 필요한 페이지에 접근하면
  if (!isPublicPath) {
    // refreshToken 이 없으면 로그인 페이지로 이동
    if (!refreshToken) {
      console.log('❌ (인증 필요한 페이지) refresh token 없음 → 로그인으로 이동');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // refreshToken 이 있으면 유효성 검사
    try {
      const { accessToken } = await fetchData<RefreshResponse>('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        credentials: 'include',
      });

      // 유효하면 accessToken, refreshToken 헤더 추가 후 요청 전달
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-access-token', accessToken);
      requestHeaders.set('x-refresh-token', refreshToken);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (err) {
      console.error('❌ (인증 필요한 페이지) token refresh 실패 → 로그인으로 이동', err);

      // 유효하지 않으면 /login 으로 리다이렉트
      const loginResponse = NextResponse.redirect(new URL('/login', request.url));
      loginResponse.cookies.delete('refreshToken');
      return loginResponse;
    }
  }

  // 공개 경로에 이미 인증된 사용자가 접근하는 경우
  if (isPublicPath && refreshToken) {
    try {
      await fetchData('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        credentials: 'include',
      });

      // 유효한 토큰이 있으면 홈으로 리다이렉트
      console.log('❌ (public 페이지) 인증된 사용자 → 홈으로 이동');
      return NextResponse.redirect(new URL('/', request.url));
    } catch (err) {
      console.error('❌ (public 페이지) 유효하지 않은 토큰 → 그대로', err);
      // 없으면 refreshToken 삭제 후 요청 전달
      const response = NextResponse.next();
      response.cookies.delete('refreshToken');
      return response;
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/login', '/join', '/new', '/favorite', '/archive', '/setting', '/book/:path*'],
};
