import { Button } from '@/components/Button/Button';
import { BsPlus } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="p-2">
      <Button variant="primary">이어서 기록하기</Button>
      <Button variant="secondary">수정</Button>
      <Button variant="accent">
        <BsPlus size={20} />
        이어서 기록하기
      </Button>
    </div>
  );
}
