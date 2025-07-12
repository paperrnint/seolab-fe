import { FaBookmark, FaBoxArchive, FaHouse, FaPenToSquare } from 'react-icons/fa6';

export type Tab = 'home' | 'favorite' | 'archive' | 'new';

export interface TabConfig {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export const tabs: Record<Tab, TabConfig> = {
  home: {
    icon: <FaHouse />,
    label: '홈',
    href: '/',
  },
  favorite: {
    icon: <FaBookmark />,
    label: '즐겨찾기',
    href: '/favorite',
  },
  archive: {
    icon: <FaBoxArchive />,
    label: '내 서랍',
    href: '/archive',
  },
  new: {
    icon: <FaPenToSquare />,
    label: '새 기록',
    href: '/new',
  },
};
