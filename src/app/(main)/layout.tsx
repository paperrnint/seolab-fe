import { NavLayout } from '@/components/layout/NavLayout/NavLayout';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NavLayout>{children}</NavLayout>;
}
