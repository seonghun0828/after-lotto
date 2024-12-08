export interface ArticleType {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  image: string;
  category: string;
  content?: ArticleContentType[];
}

export interface ArticleContentType {
  heading: string;
  body: string;
}
