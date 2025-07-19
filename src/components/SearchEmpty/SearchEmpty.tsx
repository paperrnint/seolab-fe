import { SearchFooter } from '../SearchFooter/SearchFooter';

interface Props {
  query: string;
}

export const SearchEmpty = ({ query }: Props) => {
  return (
    <div className="px-1 flex flex-col justify-between h-full">
      <div className="py-2">
        <p className="pb-2">
          <em className="text-emp font-bold pr-1 not-italic">{`'${query}'`}</em>에 대한 검색 결과가 없습니다.
        </p>
        <ul className="pb-4 text-secondary text-xs leading-6 [&>li]:before:content-['•'] [&>li]:before:mr-1 [&>li]:before:text-subtle/50">
          <li>단어의 철자가 정확한지 확인해 보세요.</li>
          <li>ISBN의 경우 특수문자를 제외한 숫자만 입력했는지 확인해 보세요.</li>
          <li>띄어쓰기를 확인해 보세요</li>
        </ul>
      </div>
      <SearchFooter />
    </div>
  );
};
