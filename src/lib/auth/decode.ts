import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
}

export const getTokenExp = (token: string) => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.exp * 1000;
  } catch {
    return null;
  }
};
