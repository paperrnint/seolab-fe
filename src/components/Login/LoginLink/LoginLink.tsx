import { Txt } from '@/components/Txt/Txt';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
}

export const LoginLink = ({ children, href }: Props) => {
  return (
    <li className="px-3 first:pl-0 last:pr-0">
      <Link href={href}>
        <Txt variant="muted">{children}</Txt>
      </Link>
    </li>
  );
};
