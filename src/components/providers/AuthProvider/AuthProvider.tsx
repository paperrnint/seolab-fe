import { getServerAuthData } from '@/lib/auth/server';

import { AuthClientProvider } from '../AuthClientProvider/AuthClientProvider';

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = async ({ children }: Props) => {
  const authData = await getServerAuthData();

  return <AuthClientProvider initialAuthData={authData}>{children}</AuthClientProvider>;
};
