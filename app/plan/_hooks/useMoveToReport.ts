import { toast } from '@/app/_hooks/useToast';
import { useRouter, useSearchParams } from 'next/navigation';

export const useMoveToReport = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const items = searchParams.get('items');

  const handleShareClick = () => {
    if (items === null) {
      toast({
        className: 'fixed top-2 left-1/2 z-[100] -translate-x-1/2 w-full max-w-md p-4',
        variant: 'destructive',
        title: '아이템을 담아주세요!',
        duration: 1000,
      });
      return;
    }
    router.push(`/report?items=${items}`);
  };

  return { handleShareClick };
};
