import { Txt } from '../../common/ui/Txt/Txt';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  label?: string;
  hideBorder?: boolean;
}

export const GridSection = ({ children, label, hideBorder }: Props) => {
  const borderClass = hideBorder ? 'pb-6' : 'border-t border-t-border pt-4 pb-6';
  return (
    <section className={borderClass}>
      <div className="pb-4">{!!label && <Txt variant="muted">{label}</Txt>}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">{children}</div>
    </section>
  );
};
