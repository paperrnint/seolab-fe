interface Props {
  width: number;
  alt?: string;
}

export const BookCoverEmpty = ({ width, alt = '책 커버' }: Props) => {
  return (
    <div
      className="flex bg-gray-100 justify-center items-center"
      style={{ width, height: `${Math.floor((width * 4) / 3)}px` }}
    >
      <p className="p-2 text-[8px] text-text-muted text-center">{alt}</p>
    </div>
  );
};
