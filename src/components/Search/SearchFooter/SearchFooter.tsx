export const SearchFooter = () => {
  return (
    <div className="px-1 py-5 border-t border-t-border/50">
      <p className="text-primary text-xs py-2">찾으시는 책이 없나요?</p>
      <ul className="text-subtle text-xs leading-6 [&>li]:before:content-['•'] [&>li]:before:mr-2 [&>li]:before:text-subtle/50">
        <li>
          1:1 문의하기
          <a href="mailto:cs.dotori@gmail.com" className="ml-1 underline">
            cs.dotori@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};
