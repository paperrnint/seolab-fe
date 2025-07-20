import { useCallback, useEffect, useRef } from 'react';

interface Props {
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
}

export const useIntersection = ({ onIntersect, threshold = 0.1, rootMargin = '200px' }: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const intersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(intersect, {
      threshold,
      rootMargin,
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [intersect, rootMargin, threshold]);

  return targetRef;
};
