import KakaoLogo from '@/assets/kakao-logo.svg';
import NaverLogo from '@/assets/naver-logo.svg';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'naver' | 'kakao';
}

export const SocialButton = ({ provider, ...props }: Props) => {
  const providers = {
    naver: {
      label: '네이버',
      icon: <NaverLogo width={24} height={24} />,
      color: 'bg-[#08C75A] border-[#08C75A] text-text-btn',
    },
    kakao: {
      label: '카카오',
      icon: <KakaoLogo width={24} height={24} />,
      color: 'bg-[#fee500] border-[#fee500] text-[#191919]',
    },
  };

  return (
    <button
      className={`
        flex gap-3 items-center justify-center
        w-fit p-4 rounded-full border
        font-[Arial] text-sm font-semibold
        cursor-pointer
        ${providers[provider].color}
        `}
      {...props}
    >
      {providers[provider].icon}
      {/* {providers[provider].label}로 로그인 */}
    </button>
  );
};
