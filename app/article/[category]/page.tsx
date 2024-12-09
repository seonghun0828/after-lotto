import ArticleNavBar from './_components/ArticleNavBar';
import ArticleContent from './_components/ArticleContent';

export default async function ArticlePage() {
  return (
    <div className='flex flex-col gap-[40px] py-[84px] px-[40px]'>
      <h1 className='text-[32px] font-bold'>주제별 콘텐츠</h1>
      <ArticleNavBar />
      <ArticleContent />
    </div>
  );
}
