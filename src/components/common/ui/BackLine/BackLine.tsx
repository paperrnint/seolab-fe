import { Txt } from '../Txt/Txt';

export const BackLine = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        flex items-center justify-center gap-2
        before:content-[''] before:w-1/2 before:h-px before:bg-border
        after:content-[''] after:w-1/2 after:h-px after:bg-border
      "
    >
      <div className="text-center whitespace-nowrap">
        <Txt variant="muted">{children}</Txt>
      </div>
    </div>
  );
};
