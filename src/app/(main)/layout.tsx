import { NavLayout } from '@/components/NavLayout/NavLayout';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NavLayout>{children}</NavLayout>;
}
