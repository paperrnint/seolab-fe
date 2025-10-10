import { NextRequest, NextResponse } from 'next/server';

import { fetchData } from './lib/fetch/fetchData';
import { RefreshResponse } from './types/api/auth';

const publicPaths = ['/login', '/join', '/landing'];

export const middleware = async (request: NextRequest) => {
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const pathname = request.nextUrl.pathname;
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  // 루트 경로(/) 처리
  if (pathname === '/') {
    if (!refreshToken) {
      // 비로그인 → /landing
      console.log('✅ 루트 접근 (비로그인) → /landing으로 이동');
      return NextResponse.redirect(new URL('/landing', request.url));
    }

    // refreshToken 유효성 검사
    try {
      await fetchData<RefreshResponse>('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        credentials: 'include',
      });

      // 유효한 토큰 → /home으로
      console.log('✅ 루트 접근 (로그인) → /home으로 이동');
      return NextResponse.redirect(new URL('/home', request.url));
    } catch (err) {
      console.error('❌ 루트 접근 (토큰 만료) → /landing으로 이동', err);
      // 토큰 만료 → /landing
      const landingResponse = NextResponse.redirect(new URL('/landing', request.url));
      landingResponse.cookies.delete('refreshToken');
      return landingResponse;
    }
  }

  // 인증이 필요한 페이지에 접근
  if (!isPublicPath) {
    // refreshToken 이 없으면 로그인 페이지로 이동
    if (!refreshToken) {
      console.log('❌ (인증 필요) refresh token 없음 → /login으로 이동');
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
      console.error('❌ (인증 필요) token refresh 실패 → /login으로 이동', err);

      const loginResponse = NextResponse.redirect(new URL('/login', request.url));
      loginResponse.cookies.delete('refreshToken');
      return loginResponse;
    }
  }

  // /login, /join에 로그인된 사용자가 접근
  if (isPublicPath && pathname !== '/landing' && refreshToken) {
    try {
      await fetchData<RefreshResponse>('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        credentials: 'include',
      });

      console.log('✅ (login/join) 인증된 사용자 → /home으로 이동');
      return NextResponse.redirect(new URL('/home', request.url));
    } catch (err) {
      console.error('❌ (login/join) 유효하지 않은 토큰 → refreshToken 삭제', err);
      const response = NextResponse.next();
      response.cookies.delete('refreshToken');
      return response;
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/',
    '/login',
    '/join',
    '/landing',
    '/home',
    '/search',
    '/favorite',
    '/archive',
    '/setting',
    '/book/:path*',
  ],
};
