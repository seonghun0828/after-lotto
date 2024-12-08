import { useRouter, useSearchParams } from 'next/navigation';

export const useMoveToReport = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const items = searchParams.get('items');

  const handleShareClick = () => {
    router.push(`/report?items=${items}`);
  };

  return { handleShareClick };
};
