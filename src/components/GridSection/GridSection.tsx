import { Txt } from '../Txt/Txt';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  label?: string;
}

export const GridSection = ({ children, label }: Props) => {
  return (
    <section className="border-t border-t-border pb-6">
      <div className="py-4">{!!label && <Txt variant="muted">{label}</Txt>}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">{children}</div>
    </section>
  );
};
