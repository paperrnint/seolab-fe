import type { Meta, StoryObj } from '@storybook/nextjs';
import { LoginLink } from '../LoginLink/LoginLink';
import { LoginLinks } from './LoginLinks';

const links = [
  { href: 'https://www.naver.com', label: '네이버' },
  { href: 'https://www.google.com', label: '구글' },
  { href: 'https://www.github.com', label: '깃허브' },
];

const meta = {
  title: 'Login/LoginLinks',
  component: LoginLinks,
  parameters: {
    layout: 'centered',
    componentSubtitle: '<LoginLink> 를 감싸는 컨테이너',
    docs: {
      description: {
        component: `
- 각 LoginLink 를 구분선으로 구분
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof LoginLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        {links.map(({ href, label }) => (
          <LoginLink key={label} href={href}>
            {label}
          </LoginLink>
        ))}
      </>
    ),
  },
};
