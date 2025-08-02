import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
  contentRef: React.RefObject<HTMLDivElement | null>;
  scrollContainerId: string;
}

export const useScrollLock = ({ isOpen, contentRef, scrollContainerId }: Props) => {
  useEffect(() => {
    if (!isOpen) return;

    const scrollContainer = document.getElementById(scrollContainerId);

    if (scrollContainer) {
      const currentScrollTop = scrollContainer.scrollTop;

      const preventDefault = (e: Event) => {
        const target = e.target as HTMLElement;
        const dropdownContent = contentRef?.current;

        if (dropdownContent && dropdownContent.contains(target)) {
          return; // 드롭다운 내부에서는 이벤트 막지 않음
        }

        e.preventDefault();
      };

      const maintainScrollPosition = () => {
        scrollContainer.scrollTop = currentScrollTop;
      };

      scrollContainer.addEventListener('wheel', preventDefault, { passive: false });
      scrollContainer.addEventListener('touchmove', preventDefault, { passive: false });
      scrollContainer.addEventListener('scroll', maintainScrollPosition);

      return () => {
        scrollContainer.removeEventListener('wheel', preventDefault);
        scrollContainer.removeEventListener('touchmove', preventDefault);
        scrollContainer.removeEventListener('scroll', maintainScrollPosition);
      };
    }
  }, [contentRef, isOpen, scrollContainerId]);
};
