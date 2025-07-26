import { useParams, useRouter, useSearchParams } from 'next/navigation';

export const useBookMode = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = params.id as string;
  const mode = searchParams.get('mode');
  const isEditMode = mode === 'edit';

  const onEdit = () => {
    router.push(`/book/${id}?mode=edit`);
  };

  const onConfirm = () => {
    router.push(`book/${id}`);
  };

  return {
    isEditMode,
    onEdit,
    onConfirm,
  };
};
